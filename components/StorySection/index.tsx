'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Stats data
  const stats = [
    { value: "73%", label: "من الشركات بتفضل حد عنده مهارات عملية حتى لو تقديره مش عالي" },
    { value: "65%", label: "من الخريجين بيشتغلوا في مجال مختلف تمامًا عن اللي درسوه" },
    { value: "80%", label: "من الشباب بيقولوا إنهم 'مش عارفين يبدأوا منين' بعد التخرج" }
  ];

  // Test questions
  const questions = [
    "عندك CV شكله احترافي؟",
    "عملت بورتفوليو بأعمالك أو مشاريعك؟",
    "دخلت إنترفيو قبل كده واتقبلت؟",
    "تعرف تشتغل كفريلانسر أو على منصات شغل حر؟",
    "فاهم متطلبات شغلك في السوق الفعلي؟"
  ];

  // Roadmap steps
  const roadmap = [
    { step: "1", title: "اكتشف نفسك", description: "نعرفك على مهارات السوق الفعلية والمجالات اللي ليك فيها فرص حقيقية" },
    { step: "2", title: "طوّر نفسك", description: "تدرب عملي مع موجهين بيشتغلوا فعلًا في المجال" },
    { step: "3", title: "جهّز شغلك", description: "نساعدك تعمل بورتفوليو، CV، ولينكدإن قوي" },
    { step: "4", title: "ابدأ رحلتك", description: "نوصلك لفرص تدريب وشغل أو فريلانس حقيقية" }
  ];

  // Testimonials
  const testimonials = [
    { name: "محمود، خريج تجارة", quote: "مكنتش عارف أبدأ منين، Eduvento ساعدتني أشتغل على نفسي وأدخل أول شغل ليا." },
    { name: "ندى، خريجة إعلام", quote: "اتعلمت هنا أكتر من سنين الكلية… كله عملي، كله واضح، كله مفيد." }
  ];

  return (
    <section ref={ref} className="py-20 px-2 md:px-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Section */}
        <div
         
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl text-center font-bold gradient-text mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            الحكاية اللي محدش قالك عليها
          </motion.h2>
          
          <div
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
            
          >
            <p 
              className="text-xl text-gray-700 mb-4 gradient-text  "
             
            >
              طالب او خريج ولسه مش لاقي طريق واضح؟
            </p>
            <p 
              className="text-lg text-gray-600 mb-6"
              
            >
              لو حسيت إنك واقف في حتة غريبة، مش عارف تبدأ منين، ولا تروح على فين...
              حابب أقولك: إنت مش لوحدك.
            </p>
            
            <div 
              className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-right"
              
            >
              <p className="text-gray-800 font-medium italic">
                "اتعلمت كتير، بس معرفش أطبّق."
              </p>
              <p className="text-gray-800 font-medium italic">
                "بقدّم على شغل ومفيش رد."
              </p>
              <p className="text-gray-800 font-medium italic">
                "كل وظيفة مكتوب فيها (خبرة مطلوبة)!"
              </p>
              <p className="text-gray-800 font-medium italic">
                "أنا كويس… بس مش عارف أوصل ده لأي شركة."
              </p>
            </div>
            
            <p 
              className="text-lg text-gray-700 font-semibold"

            >
              دي مش غلطتك، بس لازم تكون مسؤوليتك.
            </p>
          </div>
        </div>

        {/* Reality Section */}
        <div
          className="mb-16 text-center"
          
        >
          <h3 
            className="text-2xl md:text-3xl font-bold   my-8  gradient-text"
            
          >
            خليني أقولك الواقع بصراحة:
          </h3>
          
          <div 
            className="bg-blue-600 text-white p-6 rounded-xl mb-8 "
           
          >
            <p className="text-xl md:text-2xl font-bold mb-2">
              سوق الشغل دلوقتي مش بيدوّر على "المتفوقين"...
            </p>
            <p className="text-xl md:text-2xl font-bold">
              بيدوّر على "الجاهزين"!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
               
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <p 
            className="text-xl text-gray-700 text-center mb-8"
           
          >
            يعني المنافسة عالية جدًا، ولو ماجهزتش نفسك كويس... هتتأخر، حتى لو كنت شاطر.
          </p>
        </div>

        {/* Test Yourself Section */}
        <div
          className="mb-16 text-center"
          
        >
          <h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 gradient-text"
            
          >
            اختبر نفسك دلوقتي:
          </h3>
          
          <p 
            className="text-xl text-gray-700 text-center mb-8"
            
          >
            جاوب على الأسئلة دي في دماغك بسرعة 👇
          </p>
          
          <div className="max-w-2xl mx-auto">
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex items-start mb-4"
              
              >
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{question}</p>
              </div>
            ))}
          </div>
          
          <div 
            className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 max-w-2xl mx-auto"
            
          >
            <p className="text-lg text-gray-800 font-semibold text-center">
              لو إجابتك أغلبها "لأ"...<br />
              يبقى Eduvento معموله علشانك.
            </p>
          </div>
        </div>

        {/* Why College Isn't Enough */}
        <div
          className="mb-16 text-center"
          
        >
          <h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6  gradient-text"
            
          >
            ليه الكلية مش كفاية؟
          </h3>
          
          <p 
            className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
            
          >
            الكلية بتعلمك "الأساس"، لكن الشغل محتاج:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "مهارات تواصل",
              "شغل في فرق",
              "التفكير في حلول",
              "إدارة وقت",
              "تنفيذ فعلي مش مذاكرة"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center"
                
              >
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mx-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          
          <p 
            className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
            
          >
            ودي كلها مش بتتشرح في المحاضرات، لكنها بتتحط في الـ CV والإنترفيو، وبتفرق فعلًا.
          </p>
        </div>

        {/* Roadmap Section */}
        <div
          className="mb-16 text-center"
          
        >
          <h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8  gradient-text "
            
          >
            خريطة الطريق مع Eduvento:
          </h3>
          
          <p 
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
            
          >
            تعالى نشوف إزاي ممكن نجهزك خطوة بخطوة:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                
              >
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold ">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold gradient-text mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          
          className=' text-center'
        >
          <h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 gradient-text text-center"
            
          >
            ناس شبهك قالوا إيه؟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;