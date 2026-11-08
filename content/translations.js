// Dictionnaire de traduction FR / EN - source unique de tout le texte du site.

export const translations = {
  fr: {
    common: {
      home: "Accueil",
      breadcrumb: "Fil d’Ariane"
    },
    notFound: {
      eyebrow: "Erreur 404",
      title: "Page introuvable",
      text: "La page que vous cherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil"
    },
    nav: {
      orgName: "Identité et Développement Global",
      home: "Accueil",
      about: "À propos",
      team: "Notre équipe",
      departments: "Départements",
      projects: "Nos projets",
      news: "Actualités",
      contact: "Contact",
      donate: "Faire un don"
    },
    footer: {
      rights: (year) => `© ${year} Identité et Développement Global. Ontario, Canada.`,
      navHeading: "Navigation",
      legalHeading: "Légal",
      contactHeading: "Coordonnées",
      followHeading: "Suivez-nous",
      newTab: "s’ouvre dans un nouvel onglet",
      nonprofitBadge: "Organisme à but non lucratif - Ontario, Canada"
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
        // null tant que non communiqué : la ligne est alors masquée sur le site
        email: null,
        phone: null,
        address: "Ontario, Canada"
      }
    },
    home: {
      badge: "Organisme à but non lucratif",
      titleLine1: "Découvrir son identité,",
      titleLine2: "bâtir son avenir",
      ctaDonate: "Faire un don",
      ctaMission: "Découvrir notre mission",
      mapAlt: "Carte du monde des pays où nous agissons :",
      mapListTitle: "Où nous agissons",
      visionEyebrow: "Notre vision",
      visionTitle: "Former des personnes transformées dans leur identité",
      visionText: "Engagées dans le développement de leur communauté, elles deviennent des agents de changement durable, chez elles comme autour d'elles.",
      missionEyebrow: "Notre mission",
      missionTitle: "Accompagner la croissance, à chaque étape",
      valuesEyebrow: "Charte des valeurs",
      valuesTitle: "Ce qui guide chacune de nos actions",
      deptEyebrow: "Nos départements",
      deptTitle: "Un département actif, cinq en préparation",
      deptLink: "Voir la structure complète",
      newsEyebrow: "Actualités",
      newsTitle: "Actualités & événements",
      viewAll: "Toutes les actualités",
      photoSoon: "Photo à venir",
      newsletterTitle: "Restez informés de nos activités",
      newsletterText: "Recevez nos actualités, conférences et projets directement par courriel.",
      emailPlaceholder: "Votre adresse courriel",
      emailSrLabel: "Adresse courriel",
      subscribe: "S'abonner"
    },
    homeSections: {
      heroEyebrow: "Organisme à but non lucratif · Ontario, Canada",
      heroPhotoTitle: "Ottawa, Ontario",
      heroPhotoText: "Notre siège social",
      visionMissionChip: "Vision & mission",
      missionPrefix: "Notre mission :",
      approachEyebrow: "Notre approche",
      approachTitle: "Accompagner la personne",
      approachAccent: "dans sa globalité",
      approachCardTitle: "Global",
      approachCardText:
        "Nous accompagnons chaque personne sur les quatre dimensions de sa croissance, et soutenons l'éducation, l'humanitaire et le développement communautaire.",
      approachCount: "4",
      approachCountLabel: "dimensions de croissance",
      pillars: [
        { title: "Spirituelle", text: "Développement spirituel et personnel" },
        { title: "Personnelle", text: "Formations, conférences et séminaires" },
        { title: "Éducative", text: "Bourses et aides scolaires" },
        { title: "Financière", text: "Entrepreneuriat et autonomie financière" }
      ],
      mapTitle: "Où nous",
      mapAccent: "agissons",
      mapIntro: "Depuis notre siège à Ottawa, en Ontario, nous tissons des liens avec la RD Congo, la France et le Togo.",
      mapCountryNote: "Pays d'action",
      mapCreditsNote: "Crédits des photos dans les mentions légales",
      deptEyebrow: "Nos départements",
      valuesLabel: "Nos valeurs",
      trustTitle: "Une gestion",
      trustAccent: "transparente et responsable",
      foundedTitle: "Fondé en Ontario",
      foundedText: "Par Olivier Musanganya Lubambo et Germaine Linda Mutikanga Basimine, gardiens de la vision.",
      teamLink: "Notre équipe",
      signaturesCount: "2",
      signaturesText: "signatures requises pour tout chèque, virement ou contrat financier important",
      valuesCount: "8",
      valuesText: "valeurs fondamentales qui guident chacune de nos actions",
      donateTitle: "Soutenir",
      donateAccent: "la mission",
      donateOneTime: "Don ponctuel",
      donateNote: "Paiement en ligne bientôt disponible. En attendant, contactez-nous."
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
      foundersTitle: "Nos fondateurs",
      teamLink: "Voir toute l'équipe"
    },
    team: {
      crumb: "Notre équipe",
      title: "Notre équipe",
      subtitle: "Les personnes qui portent la vision et font vivre l'organisation au quotidien.",
      groups: [
        {
          id: "fondateurs",
          eyebrow: "Gardiens de la vision",
          title: "Fondateurs",
          members: [
            {
              initials: "OM",
              name: "Olivier Musanganya Lubambo",
              role: "Fondateur · Président",
              description: "Gardien de la vision depuis la fondation de l'organisation.",
              photo: "/images/membres/olivier2.jpeg",
              photoPosition: "center 30%",
              photoZoom: 1.2
            },
            {
              initials: "GL",
              name: "Germaine Linda Mutikanga Basimine",
              role: "Cofondatrice · Secrétaire",
              description: "Aux côtés du fondateur depuis les premiers jours, elle incarne l'engagement communautaire au cœur de la mission.",
              photo: "/images/membres/germaine.jpeg",
              photoPosition: "center 30%",
              photoZoom: 1.2
            }
          ]
        },
        {
          id: "conseil",
          eyebrow: "Gouvernance",
          title: "Conseil d'administration",
          intro: "Aux côtés des fondateurs, qui y siègent comme président et secrétaire.",
          members: [{ initials: "MD", name: "Moise Duciel Mpozayo", role: "Administrateur", photo: null }]
        },
        {
          id: "technologies-medias-communication",
          eyebrow: "Département actif",
          title: "Technologies, Médias et Communication",
          motto: "Communiquer avec excellence, innover avec impact.",
          members: [
            {
              initials: "BF",
              name: "Bwira Mishiki Freddy",
              role: "Directeur du département · Responsable du service Design graphique et identité visuelle",
              photo: null
            },
            {
              initials: "GM",
              name: "Gedeon Mutikanga Ruvuguta",
              role: "Responsable du service Informatique et développement web",
              photo: "/images/membres/gedeon.png",
              photoPosition: "center 0%"
            }
          ]
        }
      ],
      joinTitle: "Les autres départements se structurent",
      joinText: "Les responsables des cinq autres départements seront nommés par le conseil d'administration au fil du développement de l'organisation.",
      joinLink: "Voir les départements"
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
      readMore: "Lire l’article",
      bodySoon: "Le compte rendu détaillé de cette actualité sera publié prochainement.",
      galleryTitle: "Galerie photos",
      galleryOpen: "Agrandir la photo",
      galleryClose: "Fermer",
      galleryPrevious: "Photo précédente",
      galleryNext: "Photo suivante",
      backToNews: "Toutes les actualités",
      relatedTitle: "Autres actualités",
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
      payButton: "Paiement sécurisé - bientôt disponible",
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
        email
          ? `L'envoi automatique des messages sera activé une fois notre service de messagerie connecté. En attendant, écrivez-nous directement à ${email}.`
          : "L'envoi automatique des messages sera activé une fois notre service de messagerie connecté.",
      fieldEmail: "Courriel",
      fieldPhone: "Téléphone",
      fieldAddress: "Adresse"
    },
    legal: {
      crumb: "Mentions légales",
      photoCreditsHeading: "Crédits photos",
      photoCreditsIntro: "En attendant les photos propres à l'organisme, le site utilise des photos d'illustration sous licence libre publiées sur Wikimedia Commons sous licence Creative Commons. Elles ne représentent pas des activités de l'organisme.",
      title: "Mentions légales",
      updated: "Dernière mise à jour : 8 novembre 2026",
      sections: [
        {
          heading: "Éditeur du site",
          body:
            "Ce site est édité par Identité et Développement Global, organisme à but non lucratif basé en Ontario, Canada, actuellement en démarche vers l'obtention du statut d'organisme de bienfaisance enregistré. Responsable de la publication : Olivier Musanganya Lubambo, fondateur."
        },
        {
          heading: "Hébergement",
          body: "Le site est hébergé par Hostinger (hostinger.com)."
        },
        {
          heading: "Conception et développement",
          body:
            "Conception, développement et sécurité du site assurés par le département Technologies, Médias et Communication d'Identité et Développement Global."
        },
        {
          heading: "Propriété intellectuelle",
          body:
            "L'ensemble des textes, images, logos et éléments graphiques de ce site sont la propriété d'Identité et Développement Global, sauf mention contraire, et ne peuvent être reproduits, distribués ou réutilisés sans autorisation écrite préalable."
        },
        {
          heading: "Limitation de responsabilité",
          body:
            "Les informations publiées sur ce site sont fournies à titre indicatif et mises à jour dans la mesure du possible. Identité et Développement Global ne peut être tenu responsable des erreurs, omissions, ou de l'indisponibilité temporaire du site, ni du contenu des sites externes vers lesquels il pourrait renvoyer."
        }
      ]
    },
    privacy: {
      crumb: "Politique de confidentialité",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 8 novembre 2026",
      sections: [
        {
          heading: "Données que nous collectons",
          body:
            "À ce jour, les formulaires de ce site (contact, don, infolettre) sont en cours de connexion à un service d'envoi sécurisé et ne transmettent ni ne stockent automatiquement de données. Si vous nous écrivez directement par courriel, nous recevons uniquement les informations que vous choisissez de nous transmettre (nom, adresse courriel, contenu du message). Cette politique sera mise à jour dès que les formulaires seront pleinement connectés, pour préciser quelles données sont alors transmises, à qui, et pour combien de temps elles sont conservées."
        },
        {
          heading: "Témoins de navigation (cookies) et suivi",
          body:
            "Ce site n'utilise aucun cookie de suivi ni outil d'analyse ou de publicité tiers. La seule information conservée localement est votre préférence de langue d'affichage (français ou anglais), enregistrée dans le stockage local de votre navigateur (localStorage) - elle reste sur votre appareil et n'est jamais transmise à nos serveurs."
        },
        {
          heading: "Images et contenus des actualités",
          body:
            "Les actualités et leurs photos sont gérées avec le service Sanity et les images sont affichées depuis son réseau de diffusion (cdn.sanity.io). Comme pour tout chargement d'image sur le Web, votre navigateur transmet alors à ce service des informations techniques (adresse IP, type de navigateur) nécessaires à l'affichage. Aucun cookie n'est déposé à cette occasion."
        },
        {
          heading: "Photos des membres de l'équipe",
          body:
            "Les photos et les noms des membres présentés sur la page Notre équipe sont publiés avec leur accord. Toute personne concernée peut demander en tout temps la modification ou le retrait de sa photo ou de ses informations en nous écrivant."
        },
        {
          heading: "Liens vers les réseaux sociaux",
          body:
            "Le site contient de simples liens vers nos pages sur X, TikTok et Instagram. Il n'intègre aucun bouton, flux ou module de ces plateformes : aucune donnée ne leur est transmise tant que vous ne cliquez pas sur ces liens. Une fois sur ces plateformes, leurs propres politiques de confidentialité s'appliquent."
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
    },
    accessibility: {
      crumb: "Accessibilité",
      title: "Déclaration d'accessibilité",
      updated: "Dernière mise à jour : 8 novembre 2026",
      sections: [
        {
          heading: "Notre engagement",
          body:
            "Identité et Développement Global souhaite que son site soit utilisable par tous, y compris par les personnes en situation de handicap. Nous visons la conformité aux Règles pour l'accessibilité des contenus Web (WCAG) 2.1, niveau AA, norme de référence de la Loi sur l'accessibilité pour les personnes handicapées de l'Ontario (LAPHO)."
        },
        {
          heading: "Mesures en place",
          body:
            "Contrastes de couleurs vérifiés pour la lecture du texte, lien d'accès direct au contenu principal, navigation possible entièrement au clavier avec repère de focus visible, structure de titres cohérente, champs de formulaire associés à leur libellé, respect du réglage « réduire les animations » de votre appareil, et site disponible en français et en anglais."
        },
        {
          heading: "Limites connues",
          body:
            "Le site n'a pas encore fait l'objet d'un audit d'accessibilité indépendant. Certaines images publiées dans les actualités peuvent ne pas encore disposer d'une description textuelle détaillée. Nous corrigeons ces points au fur et à mesure."
        },
        {
          heading: "Nous signaler un problème",
          body:
            "Si vous rencontrez une difficulté pour accéder à un contenu ou à une fonctionnalité du site, écrivez-nous à l'adresse indiquée sur notre page Contact. Nous vous répondrons et, si nécessaire, vous fournirons l'information dans un autre format."
        }
      ]
    }
  },

  en: {
    common: {
      home: "Home",
      breadcrumb: "Breadcrumb"
    },
    notFound: {
      eyebrow: "404 Error",
      title: "Page not found",
      text: "The page you're looking for doesn't exist or has been moved.",
      cta: "Back to home"
    },
    nav: {
      orgName: "Identité et Développement Global",
      home: "Home",
      about: "About Us",
      team: "Our Team",
      departments: "Departments",
      projects: "Our Projects",
      news: "News",
      contact: "Contact",
      donate: "Donate"
    },
    footer: {
      rights: (year) => `© ${year} Identité et Développement Global. Ontario, Canada.`,
      navHeading: "Navigation",
      legalHeading: "Legal",
      contactHeading: "Contact",
      followHeading: "Follow us",
      newTab: "opens in a new tab",
      nonprofitBadge: "Non-profit organization - Ontario, Canada"
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
        email: null,
        phone: null,
        address: "Ontario, Canada"
      }
    },
    home: {
      badge: "Non-profit organization",
      titleLine1: "Discovering your identity,",
      titleLine2: "building your future",
      ctaDonate: "Donate",
      ctaMission: "Discover our mission",
      mapAlt: "World map of the countries where we work:",
      mapListTitle: "Where we work",
      visionEyebrow: "Our vision",
      visionTitle: "Forming people transformed in their identity",
      visionText: "Engaged in the development of their community, they become agents of lasting change, at home and around them.",
      missionEyebrow: "Our mission",
      missionTitle: "Supporting growth, every step of the way",
      valuesEyebrow: "Charter of values",
      valuesTitle: "What guides every one of our actions",
      deptEyebrow: "Our departments",
      deptTitle: "One active department, five in preparation",
      deptLink: "See the full structure",
      newsEyebrow: "News",
      newsTitle: "News & events",
      viewAll: "All news",
      photoSoon: "Photo coming soon",
      newsletterTitle: "Stay informed about our activities",
      newsletterText: "Receive our news, conferences, and projects directly by email.",
      emailPlaceholder: "Your email address",
      emailSrLabel: "Email address",
      subscribe: "Subscribe"
    },
    homeSections: {
      heroEyebrow: "Non-profit organization · Ontario, Canada",
      heroPhotoTitle: "Ottawa, Ontario",
      heroPhotoText: "Our head office",
      visionMissionChip: "Vision & mission",
      missionPrefix: "Our mission:",
      approachEyebrow: "Our approach",
      approachTitle: "Supporting the whole person",
      approachAccent: "in every dimension",
      approachCardTitle: "Global",
      approachCardText:
        "We support each person across the four dimensions of their growth, and we support education, humanitarian work, and community development.",
      approachCount: "4",
      approachCountLabel: "dimensions of growth",
      pillars: [
        { title: "Spiritual", text: "Spiritual and personal development" },
        { title: "Personal", text: "Training, conferences, and seminars" },
        { title: "Educational", text: "Scholarships and school support" },
        { title: "Financial", text: "Entrepreneurship and financial independence" }
      ],
      mapTitle: "Where we",
      mapAccent: "work",
      mapIntro: "From our head office in Ottawa, Ontario, we build ties with DR Congo, France, and Togo.",
      mapCountryNote: "Country of action",
      mapCreditsNote: "Photo credits in the legal notice",
      deptEyebrow: "Our departments",
      valuesLabel: "Our values",
      trustTitle: "Management that is",
      trustAccent: "transparent and accountable",
      foundedTitle: "Founded in Ontario",
      foundedText: "By Olivier Musanganya Lubambo and Germaine Linda Mutikanga Basimine, guardians of the vision.",
      teamLink: "Our team",
      signaturesCount: "2",
      signaturesText: "signatures required for any significant cheque, transfer, or financial contract",
      valuesCount: "8",
      valuesText: "core values guiding every one of our actions",
      donateTitle: "Support",
      donateAccent: "the mission",
      donateOneTime: "One-time gift",
      donateNote: "Online payment coming soon. In the meantime, contact us."
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
      foundersTitle: "Our founders",
      teamLink: "Meet the whole team"
    },
    team: {
      crumb: "Our Team",
      title: "Our team",
      subtitle: "The people who carry the vision and keep the organization running day to day.",
      groups: [
        {
          id: "fondateurs",
          eyebrow: "Guardians of the vision",
          title: "Founders",
          members: [
            {
              initials: "OM",
              name: "Olivier Musanganya Lubambo",
              role: "Founder · President",
              description: "Guardian of the vision since the organization's founding.",
              photo: "/images/membres/olivier2.jpeg",
              photoPosition: "center 30%",
              photoZoom: 1.2
            },
            {
              initials: "GL",
              name: "Germaine Linda Mutikanga Basimine",
              role: "Co-founder · Secretary",
              description: "Alongside the founder from the very first days, she embodies the community commitment at the heart of the mission.",
              photo: "/images/membres/germaine.jpeg",
              photoPosition: "center 30%",
              photoZoom: 1.2
            }
          ]
        },
        {
          id: "conseil",
          eyebrow: "Governance",
          title: "Board of Directors",
          intro: "Alongside the founders, who sit on the board as president and secretary.",
          members: [{ initials: "MD", name: "Moise Duciel Mpozayo", role: "Board member", photo: null }]
        },
        {
          id: "technologies-medias-communication",
          eyebrow: "Active department",
          title: "Technologies, Media and Communication",
          motto: "Communicate with excellence, innovate with impact.",
          members: [
            {
              initials: "BF",
              name: "Bwira Mishiki Freddy",
              role: "Department Director · Head of Graphic Design and Visual Identity",
              photo: null
            },
            {
              initials: "GM",
              name: "Gedeon Mutikanga Ruvuguta",
              role: "Head of IT and Web Development",
              photo: "/images/membres/gedeon.png",
              photoPosition: "center 0%"
            }
          ]
        }
      ],
      joinTitle: "The other departments are taking shape",
      joinText: "Leads for the five other departments will be appointed by the Board of Directors as the organization grows.",
      joinLink: "See the departments"
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
      readMore: "Read the article",
      bodySoon: "A detailed report on this news item will be published soon.",
      galleryTitle: "Photo gallery",
      galleryOpen: "Enlarge photo",
      galleryClose: "Close",
      galleryPrevious: "Previous photo",
      galleryNext: "Next photo",
      backToNews: "All news",
      relatedTitle: "More news",
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
      payButton: "Secure payment - coming soon",
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
        email
          ? `Automatic message delivery will be enabled once our messaging service is connected. In the meantime, email us directly at ${email}.`
          : "Automatic message delivery will be enabled once our messaging service is connected.",
      fieldEmail: "Email",
      fieldPhone: "Phone",
      fieldAddress: "Address"
    },
    legal: {
      crumb: "Legal Notice",
      photoCreditsHeading: "Photo credits",
      photoCreditsIntro: "Until the organization's own photos are available, the site uses freely licensed illustration photos published on Wikimedia Commons under Creative Commons licenses. They do not depict the organization's activities.",
      title: "Legal Notice",
      updated: "Last updated: November 8, 2026",
      sections: [
        {
          heading: "Site publisher",
          body:
            "This site is published by Identité et Développement Global, a non-profit organization based in Ontario, Canada, currently in the process of obtaining registered charity status. Publication is overseen by Olivier Musanganya Lubambo, founder."
        },
        {
          heading: "Hosting",
          body: "This site is hosted by Hostinger (hostinger.com)."
        },
        {
          heading: "Design and development",
          body: "Site design, development, and security are handled by the Technologies, Media and Communication department of Identité et Développement Global."
        },
        {
          heading: "Intellectual property",
          body:
            "All text, images, logos, and graphic elements on this site are the property of Identité et Développement Global, unless otherwise stated, and may not be reproduced, distributed, or reused without prior written permission."
        },
        {
          heading: "Limitation of liability",
          body:
            "Information published on this site is provided for informational purposes and updated whenever possible. Identité et Développement Global cannot be held liable for errors, omissions, temporary unavailability of the site, or the content of external sites it may link to."
        }
      ]
    },
    privacy: {
      crumb: "Privacy Policy",
      title: "Privacy Policy",
      updated: "Last updated: November 8, 2026",
      sections: [
        {
          heading: "Data we collect",
          body:
            "As of now, the forms on this site (contact, donation, newsletter) are still being connected to a secure delivery service and do not automatically transmit or store any data. If you email us directly, we only receive the information you choose to send us (name, email address, message content). This policy will be updated once the forms are fully connected, to specify what data is transmitted, to whom, and for how long it is kept."
        },
        {
          heading: "Cookies and tracking",
          body:
            "This site does not use any tracking cookies, analytics, or third-party advertising tools. The only information stored locally is your display language preference (French or English), saved in your browser's local storage - it stays on your device and is never sent to our servers."
        },
        {
          heading: "News images and content",
          body:
            "News items and their photos are managed with the Sanity service, and images are displayed from its delivery network (cdn.sanity.io). As with any image loaded on the Web, your browser sends this service the technical information needed to display it (IP address, browser type). No cookie is set in the process."
        },
        {
          heading: "Team member photos",
          body:
            "The photos and names of the members shown on the Our Team page are published with their consent. Anyone concerned may at any time ask for their photo or information to be changed or removed by writing to us."
        },
        {
          heading: "Links to social networks",
          body:
            "The site contains plain links to our pages on X, TikTok, and Instagram. It does not embed any button, feed, or widget from these platforms: no data is sent to them unless you click these links. Once on these platforms, their own privacy policies apply."
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
    },
    accessibility: {
      crumb: "Accessibility",
      title: "Accessibility statement",
      updated: "Last updated: November 8, 2026",
      sections: [
        {
          heading: "Our commitment",
          body:
            "Identité et Développement Global wants its website to be usable by everyone, including people with disabilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, the standard referenced by the Accessibility for Ontarians with Disabilities Act (AODA)."
        },
        {
          heading: "Measures in place",
          body:
            "Text color contrast checked for readability, a skip link to the main content, full keyboard navigation with a visible focus indicator, a consistent heading structure, form fields linked to their labels, support for your device's \"reduce motion\" setting, and the site available in both French and English."
        },
        {
          heading: "Known limitations",
          body:
            "The site has not yet undergone an independent accessibility audit. Some images published in news items may not yet have a detailed text description. We address these points as we go."
        },
        {
          heading: "Report a problem",
          body:
            "If you have difficulty accessing any content or feature of the site, write to us at the address listed on our Contact page. We will reply and, if needed, provide the information in another format."
        }
      ]
    }
  }
};
