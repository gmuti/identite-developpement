// Génère lib/worldShapes.js : tracés SVG des pays (Natural Earth 1:110m via world-atlas)
// en projection Equal Earth, pour une carte statique sans dépendance côté site.
//
// Les paquets nécessaires ne font PAS partie du projet. Pour régénérer, dans un dossier temporaire :
//   npm init -y && npm i world-atlas@2 topojson-client@3 d3-geo@3
//   cp <projet>/scripts/generate-world-map.mjs . && node generate-world-map.mjs <projet>/lib/worldShapes.js
import fs from "node:fs";
import { feature } from "topojson-client";
import { geoEqualEarth, geoPath } from "d3-geo";

const out = process.argv[2];
const topo = JSON.parse(fs.readFileSync(new URL("./node_modules/world-atlas/countries-110m.json", import.meta.url)));
const countries = feature(topo, topo.objects.countries).features.filter((f) => f.properties.name !== "Antarctica");

const WIDTH = 1000;
const projection = geoEqualEarth().fitWidth(WIDTH, { type: "FeatureCollection", features: countries });
const path = geoPath(projection).digits(0);
const bounds = path.bounds({ type: "FeatureCollection", features: countries });
const height = Math.ceil(bounds[1][1]);

const shapes = countries
  .map((f) => ({ id: String(f.id ?? f.properties.name), name: f.properties.name, d: path(f), c: path.centroid(f).map(Math.round) }))
  .filter((s) => s.d);

const file = `// Fichier généré - ne pas modifier à la main.
// Source : Natural Earth 1:110m (domaine public) via world-atlas, projection Equal Earth.
// id = code ISO 3166-1 numérique (ex. "124" Canada, "180" RD Congo) ; c = centre du pays [x, y].
export const WORLD_VIEWBOX = "0 0 ${WIDTH} ${height}";
export const WORLD_SHAPES = ${JSON.stringify(shapes)};
`;
fs.writeFileSync(out, file);
console.log(shapes.length, "countries,", (file.length / 1024).toFixed(1), "KB, viewBox 0 0", WIDTH, height);
console.log(shapes.filter((s) => ["Canada", "Dem. Rep. Congo", "Rwanda", "Burundi", "France", "Belgium", "United States of America"].includes(s.name)).map((s) => `${s.id}=${s.name}`).join(", "));
