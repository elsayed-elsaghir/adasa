import type { Post } from "../post.js";

export const postsList: Post[] = [
  {
    id: 1,
    slug: "mastering-golden-hour-photography",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    excerpt:
      "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    content:
      "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.",
    category: "إضاءة",
    author: {
      name: "سالم أحمد",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "مصور محترف",
    },
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
    date: "2026-01-15",
    readTime: "8 دقائق للقراءة",
    featured: true,
    tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
  },

  {
    id: 2,
    slug: "portrait-photography-secrets",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    excerpt:
      "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    content:
      "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.",
    category: "بورتريه",
    author: {
      name: "محمد علي",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "مصور بورتريه",
    },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "2026-01-12",
    readTime: "6 دقائق للقراءة",
    featured: true,
    tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
  },

  {
    id: 3,
    slug: "landscape-photography-guide",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    excerpt:
      "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    content:
      "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.",
    category: "مناظر طبيعية",
    author: {
      name: "إبراهيم حسن",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "مصور طبيعة",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "2026-01-10",
    readTime: "10 دقائق للقراءة",
    featured: true,
    tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
  },

  {
    id: 4,
    slug: "camera-settings-basics",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    excerpt:
      "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    content:
      "مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.",
    category: "تقنيات",
    author: {
      name: "داود خالد",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      role: "مدرب تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
    date: "2026-01-08",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["إعدادات الكاميرا", "مبتدئين", "تقنيات"],
  },

  {
    id: 5,
    slug: "photo-composition-rules",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    excerpt:
      "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    content:
      "التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.",
    category: "تقنيات",
    author: {
      name: "ليث محمود",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    date: "2026-01-05",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["تكوين", "قواعد التصوير", "فن"],
  },

  {
    id: 6,
    slug: "mobile-photography-tips",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    excerpt:
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    content:
      "أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.",
    category: "معدات",
    author: {
      name: "جمال عبدالله",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      role: "مصور ومراجع تقني",
    },
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2026-01-03",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير الهاتف", "نصائح", "مبتدئين"],
  },

  {
    id: 7,
    slug: "night-photography-techniques",
    title: "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",
    excerpt:
      "تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",
    content:
      "تصوير الليل عالم ساحر مليء بالتحديات والمكافآت. عندما تنام المدينة، تستيقظ السماء بملايين النجوم في انتظار عدستك.",
    category: "إضاءة",
    author: {
      name: "خالد الفيصل",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      role: "مصور فلكي",
    },
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
    date: "2026-01-01",
    readTime: "11 دقائق للقراءة",
    featured: false,
    tags: ["تصوير ليلي", "نجوم", "درب التبانة"],
  },

  {
    id: 8,
    slug: "street-photography-guide",
    title: "تصوير الشارع: فن التقاط الحياة اليومية",
    excerpt:
      "اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",
    content:
      "تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.",
    category: "بورتريه",
    author: {
      name: "نادر سعيد",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
      role: "مصور شوارع",
    },
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",
    date: "2025-12-28",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["تصوير شوارع", "توثيق", "حياة يومية"],
  },

  {
    id: 9,
    slug: "food-photography-basics",
    title: "تصوير الطعام: كيف تجعل أطباقك تبدو شهية",
    excerpt:
      "تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",
    content:
      "تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.",
    category: "تقنيات",
    author: {
      name: "هاني الشمري",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
      role: "مصور طعام",
    },
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",
    date: "2025-12-25",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير طعام", "تنسيق", "إضاءة"],
  },

  {
    id: 10,
    slug: "wildlife-photography-tips",
    title: "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",
    excerpt:
      "دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",
    content:
      "تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.",
    category: "مناظر طبيعية",
    author: {
      name: "عمر الراشد",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
      role: "مصور حياة برية",
    },
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",
    date: "2025-12-22",
    readTime: "10 دقائق للقراءة",
    featured: false,
    tags: ["حياة برية", "طبيعة", "حيوانات"],
  },

  {
    id: 11,
    slug: "black-white-photography",
    title: "التصوير بالأبيض والأسود: فن الضوء والظل",
    excerpt: "اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",
    content:
      "التصوير بالأبيض والأسود يجرد الصورة من الألوان ليكشف عن جوهرها: الضوء والظل والشكل والعاطفة.",
    category: "تقنيات",
    author: {
      name: "فارس العلي",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
      role: "فنان فوتوغرافي",
    },
    image:
      "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",
    date: "2025-12-20",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["أبيض وأسود", "تباين", "فن"],
  },

  {
    id: 12,
    slug: "photo-editing-lightroom",
    title: "أساسيات تعديل الصور في Lightroom",
    excerpt:
      "تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",
    content:
      "Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.",
    category: "معدات",
    author: {
      name: "سامي الحربي",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
      role: "خبير تعديل صور",
    },
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",
    date: "2025-12-18",
    readTime: "12 دقائق للقراءة",
    featured: false,
    tags: ["Lightroom", "تعديل صور", "برامج"],
  },

  {
    id: 13,
    slug: "macro-photography-world",
    title: "عالم التصوير الماكرو: اكتشف التفاصيل الخفية",
    excerpt:
      "انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",
    content:
      "التصوير الماكرو يكشف عالماً خفياً من الجمال. قطرات الندى، عيون الحشرات، بتلات الزهور - تفاصيل لا تراها العين المجردة.",
    category: "تقنيات",
    author: {
      name: "رامي الخطيب",
      avatar:
        "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
      role: "مصور ماكرو",
    },
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",
    date: "2025-12-15",
    readTime: "10 دقائق للقراءة",
    featured: false,
    tags: ["ماكرو", "تفاصيل", "حشرات"],
  },

  {
    id: 14,
    slug: "long-exposure-photography",
    title: "التعريض الطويل: كيف تصور الحركة والزمن",
    excerpt:
      "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",
    content:
      "التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.",
    category: "إضاءة",
    author: {
      name: "باسم المصري",
      avatar:
        "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
      role: "مصور فني",
    },
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
    date: "2025-12-12",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تعريض طويل", "ND فلتر", "إبداع"],
  },

  {
    id: 15,
    slug: "wedding-photography-guide",
    title: "تصوير حفلات الزفاف: دليل المصور المحترف",
    excerpt:
      "تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",
    content:
      "تصوير الزفاف مسؤولية كبيرة. يوم لا يتكرر، لحظات لا تعود، وذكريات ستبقى للأبد.",
    category: "بورتريه",
    author: {
      name: "منصور الزهراني",
      avatar:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
      role: "مصور زفاف",
    },
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",
    date: "2025-12-10",
    readTime: "11 دقائق للقراءة",
    featured: false,
    tags: ["زفاف", "مناسبات", "احترافي"],
  },

  {
    id: 16,
    slug: "drone-photography-basics",
    title: "التصوير بالدرون: منظور جديد للعالم",
    excerpt:
      "اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",
    content:
      "التصوير بالدرون يفتح آفاقاً جديدة. زوايا كانت مستحيلة أصبحت في متناول يدك.",
    category: "معدات",
    author: {
      name: "فيصل الدوسري",
      avatar:
        "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
      role: "مصور جوي",
    },
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
    date: "2025-12-08",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["درون", "تصوير جوي", "DJI"],
  },

  {
    id: 17,
    slug: "product-photography-essentials",
    title: "تصوير المنتجات: أساسيات التصوير التجاري",
    excerpt:
      "تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",
    content:
      "تصوير المنتجات فن يجمع بين الدقة التقنية والإبداع البصري. صورة المنتج الجيدة تبيع نفسها.",
    category: "تقنيات",
    author: {
      name: "لؤي الصالح",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
      role: "مصور تجاري",
    },
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",
    date: "2025-12-05",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير منتجات", "تجاري", "استوديو"],
  },

  {
    id: 18,
    slug: "architecture-photography",
    title: "تصوير العمارة: كيف تلتقط روح المباني",
    excerpt:
      "اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",
    content:
      "تصوير العمارة يحول المباني إلى أعمال فنية. الخطوط والأشكال والضوء والظل تتراقص معاً لتخلق صوراً آسرة.",
    category: "مناظر طبيعية",
    author: {
      name: "طارق النعيمي",
      avatar:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
      role: "مصور معماري",
    },
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",
    date: "2025-12-02",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["عمارة", "مباني", "هندسة"],
  },

  {
    id: 19,
    slug: "sports-action-photography",
    title: "تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",
    excerpt:
      "تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",
    content:
      "تصوير الرياضة يتطلب سرعة البديهة والمعدات المناسبة. لحظة الانتصار أو الهزيمة تحدث في جزء من الثانية.",
    category: "بورتريه",
    author: {
      name: "أحمد الشهري",
      avatar:
        "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
      role: "مصور رياضي",
    },
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-11-28",
    readTime: "10 دقائق للقراءة",
    featured: false,
    tags: ["رياضة", "حركة", "سرعة"],
  },

  {
    id: 20,
    slug: "flash-photography-basics",
    title: "أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",
    excerpt:
      "افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",
    content:
      "الفلاش أداة قوية تحررك من قيود الإضاءة المتاحة. مع الفهم الصحيح، يصبح أفضل صديق للمصور.",
    category: "إضاءة",
    author: {
      name: "ماجد القحطاني",
      avatar:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
      role: "مصور استوديو",
    },
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",
    date: "2025-11-25",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["فلاش", "إضاءة صناعية", "Speedlight"],
  },

  {
    id: 21,
    slug: "travel-photography-tips",
    title: "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",
    excerpt: "نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",
    content:
      "تصوير السفر يجمع كل أنواع التصوير: مناظر طبيعية، شوارع، بورتريهات، طعام، وعمارة.",
    category: "مناظر طبيعية",
    author: {
      name: "ياسر العتيبي",
      avatar:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
      role: "مصور رحالة",
    },
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
    date: "2025-11-22",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["سفر", "رحلات", "توثيق"],
  },

  {
    id: 22,
    slug: "color-theory-photography",
    title: "نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",
    excerpt:
      "افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",
    content:
      "الألوان لغة بصرية قوية. فهمها يرفع صورك من الجيدة إلى الاستثنائية.",
    category: "تقنيات",
    author: {
      name: "دحام الحسيني",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",
    date: "2025-11-18",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["ألوان", "نظرية", "تكوين"],
  },

  {
    id: 23,
    slug: "newborn-baby-photography",
    title: "تصوير المواليد: فن التقاط البراءة",
    excerpt: "تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",
    content:
      "تصوير المواليد تخصص رقيق يتطلب صبراً وحذراً ومهارة. كل طفل فريد وكل جلسة مغامرة جديدة.",
    category: "بورتريه",
    author: {
      name: "نايف المطيري",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      role: "مصور مواليد",
    },
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",
    date: "2025-11-15",
    readTime: "10 دقائق للقراءة",
    featured: false,
    tags: ["مواليد", "أطفال", "بورتريه"],
  },

  {
    id: 24,
    slug: "real-estate-photography",
    title: "تصوير العقارات: كيف تجعل المنزل يبيع نفسه",
    excerpt: "تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",
    content:
      "تصوير العقارات مجال مربح ومطلوب. صورة جيدة يمكن أن تكون الفرق بين بيع سريع وعقار راكد.",
    category: "تقنيات",
    author: {
      name: "عبدالله الغامدي",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
      role: "مصور عقارات",
    },
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    date: "2025-11-12",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["عقارات", "تجاري", "واسع الزاوية"],
  },

  {
    id: 25,
    slug: "raw-vs-jpeg-explained",
    title: "RAW مقابل JPEG: متى تستخدم كلاً منهما",
    excerpt:
      "افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",
    content:
      "الجدل بين RAW و JPEG قديم قدم التصوير الرقمي. لكل منهما مكانه ووقته.",
    category: "معدات",
    author: {
      name: "كريم الفهد",
      avatar:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
      role: "خبير تقني",
    },
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    date: "2025-11-08",
    readTime: "6 دقائق للقراءة",
    featured: false,
    tags: ["RAW", "JPEG", "صيغ الصور"],
  },

  {
    id: 26,
    slug: "self-portrait-photography",
    title: "تصوير البورتريه الذاتي: كن موضوعك الخاص",
    excerpt: "تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",
    content:
      "البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.",
    category: "بورتريه",
    author: {
      name: "سلطان الراجحي",
      avatar:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
      role: "فنان تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",
    date: "2025-11-05",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["بورتريه ذاتي", "إبداع", "تعبير"],
  },

  {
    id: 27,
    slug: "lens-guide-beginners",
    title: "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",
    excerpt:
      "افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",
    content:
      "العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.",
    category: "معدات",
    author: {
      name: "فهد السبيعي",
      avatar:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
      role: "مراجع معدات",
    },
    image:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",
    date: "2025-11-02",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["عدسات", "معدات", "مبتدئين"],
  },

  {
    id: 28,
    slug: "minimalist-photography",
    title: "التصوير البسيط (Minimalist): قوة الفراغ",
    excerpt: "اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",
    content:
      "الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.",
    category: "تقنيات",
    author: {
      name: "راشد الجاسر",
      avatar:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",
    date: "2025-10-28",
    readTime: "6 دقائق للقراءة",
    featured: false,
    tags: ["بساطة", "Minimalist", "تكوين"],
  },
];
