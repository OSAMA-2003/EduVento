'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, Heart, BookOpen, Globe } from 'lucide-react';


const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '10,000+', label: 'طالب مسجل' },
    { number: '150+', label: 'دورة تدريبية' },
    { number: '50+', label: 'مدرب محترف' },
    { number: '95%', label: 'معدل الرضا' },
  ];

  const values = [
    {
      icon: Target,
      title: 'الهدف',
      description: 'نهدف إلى تمكين الأفراد من اكتساب المهارات التقنية والمهنية اللازمة لسوق العمل الحديث',
    },
    {
      icon: Heart,
      title: 'الشغف',
      description: 'نؤمن بقوة التعليم في تغيير الحياة ونسعى لتقديم تجربة تعليمية ملهمة ومؤثرة',
    },
    {
      icon: Globe,
      title: 'الرؤية',
      description: 'أن نكون المنصة الرائدة في التعليم الرقمي في المنطقة العربية',
    },
  ];

  // const team = [
  //   {
  //     name: 'أحمد قدري',
  //     role: 'المؤسس والمدير التنفيذي',
  //     image: '/images/ahmed.jpg',
  //     bio: 'خبير في التكنولوجيا والتعليم الرقمي مع أكثر من 15 عام خبرة',
  //   },
  //   {
  //     name: 'سارة أحمد',
  //     role: 'مديرة المحتوى التعليمي',
  //     image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
  //     bio: 'متخصصة في تطوير المناهج التعليمية والتصميم التعليمي',
  //   },
  //   {
  //     name: ' أسامة أحمد',
  //     role: 'مدير التطوير التقني',
  //     image: '/images/osama.jpg',
  //     bio: 'مطور برمجيات محترف ومتخصص في تقنيات الويب الحديثة',
  //   },
  // ];

  return (
    <div className="pb-16  overflow-hidden "   ref={ref}>
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-[#132cb2] to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center  pt-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              من نحن
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              أكاديمية رائدة في التعليم الرقمي تهدف إلى تمكين الأفراد من اكتساب المهارات اللازمة لمواكبة التطور التقني والمهني في العصر الحديث
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-10 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت أكاديمية التعلم الرقمي في عام 2020 برؤية واضحة: جعل التعليم التقني عالي الجودة متاحاً للجميع في المنطقة العربية. انطلقنا من إيماننا العميق بأن التعليم هو المفتاح الأساسي للتقدم والنمو الشخصي والمهني.
                </p>
                <p>
                  خلال السنوات القليلة الماضية، نجحنا في تدريب آلاف الطلاب وساعدناهم على تطوير مهاراتهم والحصول على فرص عمل أفضل. نحن فخورون بكوننا جزءاً من رحلة نجاح طلابنا.
                </p>
                <p>
                  اليوم، نواصل التطوير والابتكار لنقدم أفضل تجربة تعليمية ممكنة، مع التركيز على الجودة والتفاعل والدعم المستمر لطلابنا.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="قصتنا"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-10 md:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-10 md:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              فريق العمل
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تعرف على الفريق المتميز الذي يقف وراء نجاح أكاديمية التعلم الرقمي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className=" w-full  object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutContent;