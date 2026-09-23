// Icônes de réseaux sociaux minimalistes (traits simples, héritent de la couleur du texte).
// Les liens sont des espaces réservés ("#") en attendant les URLs réelles des profils.

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path
        d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.5l-.5 3H11.5v7h-3v-7H7v-3h1.5v-2A4 4 0 0 1 12.5 5H15v3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <line x1="8" y1="10.5" x2="8" y2="16" strokeLinecap="round" />
      <circle cx="8" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16" strokeLinecap="round" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3.5" />
      <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
