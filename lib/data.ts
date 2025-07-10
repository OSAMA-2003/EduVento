// Centralized data for the website

export const siteData = {
  name: 'أكاديمية التعلم الرقمي',
  description: 'أكاديمية رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية',
  contact: {
    phone: '+966 50 123 4567',
    email: 'info@academy.com',
    address: 'الرياض، المملكة العربية السعودية',
  }
};

export const coursesData = [
  {
    id: 1,
    title: 'تطوير المواقع الإلكترونية',
    description: 'دورة شاملة في تطوير المواقع الإلكترونية من الصفر حتى الاحتراف. ستتعلم في هذه الدورة جميع التقنيات الحديثة المستخدمة في تطوير المواقع بما في ذلك HTML5, CSS3, JavaScript, React, Node.js وقواعد البيانات.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video URL
    instructor: {
      name: 'أحمد محمد',
      bio: 'مطور ويب محترف مع أكثر من 8 سنوات خبرة في تطوير المواقع والتطبيقات',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '8+ سنوات',
    },
    duration: '40 ساعة',
    students: 1250,
    rating: 4.8,
    price: 299,
    curriculum: [
      'مقدمة في تطوير المواقع',
      'HTML5 المتقدم',
      'CSS3 والتصميم المتجاوب',
      'JavaScript الأساسي',
      'JavaScript المتقدم',
      'React.js',
      'Node.js والخوادم',
      'قواعد البيانات',
      'مشروع متكامل',
    ],
    requirements: [
      'معرفة أساسية بالحاسوب',
      'لا توجد خبرة برمجية مطلوبة مسبقاً',
      'جهاز حاسوب مع اتصال بالإنترنت',
    ],
    outcomes: [
      'بناء مواقع ويب متكاملة',
      'استخدام التقنيات الحديثة في التطوير',
      'التعامل مع قواعد البيانات',
      'نشر المواقع على الإنترنت',
    ],
    level: 'مبتدئ إلى متقدم',
    language: 'العربية',
    certificate: true,
    category: 'تطوير الويب',
  },
  {
    id: 2,
    title: 'التصميم الجرافيكي',
    description: 'احترف التصميم الجرافيكي باستخدام Adobe Photoshop و Illustrator. تعلم أساسيات التصميم والألوان والخطوط وكيفية إنشاء تصاميم احترافية للطباعة والويب.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video URL
    instructor: {
      name: 'سارة أحمد',
      bio: 'مصممة جرافيك محترفة مع خبرة 6 سنوات في التصميم الرقمي والطباعة',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '6+ سنوات',
    },
    duration: '35 ساعة',
    students: 980,
    rating: 4.9,
    price: 249,
    curriculum: [
      'أساسيات التصميم الجرافيكي',
      'نظرية الألوان والخطوط',
      'Adobe Photoshop الأساسي',
      'Adobe Photoshop المتقدم',
      'Adobe Illustrator الأساسي',
      'Adobe Illustrator المتقدم',
      'تصميم الهوية البصرية',
      'التصميم للطباعة والويب',
      'مشاريع عملية',
    ],
    requirements: [
      'جهاز حاسوب بمواصفات متوسطة',
      'تثبيت برامج Adobe Creative Suite',
      'لا توجد خبرة مسبقة مطلوبة',
    ],
    outcomes: [
      'إتقان برامج Adobe Photoshop و Illustrator',
      'تصميم هويات بصرية احترافية',
      'إنشاء تصاميم للطباعة والويب',
      'فهم أساسيات التصميم والألوان',
    ],
    level: 'مبتدئ',
    language: 'العربية',
    certificate: true,
    category: 'التصميم',
  },
  {
    id: 3,
    title: 'التسويق الرقمي',
    description: 'تعلم استراتيجيات التسويق الرقمي الحديثة وإدارة الحملات الإعلانية على منصات التواصل الاجتماعي ومحركات البحث. اكتسب مهارات SEO و SEM والتسويق بالمحتوى.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video URL
    instructor: {
      name: 'محمد علي',
      bio: 'خبير تسويق رقمي مع 7 سنوات خبرة في إدارة الحملات الإعلانية الناجحة',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '7+ سنوات',
    },
    duration: '30 ساعة',
    students: 1500,
    rating: 4.7,
    price: 199,
    curriculum: [
      'مقدمة في التسويق الرقمي',
      'استراتيجيات التسويق',
      'تحسين محركات البحث (SEO)',
      'الإعلانات المدفوعة (SEM)',
      'التسويق عبر وسائل التواصل',
      'التسويق بالمحتوى',
      'التسويق بالبريد الإلكتروني',
      'تحليل البيانات والمقاييس',
      'حملات إعلانية عملية',
    ],
    requirements: [
      'معرفة أساسية بالإنترنت',
      'حساب على منصات التواصل الاجتماعي',
      'لا توجد خبرة تسويقية مطلوبة',
    ],
    outcomes: [
      'إنشاء استراتيجيات تسويق فعالة',
      'إدارة حملات إعلانية ناجحة',
      'تحسين ظهور المواقع في محركات البحث',
      'تحليل أداء الحملات التسويقية',
    ],
    level: 'مبتدئ إلى متوسط',
    language: 'العربية',
    certificate: true,
    category: 'التسويق',
  },
  {
    id: 4,
    title: 'تطوير تطبيقات الموبايل',
    description: 'احترف تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS باستخدام React Native و Flutter. تعلم كيفية بناء تطبيقات عملية ونشرها على متاجر التطبيقات.',
    image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video URL
    instructor: {
      name: 'خالد حسن',
      bio: 'مطور تطبيقات موبايل محترف مع 5 سنوات خبرة في تطوير التطبيقات',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '5+ سنوات',
    },
    duration: '50 ساعة',
    students: 750,
    rating: 4.8,
    price: 399,
    curriculum: [
      'مقدمة في تطوير التطبيقات',
      'أساسيات React Native',
      'التنقل بين الشاشات',
      'إدارة الحالة',
      'التعامل مع APIs',
      'قواعد البيانات المحلية',
      'الإشعارات والخدمات',
      'نشر التطبيقات',
      'مشروع تطبيق متكامل',
    ],
    requirements: [
      'معرفة أساسية بـ JavaScript',
      'جهاز حاسوب بمواصفات جيدة',
      'هاتف ذكي للاختبار',
    ],
    outcomes: [
      'تطوير تطبيقات موبايل احترافية',
      'نشر التطبيقات على المتاجر',
      'التعامل مع APIs والخدمات',
      'تصميم واجهات مستخدم جذابة',
    ],
    level: 'متوسط',
    language: 'العربية',
    certificate: true,
    category: 'تطوير التطبيقات',
  },
  {
    id: 5,
    title: 'إدارة المشاريع',
    description: 'تعلم أساسيات إدارة المشاريع والحصول على شهادة PMP. اكتسب مهارات التخطيط والتنفيذ والمراقبة والتحكم في المشاريع باستخدام أفضل الممارسات العالمية.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video URL
    instructor: {
      name: 'فاطمة سعد',
      bio: 'مديرة مشاريع معتمدة PMP مع 10 سنوات خبرة في إدارة المشاريع الكبيرة',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '10+ سنوات',
    },
    duration: '25 ساعة',
    students: 650,
    rating: 4.6,
    price: 179,
    curriculum: [
      'مقدمة في إدارة المشاريع',
      'دورة حياة المشروع',
      'التخطيط والجدولة',
      'إدارة المخاطر',
      'إدارة الفريق',
      'إدارة التكلفة والجودة',
      'التواصل وإدارة أصحاب المصلحة',
      'أدوات إدارة المشاريع',
      'التحضير لامتحان PMP',
    ],
    requirements: [
      'خبرة عملية في العمل بالمشاريع',
      'شهادة جامعية أو دبلوم',
      'رغبة في الحصول على شهادة PMP',
    ],
    outcomes: [
      'إتقان أساسيات إدارة المشاريع',
      'التحضير لامتحان PMP',
      'استخدام أدوات إدارة المشاريع',
      'قيادة فرق العمل بفعالية',
    ],
    level: 'متوسط إلى متقدم',
    language: 'العربية',
    certificate: true,
    category: 'إدارة الأعمال',
  },
  {
    id: 6,
    title: 'الأمن السيبراني',
    description: 'تعلم أساسيات الأمن السيبراني وحماية الأنظمة والشبكات من التهديدات الإلكترونية. اكتسب مهارات اختبار الاختراق وتحليل الثغرات الأمنية.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video URL
    instructor: {
      name: 'عبدالله الشمري',
      bio: 'خبير أمن سيبراني معتمد مع 9 سنوات خبرة في حماية الأنظمة',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '9+ سنوات',
    },
    duration: '45 ساعة',
    students: 420,
    rating: 4.9,
    price: 449,
    curriculum: [
      'مقدمة في الأمن السيبراني',
      'أنواع التهديدات الإلكترونية',
      'حماية الشبكات',
      'اختبار الاختراق',
      'تحليل الثغرات الأمنية',
      'التشفير وحماية البيانات',
      'الاستجابة للحوادث الأمنية',
      'أدوات الأمن السيبراني',
      'مشاريع عملية',
    ],
    requirements: [
      'معرفة أساسية بالشبكات',
      'خبرة في استخدام أنظمة التشغيل',
      'رغبة في تعلم الأمن السيبراني',
    ],
    outcomes: [
      'حماية الأنظمة من التهديدات',
      'إجراء اختبارات الاختراق',
      'تحليل وإصلاح الثغرات الأمنية',
      'تطبيق معايير الأمن السيبراني',
    ],
    level: 'متوسط إلى متقدم',
    language: 'العربية',
    certificate: true,
    category: 'الأمن السيبراني',
  },
  {
    id: 7,
    title: 'علم البيانات والذكاء الاصطناعي',
    description: 'اكتشف عالم علم البيانات والذكاء الاصطناعي. تعلم Python، التحليل الإحصائي، التعلم الآلي، والشبكات العصبية لبناء نماذج ذكية.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video URL
    instructor: {
      name: 'د. نورا العتيبي',
      bio: 'دكتوراه في علم البيانات مع 7 سنوات خبرة في الذكاء الاصطناعي',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '7+ سنوات',
    },
    duration: '60 ساعة',
    students: 890,
    rating: 4.8,
    price: 599,
    curriculum: [
      'مقدمة في علم البيانات',
      'برمجة Python للبيانات',
      'التحليل الإحصائي',
      'تنظيف ومعالجة البيانات',
      'التصور والرسوم البيانية',
      'التعلم الآلي الأساسي',
      'التعلم الآلي المتقدم',
      'الشبكات العصبية',
      'مشاريع ذكاء اصطناعي',
    ],
    requirements: [
      'معرفة أساسية بالرياضيات',
      'خبرة برمجية بسيطة مفضلة',
      'جهاز حاسوب بمواصفات جيدة',
    ],
    outcomes: [
      'تحليل البيانات باستخدام Python',
      'بناء نماذج التعلم الآلي',
      'تطوير تطبيقات ذكاء اصطناعي',
      'تفسير وتصور البيانات',
    ],
    level: 'متوسط إلى متقدم',
    language: 'العربية',
    certificate: true,
    category: 'علم البيانات',
  },
  {
    id: 8,
    title: 'التجارة الإلكترونية',
    description: 'تعلم كيفية إنشاء وإدارة متجر إلكتروني ناجح. من اختيار المنتجات إلى التسويق والمبيعات، احصل على جميع المهارات المطلوبة للنجاح في التجارة الإلكترونية.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    video: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video URL
    instructor: {
      name: 'ياسر القحطاني',
      bio: 'رائد أعمال ومؤسس عدة متاجر إلكترونية ناجحة مع 6 سنوات خبرة',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face', // Placeholder instructor image
      experience: '6+ سنوات',
    },
    duration: '35 ساعة',
    students: 1100,
    rating: 4.7,
    price: 279,
    curriculum: [
      'مقدمة في التجارة الإلكترونية',
      'اختيار المنتجات والموردين',
      'إنشاء المتجر الإلكتروني',
      'تصميم تجربة المستخدم',
      'استراتيجيات التسعير',
      'التسويق للمتاجر الإلكترونية',
      'إدارة المخزون والشحن',
      'خدمة العملاء',
      'تحليل الأداء والنمو',
    ],
    requirements: [
      'معرفة أساسية بالإنترنت',
      'رأس مال بسيط للبدء',
      'رغبة في ريادة الأعمال',
    ],
    outcomes: [
      'إنشاء متجر إلكتروني احترافي',
      'تطوير استراتيجيات المبيعات',
      'إدارة العمليات التجارية',
      'تحقيق الربحية والنمو',
    ],
    level: 'مبتدئ إلى متوسط',
    language: 'العربية',
    certificate: true,
    category: 'ريادة الأعمال',
  }
];

