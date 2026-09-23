// Dictionnaire de traduction FR / EN — source unique de tout le texte du site.

export const translations = {
  fr: {
    common: {
      home: "Accueil"
    },
    notFound: {
      eyebrow: "Erreur 404",
      title: "Page introuvable",
      text: "La page que vous cherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil"
    },
    nav: {
      orgName: "Identité et Développement",
      home: "Accueil",
      about: "À propos",
      departments: "Départements",
      projects: "Nos projets",
      news: "Actualités",
      contact: "Contact",
      donate: "Faire un don"
    },
    footer: {
      rights: (year) => `© ${year} Identité et Développement. Ontario, Canada.`,
      navHeading: "Navigation",
      legalHeading: "Légal",
      contactHeading: "Coordonnées",
      followHeading: "Suivez-nous",
      nonprofitBadge: "Organisme à but non lucratif — Ontario, Canada"
    },
    siteData: {
      slogan: "Découvrir son identité, bâtir son avenir.",
      mission:
        "Accompagner les individus dans leur croissance spirituelle, personnelle, éducative et financière, tout en soutenant l'éducation, les œuvres humanitaires et le développement communautaire.",
      vision:
        "Former des personnes transformées dans leur identité et engagées dans le développement de leur communauté.",
      objectifs: [
        "Promouvoir le développement spirituel et personnel.",
        "Organiser des formations, conférences et séminaires.",
        "Soutenir l'éducation par des bourses et des aides scolaires.",
        "Venir en aide aux orphelins, veuves et personnes vulnérables.",
        "Encourager l'entrepreneuriat et l'autonomie financière.",
        "Réaliser des projets de développement communautaire.",
        "Produire et diffuser des ressources éducatives.",
        "Collaborer avec des organismes poursuivant des objectifs similaires."
      ],
      values: ["Intégrité", "Transparence", "Responsabilité", "Respect", "Compassion", "Service", "Excellence", "Bonne gestion"],
      fondateurs: [
        {
          initials: "OM",
          name: "Olivier Musanganya Lubambo",
          role: "Fondateur",
          description: "Gardien de la vision depuis la fondation de l'organisation."
        },
        {
          initials: "GL",
          name: "Germaine Linda Mutikanga Basimine",
          role: "Cofondatrice",
          description: "À ses côtés depuis les premiers jours, elle incarne l'engagement communautaire au cœur de la mission."
        }
      ],
      departments: [
        {
          name: "Technologies, Médias et Communication",
          status: "Actif",
          tone: "active",
          attributions: [
            "Identité visuelle, affiches et supports promotionnels.",
            "Site web, hébergement et sécurité des données.",
            "Coordination des équipes techniques et médiatiques."
          ]
        },
        {
          name: "Éducation et Formation",
          status: "En développement",
          tone: "pending",
          attributions: [
            "Programme de bourses et soutien scolaire.",
            "Organisation de formations et séminaires.",
            "Partenariats avec écoles et institutions."
          ]
        },
        {
          name: "Action Humanitaire et Sociale",
          status: "En développement",
          tone: "pending",
          attributions: [
            "Projets d'aide aux orphelins et personnes vulnérables.",
            "Fonds d'assistance humanitaire.",
            "Coordination de l'assistance sociale."
          ]
        },
        {
          name: "Finances et Développement Économique",
          status: "En développement",
          tone: "pending",
          attributions: [
            "Formation en entrepreneuriat.",
            "Accompagnement vers l'autonomie financière.",
            "Développement économique communautaire."
          ]
        },
        {
          name: "Partenariats et Relations Extérieures",
          status: "En développement",
          tone: "pending",
          attributions: ["Collaboration avec des organismes similaires.", "Relations institutionnelles.", "Développement de partenariats stratégiques."]
        },
        {
          name: "Jeunesse et Développement Communautaire",
          status: "En développement",
          tone: "pending",
          attributions: ["Activités destinées à la jeunesse.", "Projets de développement communautaire.", "Encadrement et mentorat local."]
        }
      ],
      axes: [
        {
          title: "Structuration & gouvernance",
          items: ["Incorporation officielle et ouverture d'un compte bancaire dédié.", "Mise en place d'un site web et d'outils de communication."]
        },
        {
          title: "Conférences & formations",
          items: ["Organisation de conférences et séminaires réguliers.", "Ateliers de croissance personnelle et spirituelle."]
        },
        {
          title: "Éducation & bourses scolaires",
          items: ["Programme de bourses et de soutien scolaire.", "Partenariats avec écoles, églises et organismes éducatifs."]
        },
        {
          title: "Action humanitaire",
          items: ["Projets d'aide aux orphelins et personnes vulnérables.", "Fonds d'assistance humanitaire."]
        },
        {
          title: "Entrepreneuriat & développement économique",
          items: ["Formations en entrepreneuriat et autonomie financière.", "Développement de partenariats à l'international."]
        },
        {
          title: "Reconnaissance & expansion",
          items: ["Démarche vers le statut d'organisme de bienfaisance.", "Expansion progressive des programmes éducatifs."]
        }
      ],
      donationTrust: [
        { title: "Usage exclusif à la mission", text: "Les ressources servent uniquement à la réalisation de la mission de l'organisation." },
        { title: "Double signature", text: "Deux signatures sont requises pour tout chèque, virement ou contrat financier important." },
        { title: "Rapport annuel", text: "Le trésorier présente chaque année le bilan financier et les activités menées." }
      ],
      membershipConditions: [
        "Adhérer à la mission de l'organisation.",
        "Respecter les règlements internes.",
        "Maintenir une conduite compatible avec nos valeurs."
      ],
      contactInfo: {
        email: "[Adresse courriel à venir]",
        phone: "[Téléphone à venir]",
        address: "Ontario, Canada"
      }
    },
    home: {
      badge: "Organisme à but non lucratif",
      titleLine1: "Découvrir son identité,",
      titleLine2: "bâtir son avenir.",
      ctaDonate: "Faire un don",
      ctaMission: "Découvrir notre mission",
      visionEyebrow: "Notre vision",
      visionTitle: "Former des personnes transformées dans leur identité.",
      visionText: "Engagées dans le développement de leur communauté, elles deviennent des agents de changement durable, chez elles comme autour d'elles.",
      missionEyebrow: "Notre mission",
      missionTitle: "Accompagner la croissance, à chaque étape.",
      valuesEyebrow: "Charte des valeurs",
      valuesTitle: "Ce qui guide chacune de nos actions",
      deptEyebrow: "Nos axes d'action",
      deptTitle: "Six départements au service de la mission",
      newsEyebrow: "À venir",
      newsTitle: "Actualités & événements",
      viewAll: "Voir tout →",
      photoSoon: "Photo à venir",
      newsletterTitle: "Restez informés de nos activités",
      newsletterText: "Recevez nos actualités, conférences et projets directement par courriel.",
      emailPlaceholder: "Votre adresse courriel",
      emailSrLabel: "Adresse courriel",
      subscribe: "S'abonner"
    },
    about: {
      crumb: "À propos",
      title: "Qui sommes-nous",
      raisonEyebrow: "Notre raison d'être",
      visionMissionTitle: "Vision & Mission",
      visionLabel: "Vision",
      missionLabel: "Mission",
      objectifsEyebrow: "Objectifs officiels",
      objectifsTitle: "Ce que nous poursuivons",
      valuesEyebrow: "Charte des valeurs",
      valuesTitle: "Nos huit valeurs fondamentales",
      foundersEyebrow: "Gardiens de la vision",
      foundersTitle: "Nos fondateurs"
    },
    departments: {
      crumb: "Départements",
      title: "Structure & départements",
      eyebrow: "Nos six départements",
      subtitle: "Rôles et attributions"
    },
    projects: {
      crumb: "Nos projets",
      title: "Nos axes d'intervention",
      eyebrow: "Ce sur quoi nous travaillons",
      subtitle: "Six axes qui portent notre mission",
      ctaTitle: "Envie de contribuer à ces projets ?",
      ctaText: "Votre soutien aide directement à faire avancer chacun de ces axes.",
      ctaButton: "Faire un don"
    },
    news: {
      crumb: "Actualités",
      title: "Actualités & événements",
      subtitle: "Suivez les dernières nouvelles, conférences et formations de l'organisation.",
      articlesEyebrow: "Nos publications",
      articlesTitle: "Dernières actualités",
      eventsEyebrow: "À l'agenda",
      eventsTitle: "Prochains événements",
      noEvents: "Aucun événement n'est confirmé pour le moment. Revenez bientôt pour connaître nos prochaines conférences et formations.",
      photoSoon: "Photo à venir",
      dateSoon: "Date à venir",
      newsletterTitle: "Ne manquez aucune actualité",
      newsletterText: "Abonnez-vous pour recevoir nos prochaines annonces directement par courriel.",
      emailPlaceholder: "Votre adresse courriel",
      subscribe: "S'abonner"
    },
    donate: {
      crumb: "Faire un don",
      title: "Soutenir la mission",
      subtitle: "Chaque contribution aide à financer nos bourses scolaires, nos projets humanitaires et nos programmes de formation.",
      oneTimeEyebrow: "Don ponctuel",
      chooseAmount: "Choisissez un montant",
      customAmountLabel: "Ou montant personnalisé",
      customAmountPlaceholder: "Ex. 75",
      currency: "CAD",
      payButton: "Paiement sécurisé — bientôt disponible",
      payNote1: "Le formulaire de paiement en ligne (Stripe / PayPal) est en cours d'intégration.",
      payNote2Prefix: "En attendant, contactez-nous via la page ",
      payNote2Link: "Contact",
      payNote2Suffix: " pour organiser votre don.",
      trustEyebrow: "Gestion responsable",
      trustTitle: "Votre don, bien géré",
      memberEyebrow: "Aller plus loin",
      memberTitle: "Devenir membre",
      memberText: "Au-delà du don, vous pouvez vous engager durablement à nos côtés en respectant ces conditions :"
    },
    contact: {
      crumb: "Contact",
      title: "Contactez-nous",
      subtitle: "Une question, un projet, une envie de vous impliquer ? Écrivez-nous.",
      infoEyebrow: "Nos coordonnées",
      infoTitle: "Restons en contact",
      formTitle: "Envoyez-nous un message",
      labelName: "Nom complet",
      placeholderName: "Votre nom",
      labelEmail: "Adresse courriel",
      placeholderEmail: "vous@exemple.com",
      labelSubject: "Sujet",
      placeholderSubject: "Objet de votre message",
      labelMessage: "Message",
      placeholderMessage: "Votre message",
      sendButton: "Envoyer le message",
      formNote: (email) =>
        `L'envoi automatique des messages sera activé une fois notre service de messagerie connecté. En attendant, écrivez-nous directement à ${email}.`,
      fieldEmail: "Courriel",
      fieldPhone: "Téléphone",
      fieldAddress: "Adresse"
    },
    legal: {
      crumb: "Mentions légales",
      title: "Mentions légales",
      updated: "Dernière mise à jour : 23 septembre 2026",
      sections: [
        {
          heading: "Éditeur du site",
          body:
            "Ce site est édité par Identité et Développement, organisme à but non lucratif basé en Ontario, Canada, actuellement en démarche vers l'obtention du statut d'organisme de bienfaisance enregistré. Responsable de la publication : Olivier Musanganya Lubambo, fondateur."
        },
        {
          heading: "Hébergement",
          body: "Le site est hébergé par Hostinger (hostinger.com)."
        },
        {
          heading: "Conception et développement",
          body:
            "Conception, développement et sécurité du site assurés par le département Technologies, Médias et Communication d'Identité et Développement."
        },
        {
          heading: "Propriété intellectuelle",
          body:
            "L'ensemble des textes, images, logos et éléments graphiques de ce site sont la propriété d'Identité et Développement, sauf mention contraire, et ne peuvent être reproduits, distribués ou réutilisés sans autorisation écrite préalable."
        },
        {
          heading: "Limitation de responsabilité",
          body:
            "Les informations publiées sur ce site sont fournies à titre indicatif et mises à jour dans la mesure du possible. Identité et Développement ne peut être tenu responsable des erreurs, omissions, ou de l'indisponibilité temporaire du site, ni du contenu des sites externes vers lesquels il pourrait renvoyer."
        }
      ]
    },
    privacy: {
      crumb: "Politique de confidentialité",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 23 septembre 2026",
      sections: [
        {
          heading: "Données que nous collectons",
          body:
            "À ce jour, les formulaires de ce site (contact, don, infolettre) sont en cours de connexion à un service d'envoi sécurisé et ne transmettent ni ne stockent automatiquement de données. Si vous nous écrivez directement par courriel, nous recevons uniquement les informations que vous choisissez de nous transmettre (nom, adresse courriel, contenu du message). Cette politique sera mise à jour dès que les formulaires seront pleinement connectés, pour préciser quelles données sont alors transmises, à qui, et pour combien de temps elles sont conservées."
        },
        {
          heading: "Témoins de navigation (cookies) et suivi",
          body:
            "Ce site n'utilise aucun cookie de suivi ni outil d'analyse ou de publicité tiers. La seule information conservée localement est votre préférence de langue d'affichage (français ou anglais), enregistrée dans le stockage local de votre navigateur (localStorage) — elle reste sur votre appareil et n'est jamais transmise à nos serveurs."
        },
        {
          heading: "Vos droits",
          body:
            "Conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE), vous pouvez en tout temps demander à accéder aux renseignements personnels que vous nous avez transmis, les faire corriger, ou en demander la suppression, en nous écrivant à l'adresse ci-dessous."
        },
        {
          heading: "Nous contacter",
          body: "Pour toute question relative à cette politique ou à vos renseignements personnels, écrivez-nous à l'adresse indiquée sur notre page Contact."
        }
      ]
    }
  },

  en: {
    common: {
      home: "Home"
    },
    notFound: {
      eyebrow: "404 Error",
      title: "Page not found",
      text: "The page you're looking for doesn't exist or has been moved.",
      cta: "Back to home"
    },
    nav: {
      orgName: "Identité et Développement",
      home: "Home",
      about: "About Us",
      departments: "Departments",
      projects: "Our Projects",
      news: "News",
      contact: "Contact",
      donate: "Donate"
    },
    footer: {
      rights: (year) => `© ${year} Identité et Développement. Ontario, Canada.`,
      navHeading: "Navigation",
      legalHeading: "Legal",
      contactHeading: "Contact",
      followHeading: "Follow us",
      nonprofitBadge: "Non-profit organization — Ontario, Canada"
    },
    siteData: {
      slogan: "Discovering your identity, building your future.",
      mission:
        "Supporting individuals in their spiritual, personal, educational, and financial growth, while promoting education, humanitarian work, and community development.",
      vision: "Forming people transformed in their identity and engaged in the development of their community.",
      objectifs: [
        "Promote spiritual and personal development.",
        "Organize training sessions, conferences, and seminars.",
        "Support education through scholarships and school assistance.",
        "Help orphans, widows, and vulnerable individuals.",
        "Encourage entrepreneurship and financial independence.",
        "Carry out community development projects.",
        "Produce and share educational resources.",
        "Collaborate with organizations pursuing similar goals."
      ],
      values: ["Integrity", "Transparency", "Accountability", "Respect", "Compassion", "Service", "Excellence", "Good Stewardship"],
      fondateurs: [
        {
          initials: "OM",
          name: "Olivier Musanganya Lubambo",
          role: "Founder",
          description: "Guardian of the vision since the organization's founding."
        },
        {
          initials: "GL",
          name: "Germaine Linda Mutikanga Basimine",
          role: "Co-founder",
          description: "By his side from the very first days, she embodies the community commitment at the heart of the mission."
        }
      ],
      departments: [
        {
          name: "Technology, Media and Communication",
          status: "Active",
          tone: "active",
          attributions: [
            "Visual identity, posters, and promotional materials.",
            "Website, hosting, and data security.",
            "Coordination of technical and media teams."
          ]
        },
        {
          name: "Education and Training",
          status: "In progress",
          tone: "pending",
          attributions: [
            "Scholarship and school support program.",
            "Organizing training sessions and seminars.",
            "Partnerships with schools and institutions."
          ]
        },
        {
          name: "Humanitarian and Social Action",
          status: "In progress",
          tone: "pending",
          attributions: [
            "Aid projects for orphans and vulnerable people.",
            "Humanitarian assistance fund.",
            "Coordination of social assistance."
          ]
        },
        {
          name: "Finance and Economic Development",
          status: "In progress",
          tone: "pending",
          attributions: ["Entrepreneurship training.", "Support toward financial independence.", "Community economic development."]
        },
        {
          name: "Partnerships and External Relations",
          status: "In progress",
          tone: "pending",
          attributions: ["Collaboration with similar organizations.", "Institutional relations.", "Development of strategic partnerships."]
        },
        {
          name: "Youth and Community Development",
          status: "In progress",
          tone: "pending",
          attributions: ["Activities for youth.", "Community development projects.", "Local mentoring and supervision."]
        }
      ],
      axes: [
        {
          title: "Structure & governance",
          items: ["Official incorporation and opening of a dedicated bank account.", "Setting up a website and communication tools."]
        },
        {
          title: "Conferences & training",
          items: ["Organizing regular conferences and seminars.", "Personal and spiritual growth workshops."]
        },
        {
          title: "Education & scholarships",
          items: ["Scholarship and school support program.", "Partnerships with schools, churches, and educational organizations."]
        },
        {
          title: "Humanitarian action",
          items: ["Aid projects for orphans and vulnerable people.", "Humanitarian assistance fund."]
        },
        {
          title: "Entrepreneurship & economic development",
          items: ["Entrepreneurship and financial independence training.", "Developing international partnerships."]
        },
        {
          title: "Recognition & expansion",
          items: ["Pursuing charitable status.", "Progressive expansion of educational programs."]
        }
      ],
      donationTrust: [
        { title: "Mission-exclusive use", text: "Resources are used solely to carry out the organization's mission." },
        { title: "Dual signature", text: "Two signatures are required for any cheque, transfer, or major financial contract." },
        { title: "Annual report", text: "The treasurer presents the financial statement and activities each year." }
      ],
      membershipConditions: [
        "Adhere to the organization's mission.",
        "Comply with internal regulations.",
        "Maintain conduct consistent with our values."
      ],
      contactInfo: {
        email: "[Email address coming soon]",
        phone: "[Phone number coming soon]",
        address: "Ontario, Canada"
      }
    },
    home: {
      badge: "Non-profit organization",
      titleLine1: "Discovering your identity,",
      titleLine2: "building your future.",
      ctaDonate: "Donate",
      ctaMission: "Discover our mission",
      visionEyebrow: "Our vision",
      visionTitle: "Forming people transformed in their identity.",
      visionText: "Engaged in the development of their community, they become agents of lasting change, at home and around them.",
      missionEyebrow: "Our mission",
      missionTitle: "Supporting growth, every step of the way.",
      valuesEyebrow: "Charter of values",
      valuesTitle: "What guides every one of our actions",
      deptEyebrow: "Our areas of action",
      deptTitle: "Six departments serving the mission",
      newsEyebrow: "Coming up",
      newsTitle: "News & events",
      viewAll: "See all →",
      photoSoon: "Photo coming soon",
      newsletterTitle: "Stay informed about our activities",
      newsletterText: "Receive our news, conferences, and projects directly by email.",
      emailPlaceholder: "Your email address",
      emailSrLabel: "Email address",
      subscribe: "Subscribe"
    },
    about: {
      crumb: "About Us",
      title: "Who we are",
      raisonEyebrow: "Our purpose",
      visionMissionTitle: "Vision & Mission",
      visionLabel: "Vision",
      missionLabel: "Mission",
      objectifsEyebrow: "Official objectives",
      objectifsTitle: "What we pursue",
      valuesEyebrow: "Charter of values",
      valuesTitle: "Our eight core values",
      foundersEyebrow: "Guardians of the vision",
      foundersTitle: "Our founders"
    },
    departments: {
      crumb: "Departments",
      title: "Structure & departments",
      eyebrow: "Our six departments",
      subtitle: "Roles and responsibilities"
    },
    projects: {
      crumb: "Our Projects",
      title: "Our areas of intervention",
      eyebrow: "What we're working on",
      subtitle: "Six areas that carry our mission",
      ctaTitle: "Want to contribute to these projects?",
      ctaText: "Your support directly helps advance each of these areas.",
      ctaButton: "Donate"
    },
    news: {
      crumb: "News",
      title: "News & events",
      subtitle: "Follow the organization's latest news, conferences, and training sessions.",
      articlesEyebrow: "Our publications",
      articlesTitle: "Latest news",
      eventsEyebrow: "Coming up",
      eventsTitle: "Upcoming events",
      noEvents: "No event is confirmed at the moment. Check back soon for our upcoming conferences and training sessions.",
      photoSoon: "Photo coming soon",
      dateSoon: "Date to be announced",
      newsletterTitle: "Never miss an update",
      newsletterText: "Subscribe to receive our upcoming announcements directly by email.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe"
    },
    donate: {
      crumb: "Donate",
      title: "Support the mission",
      subtitle: "Every contribution helps fund our scholarships, humanitarian projects, and training programs.",
      oneTimeEyebrow: "One-time gift",
      chooseAmount: "Choose an amount",
      customAmountLabel: "Or custom amount",
      customAmountPlaceholder: "E.g. 75",
      currency: "CAD",
      payButton: "Secure payment — coming soon",
      payNote1: "The online payment form (Stripe / PayPal) is currently being integrated.",
      payNote2Prefix: "In the meantime, contact us via the ",
      payNote2Link: "Contact",
      payNote2Suffix: " page to arrange your donation.",
      trustEyebrow: "Responsible management",
      trustTitle: "Your donation, well managed",
      memberEyebrow: "Go further",
      memberTitle: "Become a member",
      memberText: "Beyond donating, you can commit to us long-term by respecting these conditions:"
    },
    contact: {
      crumb: "Contact",
      title: "Contact us",
      subtitle: "A question, a project, a wish to get involved? Write to us.",
      infoEyebrow: "Our contact details",
      infoTitle: "Let's stay in touch",
      formTitle: "Send us a message",
      labelName: "Full name",
      placeholderName: "Your name",
      labelEmail: "Email address",
      placeholderEmail: "you@example.com",
      labelSubject: "Subject",
      placeholderSubject: "Subject of your message",
      labelMessage: "Message",
      placeholderMessage: "Your message",
      sendButton: "Send message",
      formNote: (email) =>
        `Automatic message delivery will be enabled once our messaging service is connected. In the meantime, email us directly at ${email}.`,
      fieldEmail: "Email",
      fieldPhone: "Phone",
      fieldAddress: "Address"
    },
    legal: {
      crumb: "Legal Notice",
      title: "Legal Notice",
      updated: "Last updated: September 23, 2026",
      sections: [
        {
          heading: "Site publisher",
          body:
            "This site is published by Identité et Développement, a non-profit organization based in Ontario, Canada, currently in the process of obtaining registered charity status. Publication is overseen by Olivier Musanganya Lubambo, founder."
        },
        {
          heading: "Hosting",
          body: "This site is hosted by Hostinger (hostinger.com)."
        },
        {
          heading: "Design and development",
          body: "Site design, development, and security are handled by the Technologies, Media and Communication department of Identité et Développement."
        },
        {
          heading: "Intellectual property",
          body:
            "All text, images, logos, and graphic elements on this site are the property of Identité et Développement, unless otherwise stated, and may not be reproduced, distributed, or reused without prior written permission."
        },
        {
          heading: "Limitation of liability",
          body:
            "Information published on this site is provided for informational purposes and updated whenever possible. Identité et Développement cannot be held liable for errors, omissions, temporary unavailability of the site, or the content of external sites it may link to."
        }
      ]
    },
    privacy: {
      crumb: "Privacy Policy",
      title: "Privacy Policy",
      updated: "Last updated: September 23, 2026",
      sections: [
        {
          heading: "Data we collect",
          body:
            "As of now, the forms on this site (contact, donation, newsletter) are still being connected to a secure delivery service and do not automatically transmit or store any data. If you email us directly, we only receive the information you choose to send us (name, email address, message content). This policy will be updated once the forms are fully connected, to specify what data is transmitted, to whom, and for how long it is kept."
        },
        {
          heading: "Cookies and tracking",
          body:
            "This site does not use any tracking cookies, analytics, or third-party advertising tools. The only information stored locally is your display language preference (French or English), saved in your browser's local storage — it stays on your device and is never sent to our servers."
        },
        {
          heading: "Your rights",
          body:
            "Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you may at any time request access to, correction of, or deletion of the personal information you have shared with us by writing to the address below."
        },
        {
          heading: "Contact us",
          body: "For any question about this policy or your personal information, write to us at the address listed on our Contact page."
        }
      ]
    }
  }
};
