export type Lang = "fr" | "en" | "ar";

export type Copy = {
  dir: "ltr" | "rtl";
  metaTitle: string;
  metaDescription: string;
  nav: {
    mission: string;
    nexus: string;
    platform: string;
    trust: string;
    download: string;
    contact: string;
  };
  hero: {
    headline: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  mission: {
    kicker: string;
    title: string;
    text: string;
    items: Array<{ title: string; text: string }>;
  };
  nexus: {
    kicker: string;
    title: string;
    text: string;
    cta: string;
    features: Array<{ title: string; text: string }>;
  };
  platform: {
    kicker: string;
    title: string;
    text: string;
    items: Array<{ title: string; text: string }>;
  };
  trust: {
    kicker: string;
    title: string;
    text: string;
    items: Array<{ title: string; text: string }>;
  };
  download: {
    kicker: string;
    title: string;
    text: string;
    apple: string;
    google: string;
  };
  proof: {
    kicker: string;
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  cta: {
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const copies: Record<Lang, Copy> = {
  fr: {
    dir: "ltr",
    metaTitle: "Finexus — la fintech derrière Nexus Bank",
    metaDescription:
      "Nexus Bank par Finexus : banque mobile, frais réduits, bourse, KYC / AML / RGPD.",
    nav: {
      mission: "Pourquoi",
      nexus: "Nexus Bank",
      platform: "Fonctions",
      trust: "Conformité",
      download: "Télécharger",
      contact: "Nous écrire",
    },
    hero: {
      headline: "Réinventons la banque.",
      lead:
        "Comptes, virements, cartes, offres et bourse — avec KYC, AML et RGPD intégrés. Des frais plus bas, une expérience utilisateur optimisée.",
      ctaPrimary: "Télécharger l’app",
      ctaSecondary: "Voir les fonctions",
    },
    mission: {
      kicker: "Notre mission",
      title: "Une banque qui coûte moins et fait plus.",
      text:
        "Finexus construit Nexus Bank pour sortir du modèle bancaire lourd : moins de frais, des actions simples, et l’accès à la bourse depuis le même téléphone.",
      items: [
        {
          title: "Des frais plus bas",
          text: "Moins de coûts sur les usages du quotidien — pour garder davantage de votre argent.",
        },
        {
          title: "Tout sous la main",
          text: "Compte, virements, cartes, recharges et offres dans une seule app, sans parcours inutiles.",
        },
        {
          title: "Investir en bourse",
          text: "Ouvrez un portefeuille, achetez et vendez des titres, suivez vos positions depuis Nexus Bank.",
        },
      ],
    },
    nexus: {
      kicker: "L’application",
      title: "Banque du quotidien + investissement.",
      text:
        "Consultez, envoyez, payez, souscrivez — et investissez en bourse. Nexus Bank réunit les deux sans changer d’app.",
      cta: "Installer Nexus Bank",
      features: [
        {
          title: "Voir mon argent",
          text: "Solde, historique et cartes lisibles en un coup d’œil.",
        },
        {
          title: "Envoyer & recevoir",
          text: "Virements, bénéficiaires et change — avec des frais réduits.",
        },
        {
          title: "Payer avec ma carte",
          text: "Demande, activation, suivi des dépenses et contrôles utiles.",
        },
        {
          title: "Investir en bourse",
          text: "Portefeuille, achat et vente de titres, suivi des positions dans l’app.",
        },
        {
          title: "Services & offres",
          text: "Recharge mobile, abonnements et offres sélectionnées.",
        },
      ],
    },
    platform: {
      kicker: "Fonctions détaillées",
      title: "Ce que vous pouvez faire dans Nexus Bank.",
      text:
        "Du compte courant à la bourse : chaque zone de l’app a un rôle clair.",
      items: [
        {
          title: "Accueil & comptes",
          text: "Voyez votre solde, vos cartes et les dernières opérations. Filtrez l’historique pour retrouver un paiement.",
        },
        {
          title: "Virements",
          text: "Ajoutez un bénéficiaire, envoyez et suivez le transfert. Des frais plus bas que la banque classique.",
        },
        {
          title: "Mes cartes",
          text: "Demandez une carte, activez-la, consultez les dépenses carte par carte et ajustez les contrôles.",
        },
        {
          title: "Investir & bourse",
          text: "Alimentez un portefeuille depuis votre compte, achetez ou vendez des instruments listés, retirez du cash et consultez l’historique.",
        },
        {
          title: "Offres & abonnements",
          text: "Catalogue, recharge mobile, souscriptions — et suivi de vos abonnements actifs.",
        },
      ],
    },
    trust: {
      kicker: "Confiance & réglementation",
      title: "KYC, AML et RGPD — intégrés dès le premier usage.",
      text:
        "Nexus Bank n’est pas seulement une app utile : l’identité, la lutte contre le blanchiment et la protection des données font partie du produit.",
      items: [
        {
          title: "KYC",
          text: "Vérification d’identité à l’onboarding et avant les parcours sensibles (compte, carte, investissement).",
        },
        {
          title: "AML",
          text: "Contrôles anti-blanchiment sur les flux et les opérations à risque, pour un usage bancaire responsable.",
        },
        {
          title: "RGPD",
          text: "Données personnelles traitées avec minimisation, traçabilité et respect des droits utilisateurs.",
        },
        {
          title: "Sessions sécurisées",
          text: "Chiffrement, authentification forte et expérience pensée pour le niveau bancaire.",
        },
      ],
    },
    download: {
      kicker: "Installer",
      title: "Téléchargez Nexus Bank.",
      text: "Disponible sur iOS et Android. Installez l’app et commencez en quelques minutes.",
      apple: "App Store",
      google: "Google Play",
    },
    proof: {
      kicker: "Avec Nexus Bank",
      title: "Banque, cartes et bourse — sans la complexité.",
      items: [
        {
          title: "Frais réduits",
          text: "Des coûts plus bas sur les usages du quotidien, pour garder davantage de votre argent.",
        },
        {
          title: "Investir en bourse",
          text: "Ouvrez un portefeuille, achetez et vendez des titres, suivez vos positions dans l’app.",
        },
        {
          title: "Compte & cartes",
          text: "Solde, historique, virements et cartes au même endroit, lisibles en un coup d’œil.",
        },
        {
          title: "KYC · AML · RGPD",
          text: "Identité, contrôles anti-blanchiment et protection des données, dès le premier usage.",
        },
      ],
    },
    cta: {
      title: "Prêt à essayer Nexus Bank ?",
      text: "Installez l’app, explorez les fonctions, ou écrivez-nous pour une démonstration.",
      primary: "Écrire à Finexus",
      secondary: "Retour aux fonctions",
    },
    footer: {
      tagline: "crafting Nexus Bank",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    dir: "ltr",
    metaTitle: "Finexus — the fintech behind Nexus Bank",
    metaDescription:
      "Nexus Bank by Finexus: mobile banking, lower fees, markets, KYC / AML / GDPR.",
    nav: {
      mission: "Why us",
      nexus: "Nexus Bank",
      platform: "Features",
      trust: "Trust",
      download: "Download",
      contact: "Talk to us",
    },
    hero: {
      headline: "Reinvent banking.",
      lead:
        "Accounts, transfers, cards, offers and markets — with KYC, AML and GDPR built in. Lower fees, an optimized user experience.",
      ctaPrimary: "Download the app",
      ctaSecondary: "See features",
    },
    mission: {
      kicker: "Our mission",
      title: "A bank that costs less and does more.",
      text:
        "Finexus builds Nexus Bank to leave heavy banking behind: lower fees, simple actions, and stock-market access from the same phone.",
      items: [
        {
          title: "Lower fees",
          text: "Pay less on everyday banking — so more of your money stays yours.",
        },
        {
          title: "Everything at hand",
          text: "Account, transfers, cards, top-ups and offers in one app, without extra steps.",
        },
        {
          title: "Invest in markets",
          text: "Open a portfolio, buy and sell listed instruments, track positions in Nexus Bank.",
        },
      ],
    },
    nexus: {
      kicker: "The app",
      title: "Everyday banking + investing.",
      text:
        "Check, send, pay, subscribe — and invest in the markets. Nexus Bank brings both together in one app.",
      cta: "Get Nexus Bank",
      features: [
        {
          title: "See my money",
          text: "Balance, history and cards readable at a glance.",
        },
        {
          title: "Send & receive",
          text: "Transfers, beneficiaries and FX — with lower fees.",
        },
        {
          title: "Pay with my card",
          text: "Request, activate, track spend and useful controls.",
        },
        {
          title: "Invest in markets",
          text: "Portfolio, buy and sell instruments, track holdings in the app.",
        },
        {
          title: "Services & offers",
          text: "Mobile top-up, subscriptions and selected offers.",
        },
      ],
    },
    platform: {
      kicker: "Feature details",
      title: "What you can do in Nexus Bank.",
      text:
        "From your current account to the stock market: each part of the app has a clear job.",
      items: [
        {
          title: "Home & accounts",
          text: "See your balance, cards and latest activity. Filter history to find a payment.",
        },
        {
          title: "Transfers",
          text: "Add a beneficiary, send and track the transfer. Lower fees than classic banking.",
        },
        {
          title: "My cards",
          text: "Request a card, activate it, review spend card by card and adjust controls.",
        },
        {
          title: "Invest & markets",
          text: "Fund a portfolio from your account, buy or sell listed instruments, withdraw cash and review history.",
        },
        {
          title: "Offers & subscriptions",
          text: "Catalog, mobile top-up, subscriptions — and a single list of active ones.",
        },
      ],
    },
    trust: {
      kicker: "Trust & regulation",
      title: "KYC, AML and GDPR — built into the product.",
      text:
        "Nexus Bank is not only useful: identity checks, anti-money-laundering controls and data protection are part of the experience.",
      items: [
        {
          title: "KYC",
          text: "Identity verification at onboarding and before sensitive flows (account, card, investing).",
        },
        {
          title: "AML",
          text: "Anti-money-laundering checks on flows and higher-risk operations.",
        },
        {
          title: "GDPR",
          text: "Personal data handled with minimization, traceability and respect for user rights.",
        },
        {
          title: "Secure sessions",
          text: "Encryption, strong authentication and a bank-grade experience by design.",
        },
      ],
    },
    download: {
      kicker: "Install",
      title: "Download Nexus Bank.",
      text: "Available on iOS and Android. Install the app and get started in minutes.",
      apple: "App Store",
      google: "Google Play",
    },
    proof: {
      kicker: "With Nexus Bank",
      title: "Banking, cards and markets — without the complexity.",
      items: [
        {
          title: "Lower fees",
          text: "Pay less on everyday banking, so more of your money stays yours.",
        },
        {
          title: "Invest in markets",
          text: "Open a portfolio, buy and sell instruments, track your positions in the app.",
        },
        {
          title: "Accounts & cards",
          text: "Balance, history, transfers and cards in one place, clear at a glance.",
        },
        {
          title: "KYC · AML · GDPR",
          text: "Identity, AML controls and data protection from the first session.",
        },
      ],
    },
    cta: {
      title: "Ready to try Nexus Bank?",
      text: "Install the app, explore the features, or email us for a demo.",
      primary: "Email Finexus",
      secondary: "Back to features",
    },
    footer: {
      tagline: "crafting Nexus Bank",
      rights: "All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    metaTitle: "Finexus — التقنية المالية وراء Nexus Bank",
    metaDescription:
      "Nexus Bank من Finexus: بنك عبر الجوال برسوم أقل وبورصة وKYC / AML / GDPR.",
    nav: {
      mission: "لماذا نحن",
      nexus: "Nexus Bank",
      platform: "الوظائف",
      trust: "الامتثال",
      download: "تحميل",
      contact: "تواصل معنا",
    },
    hero: {
      headline: "نعيد ابتكار البنوك.",
      lead:
        "حسابات وتحويلات وبطاقات وعروض وبورصة — مع KYC وAML وGDPR مدمجة. رسوم أقل وتجربة مستخدم محسّنة.",
      ctaPrimary: "حمّل التطبيق",
      ctaSecondary: "اطّلع على الوظائف",
    },
    mission: {
      kicker: "مهمتنا",
      title: "بنك يكلّف أقل ويفعل أكثر.",
      text:
        "تبني Finexus تطبيق Nexus Bank للخروج من النموذج البنكي الثقيل: رسوم أقل، إجراءات بسيطة، ووصول إلى البورصة من الهاتف نفسه.",
      items: [
        {
          title: "رسوم أقل",
          text: "تكاليف أقل على الاستخدام اليومي — ليبقى المزيد من أموالك لك.",
        },
        {
          title: "كل شيء في متناولك",
          text: "حساب وتحويلات وبطاقات وتعبئة وعروض في تطبيق واحد، بلا خطوات زائدة.",
        },
        {
          title: "استثمر في البورصة",
          text: "افتح محفظة، اشترِ وبِع الأدوات المدرجة، وتابع مراكزك من Nexus Bank.",
        },
      ],
    },
    nexus: {
      kicker: "التطبيق",
      title: "خدمات يومية + استثمار.",
      text:
        "اطّلع وأرسل وادفع واشترك — واستثمر في البورصة. Nexus Bank يجمع الاثنين في تطبيق واحد.",
      cta: "ثبّت Nexus Bank",
      features: [
        {
          title: "رؤية أموالي",
          text: "الرصيد والسجل والبطاقات واضحة بنظرة واحدة.",
        },
        {
          title: "إرسال واستلام",
          text: "تحويلات ومستفيدون وصرف — برسوم أقل.",
        },
        {
          title: "الدفع ببطاقتي",
          text: "طلب وتفعيل ومتابعة الإنفاق وضوابط مفيدة.",
        },
        {
          title: "استثمار في البورصة",
          text: "محفظة وشراء وبيع الأدوات ومتابعة المراكز في التطبيق.",
        },
        {
          title: "خدمات وعروض",
          text: "تعبئة الجوال واشتراكات وعروض مختارة.",
        },
      ],
    },
    platform: {
      kicker: "تفاصيل الوظائف",
      title: "ما يمكنك فعله في Nexus Bank.",
      text: "من الحساب الجاري إلى البورصة: لكل جزء من التطبيق دور واضح.",
      items: [
        {
          title: "الرئيسية والحسابات",
          text: "اطّلع على رصيدك وبطاقاتك وآخر العمليات. صفِّ السجل لتجد دفعة.",
        },
        {
          title: "التحويلات",
          text: "أضف مستفيداً وأرسل وتابع التحويل. رسوم أقل من البنك التقليدي.",
        },
        {
          title: "بطاقاتي",
          text: "اطلب بطاقة، فعّلها، راجع الإنفاق لكل بطاقة وعدّل الضوابط.",
        },
        {
          title: "الاستثمار والبورصة",
          text: "موّل محفظة من حسابك، اشترِ أو بِع الأدوات المدرجة، اسحب النقد وراجع السجل.",
        },
        {
          title: "العروض والاشتراكات",
          text: "كتالوج وتعبئة واشتراكات — وقائمة واحدة للاشتراكات النشطة.",
        },
      ],
    },
    trust: {
      kicker: "الثقة والتنظيم",
      title: "KYC وAML وGDPR — مدمجة من أول استخدام.",
      text:
        "Nexus Bank ليس مفيداً فقط: التحقق من الهوية ومكافحة غسل الأموال وحماية البيانات جزء من المنتج.",
      items: [
        {
          title: "KYC",
          text: "التحقق من الهوية عند التسجيل وقبل المسارات الحساسة (حساب، بطاقة، استثمار).",
        },
        {
          title: "AML",
          text: "ضوابط مكافحة غسل الأموال على التدفقات والعمليات ذات المخاطر الأعلى.",
        },
        {
          title: "GDPR",
          text: "معالجة البيانات الشخصية بالحد الأدنى والتتبع واحترام حقوق المستخدم.",
        },
        {
          title: "جلسات آمنة",
          text: "تشفير ومصادقة قوية وتجربة بمستوى بنكي حسب التصميم.",
        },
      ],
    },
    download: {
      kicker: "تثبيت",
      title: "حمّل Nexus Bank.",
      text: "متاح على iOS وAndroid. ثبّت التطبيق وابدأ خلال دقائق.",
      apple: "App Store",
      google: "Google Play",
    },
    proof: {
      kicker: "مع Nexus Bank",
      title: "خدمات بنكية وبطاقات وبورصة — بلا تعقيد.",
      items: [
        {
          title: "رسوم أقل",
          text: "تكاليف أقل على الاستخدام اليومي، ليبقى المزيد من أموالك لك.",
        },
        {
          title: "استثمر في البورصة",
          text: "افتح محفظة، اشترِ وبِع الأدوات، وتابع مراكزك من التطبيق.",
        },
        {
          title: "حسابات وبطاقات",
          text: "الرصيد والسجل والتحويلات والبطاقات في مكان واحد، واضحة بنظرة.",
        },
        {
          title: "KYC · AML · GDPR",
          text: "هوية وضوابط مكافحة غسل الأموال وحماية البيانات من الجلسة الأولى.",
        },
      ],
    },
    cta: {
      title: "جاهز لتجربة Nexus Bank؟",
      text: "ثبّت التطبيق أو استكشف الوظائف أو راسلنا لعرض توضيحي.",
      primary: "راسل Finexus",
      secondary: "العودة إلى الوظائف",
    },
    footer: {
      tagline: "نصنع Nexus Bank",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export const LANGS: Array<{ id: Lang; label: string }> = [
  { id: "fr", label: "FR" },
  { id: "en", label: "EN" },
  { id: "ar", label: "ع" },
];

export const HERO_SHOTS = [
  { src: "/hero/welcome.png", alt: "Nexus Bank welcome" },
  { src: "/hero/currency.png", alt: "Multi-currency" },
  { src: "/hero/payments.png", alt: "Send and exchange" },
  { src: "/hero/trust.png", alt: "Secure by design" },
] as const;

/** Override via VITE_APP_STORE_URL / VITE_PLAY_STORE_URL when store listings are live. */
export const STORE_LINKS = {
  apple:
    (import.meta.env.VITE_APP_STORE_URL as string | undefined) ||
    "https://apps.apple.com/app/nexus-bank",
  google:
    (import.meta.env.VITE_PLAY_STORE_URL as string | undefined) ||
    "https://play.google.com/store/apps/details?id=io.finexus.nexusbank",
};