export const blogsData = [
  {
    id: 1,
    title: 'أهمية التعلم المستمر في عصر التكنولوجيا',
    excerpt: 'في عالم يتطور باستمرار، يصبح التعلم المستمر ضرورة حتمية للبقاء في المقدمة. اكتشف كيف يمكن للتعلم المستمر أن يغير مسيرتك المهنية.',
    // Changed content to Markdown for better practice, you'll need a Markdown renderer in your app
    content: `
# أهمية التعلم المستمر في عصر التكنولوجيا

في عصر التكنولوجيا الحديث، أصبح التعلم المستمر ليس مجرد خيار، بل ضرورة حتمية لكل من يريد البقاء في المقدمة والنجاح في مسيرته المهنية. التطور السريع في التقنيات والأدوات يتطلب منا مواكبة هذا التطور باستمرار.

## لماذا التعلم المستمر مهم؟
التكنولوجيا تتطور بوتيرة سريعة جداً، وما كان حديثاً بالأمس قد يصبح قديماً اليوم. لذلك، الأشخاص الذين يستثمرون في تطوير مهاراتهم باستمرار هم الذين يحققون النجاح والتميز في مجالاتهم.

## كيف تبدأ رحلة التعلم المستمر؟
* حدد أهدافك التعليمية بوضوح
* اختر المصادر التعليمية المناسبة
* خصص وقتاً يومياً للتعلم
* طبق ما تتعلمه في مشاريع عملية
* انضم إلى مجتمعات التعلم

## فوائد التعلم المستمر
التعلم المستمر يفتح أمامك فرصاً جديدة، يزيد من قيمتك في سوق العمل، ويساعدك على التكيف مع التغييرات السريعة في عالم التكنولوجيا.

في النهاية، الاستثمار في التعلم هو أفضل استثمار يمكن أن تقوم به لمستقبلك المهني.
    `,
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'أحمد محمد',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'خبير في التكنولوجيا والتعليم الرقمي'
    },
    date: '15 يناير 2024',
    readTime: '5 دقائق',
    category: 'التعليم',
    tags: ['التعلم المستمر', 'التكنولوجيا', 'التطوير المهني']
  },
  {
    id: 2,
    title: 'مستقبل البرمجة والذكاء الاصطناعي',
    excerpt: 'كيف سيؤثر الذكاء الاصطناعي على مجال البرمجة وما هي المهارات المطلوبة للمستقبل؟ تعرف على التوجهات الحديثة في عالم التطوير.',
    content: `
# مستقبل البرمجة والذكاء الاصطناعي

يشهد عالم البرمجة تطوراً هائلاً مع ظهور تقنيات الذكاء الاصطناعي الحديثة. هذا التطور يطرح تساؤلات مهمة حول مستقبل المطورين والمهارات المطلوبة للنجاح في هذا المجال.

## تأثير الذكاء الاصطناعي على البرمجة
الذكاء الاصطناعي لا يهدد وظائف المطورين، بل يغير طبيعة عملهم. أدوات مثل GitHub Copilot و ChatGPT تساعد المطورين على كتابة الكود بشكل أسرع وأكثر كفاءة.

## المهارات المطلوبة للمستقبل
* فهم أساسيات الذكاء الاصطناعي والتعلم الآلي
* القدرة على التعامل مع أدوات الذكاء الاصطناعي
* مهارات حل المشاكل المعقدة
* التفكير النقدي والإبداعي
* التعلم المستمر والتكيف

## نصائح للمطورين
ابدأ بتعلم أساسيات الذكاء الاصطناعي، جرب الأدوات الجديدة، وركز على تطوير مهارات حل المشاكل. المستقبل للمطورين الذين يتكيفون مع التطورات الجديدة.
    `,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'سارة أحمد',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'مطورة برمجيات ومتخصصة في الذكاء الاصطناعي'
    },
    date: '12 يناير 2024',
    readTime: '7 دقائق',
    category: 'البرمجة',
    tags: ['الذكاء الاصطناعي', 'البرمجة', 'المستقبل']
  },
  {
    id: 3,
    title: 'نصائح لتحسين مهارات التصميم الجرافيكي',
    excerpt: 'اكتشف أهم النصائح والتقنيات التي تساعدك على تطوير مهاراتك في التصميم الجرافيكي وإنشاء تصاميم احترافية تلفت الانتباه.',
    content: `
# نصائح لتحسين مهارات التصميم الجرافيكي

التصميم الجرافيكي فن وعلم في آن واحد. يتطلب الإبداع والمعرفة التقنية لإنشاء تصاميم تؤثر على الجمهور وتحقق الأهداف المطلوبة.

## أساسيات التصميم الجيد
التصميم الناجح يعتمد على مبادئ أساسية مثل التوازن، التباين، التكرار، والمحاذاة. فهم هذه المبادئ يساعدك على إنشاء تصاميم متماسكة وجذابة.

## نصائح عملية للمصممين
* ادرس أعمال المصممين المحترفين
* تدرب على استخدام الألوان بفعالية
* اختر الخطوط المناسبة لكل مشروع
* استخدم المساحات البيضاء بذكاء
* احرص على البساطة والوضوح

## أدوات التصميم الحديثة
تعلم استخدام أدوات التصميم الحديثة مثل Adobe Creative Suite، Figma، و Canva. كل أداة لها مميزاتها واستخداماتها المختلفة.

## بناء معرض أعمال قوي
معرض الأعمال هو بطاقة تعريفك كمصمم. اختر أفضل أعمالك، نوع في المشاريع، واحرص على عرضها بطريقة احترافية.
    `,
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'محمد علي',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'مصمم جرافيك محترف ومدرب تصميم'
    },
    date: '10 يناير 2024',
    readTime: '4 دقائق',
    category: 'التصميم',
    tags: ['التصميم الجرافيكي', 'الإبداع', 'النصائح']
  },
  {
    id: 4,
    title: 'استراتيجيات التسويق الرقمي الفعالة',
    excerpt: 'تعرف على أحدث استراتيجيات التسويق الرقمي التي تساعدك على الوصول إلى جمهورك المستهدف وتحقيق أهدافك التسويقية بكفاءة.',
    content: `
# استراتيجيات التسويق الرقمي الفعالة

التسويق الرقمي أصبح العمود الفقري لنجاح الأعمال في العصر الحديث. مع تزايد استخدام الإنترنت ووسائل التواصل الاجتماعي، تطورت استراتيجيات التسويق لتواكب هذا التطور.

## أهمية التسويق الرقمي
التسويق الرقمي يوفر إمكانية الوصول إلى جمهور أوسع بتكلفة أقل، مع إمكانية قياس النتائج بدقة وتحسين الحملات باستمرار.

## استراتيجيات التسويق الأساسية
* تحسين محركات البحث (SEO)
* التسويق بالمحتوى
* الإعلانات المدفوعة (PPC)
* التسويق عبر وسائل التواصل الاجتماعي
* التسويق بالبريد الإلكتروني

## قياس النجاح
استخدم أدوات التحليل مثل Google Analytics لقياس أداء حملاتك. راقب المقاييس المهمة مثل معدل التحويل، تكلفة الاكتساب، والعائد على الاستثمار.

<h2>نصائح للنجاح</h2>
<p>ابدأ بفهم جمهورك المستهدف، حدد أهدافك بوضوح، واختبر استراتيجيات مختلفة لتجد ما يناسب عملك.</p>
    `,
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'فاطمة سعد',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'خبيرة تسويق رقمي ومستشارة أعمال'
    },
    date: '8 يناير 2024',
    readTime: '6 دقائق',
    category: 'التسويق',
    tags: ['التسويق الرقمي', 'الاستراتيجيات', 'الأعمال']
  },
  {
    id: 5,
    title: 'مقدمة في الأمن السيبراني للمبتدئين',
    excerpt: 'دليل شامل للمبتدئين في مجال الأمن السيبراني. تعلم أساسيات حماية البيانات والأنظمة من التهديدات الإلكترونية.',
    content: `
# مقدمة في الأمن السيبراني للمبتدئين

الأمن السيبراني أصبح من أهم المجالات في عصرنا الحالي، خاصة مع تزايد الاعتماد على التكنولوجيا في جميع جوانب الحياة. فهم أساسيات الأمن السيبراني ضروري للجميع.

## ما هو الأمن السيبراني؟
الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والبرامج من الهجمات الرقمية. هذه الهجمات عادة ما تهدف إلى الوصول إلى المعلومات الحساسة أو تغييرها أو تدميرها.

## أنواع التهديدات الشائعة
* البرمجيات الخبيثة (Malware)
* هجمات التصيد الاحتيالي (Phishing)
* هجمات رفض الخدمة (DDoS)
* اختراق كلمات المرور
* الهندسة الاجتماعية

## نصائح الحماية الأساسية
استخدم كلمات مرور قوية ومختلفة لكل حساب، فعل المصادقة الثنائية، حدث برامجك باستمرار، وكن حذراً من الروابط والمرفقات المشبوهة.

## مستقبل الأمن السيبراني
مع تطور التهديدات، تتطور أيضاً تقنيات الحماية. الذكاء الاصطناعي والتعلم الآلي يلعبان دوراً متزايداً في اكتشاف ومنع الهجمات.
    `,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'عبدالله الشمري',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'خبير أمن سيبراني ومستشار تقني'
    },
    date: '5 يناير 2024',
    readTime: '8 دقائق',
    category: 'الأمن السيبراني',
    tags: ['الأمن السيبراني', 'الحماية', 'التهديدات']
  },
  {
    id: 6,
    title: 'كيفية بناء تطبيق موبايل ناجح',
    excerpt: 'خطوات عملية لتطوير تطبيق موبايل ناجح من الفكرة إلى النشر. تعلم أفضل الممارسات في تطوير التطبيقات.',
    content: `
# كيفية بناء تطبيق موبايل ناجح

تطوير تطبيقات الموبايل أصبح مجالاً مربحاً ومطلوباً بشدة. لكن النجاح في هذا المجال يتطلب تخطيطاً دقيقاً وفهماً عميقاً لاحتياجات المستخدمين.

## مراحل تطوير التطبيق
تطوير التطبيق يمر بعدة مراحل: التخطيط، التصميم، التطوير، الاختبار، والنشر. كل مرحلة لها أهميتها ومتطلباتها الخاصة.

## اختيار المنصة المناسبة
* تطبيقات iOS الأصلية (Swift)
* تطبيقات Android الأصلية (Kotlin/Java)
* التطوير المتقاطع (React Native, Flutter)
* تطبيقات الويب التقدمية (PWA)

## تصميم تجربة المستخدم
تجربة المستخدم هي مفتاح نجاح التطبيق. اجعل التطبيق بسيطاً وسهل الاستخدام، مع واجهة جذابة وسريعة الاستجابة.

## اختبار ونشر التطبيق
اختبر التطبيق بدقة قبل النشر، واحرص على متابعة تقييمات المستخدمين وتحديث التطبيق باستمرار.
    `,
    image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'خالد حسن',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      bio: 'مطور تطبيقات موبايل محترف'
    },
    date: '3 يناير 2024',
    readTime: '7 دقائق',
    category: 'تطوير التطبيقات',
    tags: ['تطبيقات الموبايل', 'التطوير', 'النجاح']
  }
];

