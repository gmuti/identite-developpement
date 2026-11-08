// Rendu minimal du contenu riche Sanity (Portable Text), sans dépendance supplémentaire.
// Gère : paragraphes, intertitres h2/h3, citations, listes à puces/numérotées, gras, italique, liens.

function renderSpans(block) {
  const markDefs = block.markDefs || [];
  return (block.children || []).map((span, i) => {
    let node = span.text;
    for (const mark of span.marks || []) {
      if (mark === "strong") node = <strong className="font-semibold text-ink">{node}</strong>;
      else if (mark === "em") node = <em>{node}</em>;
      else if (mark === "underline") node = <span className="underline">{node}</span>;
      else {
        const def = markDefs.find((d) => d._key === mark);
        if (def?._type === "link" && def.href) {
          const external = /^https?:\/\//.test(def.href);
          node = (
            <a
              href={def.href}
              className="font-medium text-navy underline decoration-gold underline-offset-2 hover:decoration-navy"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {node}
            </a>
          );
        }
      }
    }
    return <span key={span._key || i}>{node}</span>;
  });
}

function renderBlock(block) {
  const children = renderSpans(block);
  switch (block.style) {
    case "h2":
      return <h2 className="mt-10 font-display text-2xl text-navy">{children}</h2>;
    case "h3":
      return <h3 className="mt-8 text-lg font-medium text-ink">{children}</h3>;
    case "blockquote":
      return (
        <blockquote className="my-8 border-l-2 border-gold pl-5 font-display text-xl leading-relaxed text-navy">
          {children}
        </blockquote>
      );
    default:
      return <p className="mt-5 leading-relaxed text-ink">{children}</p>;
  }
}

export default function PortableText({ value }) {
  if (!Array.isArray(value) || value.length === 0) return null;

  // Regroupe les éléments de liste consécutifs dans un même <ul>/<ol>.
  const groups = [];
  for (const block of value) {
    if (block._type !== "block") continue;
    if (block.listItem) {
      const last = groups[groups.length - 1];
      if (last?.list === block.listItem) last.items.push(block);
      else groups.push({ list: block.listItem, items: [block], key: block._key });
    } else {
      groups.push({ block, key: block._key });
    }
  }

  return (
    <div>
      {groups.map((g, i) => {
        if (!g.list) return <div key={g.key || i}>{renderBlock(g.block)}</div>;
        const ListTag = g.list === "number" ? "ol" : "ul";
        return (
          <ListTag
            key={g.key || i}
            className={`mt-5 flex flex-col gap-2 pl-5 text-ink ${g.list === "number" ? "list-decimal" : "list-disc"} marker:text-gold-dark`}
          >
            {g.items.map((item, j) => (
              <li key={item._key || j} className="leading-relaxed">
                {renderSpans(item)}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}
