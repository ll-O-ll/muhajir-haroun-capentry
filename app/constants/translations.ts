export type Language = 'en' | 'de' | 'ar';

export const translations = {
  en: {
    nav: {
      mission: 'Mission',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
    },
    hero: {
      title: 'DO IT CARPENTRY',
      subtitle: 'Action is higher than words.',
      cta: 'Explore Services',
    },
    services: {
      title: 'Services',
      do_it: {
        title: 'DO IT',
        desc: 'Online Shop - Minor projects and products available for purchase.',
      },
      cut_it: {
        title: 'CUT IT',
        desc: 'Custom cutting boards and kitchen essentials.',
      },
      hang_it: {
        title: 'HANG IT',
        desc: 'Wardrobes and storage solutions.',
      },
      collab: {
        title: 'Collaboration',
        desc: 'Artisanal and artistic creation for future projects.',
      },
    },
    process: {
      title: 'End to End Process',
      steps: ['On Site', 'Planning', 'AutoCAD Drawing', 'Production', 'Delivery', 'Mounting'],
    },
    footer: {
      rights: 'All rights reserved.',
    },
    projects: {
      title: 'Past Projects',
      tambourineman: { title: 'The Tambourineman', desc: 'A music cupboard using a broken guitar facade. Designed to store records and speakers, featuring classic brass hinges and a unique "sound hole" handle.' },
      worldmap: { title: 'The Worldmap', desc: 'A cupboard for discovery using vintage maps. Features a backlit "night light" interior and drawers lined with maps.' },
      kufic: { title: 'Marquetry Kufic', desc: 'Functional furniture series (tables, chairs) incorporating calligraphic Kufic designs, inspired by Geoffrey Knopke.' },
      chess: { title: 'Timur Chess', desc: 'Unique chess sets targeting the online market. Distinctive figures and board designs.' },
      honey: { title: 'Honey Frames', desc: 'Production of picture frames with curated art prints. Creating opportunities for traders.' },
    }
  },
  de: {
    nav: {
      mission: 'Mission',
      services: 'Dienstleistungen',
      products: 'Produkte',
      contact: 'Kontakt',
    },
    hero: {
      title: 'DO IT CARPENTRY',
      subtitle: 'Handeln ist höher als Worte.',
      cta: 'Dienstleistungen entdecken',
    },
    services: {
      title: 'Dienstleistungen',
      do_it: {
        title: 'DO IT',
        desc: 'Online Shop - Kleinere Projekte und Produkte zum Kauf.',
      },
      cut_it: {
        title: 'CUT IT',
        desc: 'Maßgefertigte Schneidebretter und Küchenutensilien.',
      },
      hang_it: {
        title: 'HANG IT',
        desc: 'Kleiderschränke und stauraumlösungen.',
      },
      collab: {
        title: 'Zusammenarbeit',
        desc: 'Handwerkliche und künstlerische Kreationen für zukünftige Projekte.',
      },
    },
    process: {
      title: 'End-to-End Prozess',
      steps: ['Vor Ort', 'Planung', 'AutoCAD Zeichnung', 'Produktion', 'Lieferung', 'Montage'],
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
    projects: {
      title: 'Vergangene Projekte',
      tambourineman: { title: 'The Tambourineman', desc: 'Ein Musikschrank mit einer Gitarrenfassade. Entwickelt für Schallplatten und Lautsprecher, mit klassischen Messingscharnieren.' },
      worldmap: { title: 'The Worldmap', desc: 'Ein Schrank der Entdeckungen mit alten Karten. Verfügt über ein beleuchtetes Inneres und mit Karten ausgekleidete Schubladen.' },
      kufic: { title: 'Marquetry Kufic', desc: 'Funktionale Möbelserie (Tische, Stühle) mit kalligraphischen Kufi-Designs, inspiriert von Geoffrey Knopke.' },
      chess: { title: 'Timur Chess', desc: 'Einzigartige Schachspiele für den Online-Markt. Besondere Figuren und Brettdesigns.' },
      honey: { title: 'Honey Frames', desc: 'Herstellung von Bilderrahmen mit kuratierten Kunstdrucken. Schaffung von Möglichkeiten für Händler.' },
    }
  },
  ar: {
    nav: {
      mission: 'المهمة',
      services: 'الخدمات',
      products: 'المنتجات',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'DO IT CARPENTRY',
      subtitle: 'العمل أبلغ من القول.',
      cta: 'اكتشف خدماتنا',
    },
    services: {
      title: 'الخدمات',
      do_it: {
        title: 'DO IT',
        desc: 'متجر إلكتروني - مشاريع ومنتجات صغيرة متاحة للشراء.',
      },
      cut_it: {
        title: 'CUT IT',
        desc: 'ألواح تقطيع ومستلزمات مطبخ مخصصة.',
      },
      hang_it: {
        title: 'HANG IT',
        desc: 'خزانات وحلول تخزين.',
      },
      collab: {
        title: 'تعاون',
        desc: 'إبداعات حرفية وفنية للمشاريع المستقبلية.',
      },
    },
    process: {
      title: 'عملية متكاملة',
      steps: ['في الموقع', 'تخطيط', 'رسم أوتوكاد', 'إنتاج', 'توصيل', 'تركيب'],
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
    projects: {
      title: 'مشاريع سابقة',
      tambourineman: { title: 'عازف الدف (Tambourineman)', desc: 'خزانة موسيقى باستخدام واجهة غيتار. مصممة لتخزين الأسطوانات ومكبرات الصوت.' },
      worldmap: { title: 'خريطة العالم', desc: 'خزانة للاكتشاف باستخدام خرائط قديمة. تتميز بإضاءة داخلية وأدراج مبطنة بالخرائط.' },
      kufic: { title: 'تطعيم كوفي', desc: 'سلسلة أثاث وظيفي (طاولات، وكراسي) تدمج تصاميم الخط الكوفي.' },
      chess: { title: 'شطرنج تيمور', desc: 'مجموعات شطرنج فريدة تستهدف السوق عبر الإنترنت. تصاميم مميزة للقطع والرقعة.' },
      honey: { title: 'براويز العسل', desc: 'إنتاج إطارات صور مع مطبوعات فنية مختارة. خلق فرص للتجار.' },
    }
  },
};