export const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'تعلم المهارات التقنية الحديثة',
    subtitle: 'انضم إلى آلاف الطلاب واكتسب مهارات جديدة في البرمجة والتصميم',
  },
  {
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'دورات معتمدة من خبراء المجال',
    subtitle: 'احصل على شهادات معتمدة من مدربين محترفين لتطوير مسيرتك المهنية',
  },
  {
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'تعلم من أي مكان وفي أي وقت',
    subtitle: 'مرونة كاملة في التعلم مع دعم فني متواصل على مدار الساعة',
  },
];

export const whyChooseUsFeatures = [
  {
    title: 'شهادات معتمدة',
    description: 'احصل على شهادات معتمدة دولياً تساعدك في تطوير مسيرتك المهنية',
  },
  {
    title: 'مدربين محترفين',
    description: 'تعلم من خبراء المجال الذين يتمتعون بسنوات من الخبرة العملية',
  },
  {
    title: 'دعم فني 24/7',
    description: 'فريق دعم متاح على مدار الساعة لمساعدتك في رحلتك التعليمية',
  },
  {
    title: 'أسعار تنافسية',
    description: 'جودة عالية بأسعار مناسبة للجميع مع إمكانية الدفع بالتقسيط',
  },
];

// Helper functions
export const getCourseById = (id) => {
  return coursesData.find(course => course.id === parseInt(id));
};

export const getAllCourses = () => {
  return coursesData;
};

export const getBlogById = (id) => {
  return blogsData.find(blog => blog.id === parseInt(id));
};

export const getAllBlogs = () => {
  return blogsData;
};

export const getPopularCourses = (limit = 5) => {
  return coursesData.slice(0, limit);
};

export const getLatestBlogs = (limit = 5) => {
  return blogsData.slice(0, limit);
};