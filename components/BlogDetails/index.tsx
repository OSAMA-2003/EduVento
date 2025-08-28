'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Eye,
  MessageCircle,
  Heart,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { Blog } from '@/lib/types'
import Image from 'next/image'

interface BlogDetailsProps {
  blog: Blog
  relatedBlogs: Blog[]
}

const BlogDetails = ({ blog, relatedBlogs }: BlogDetailsProps) => {
  const [isLiked, setIsLiked] = useState(false)

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' })
  const isRelatedInView = useInView(relatedRef, { once: true, margin: '-100px' })

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)
        alert('تم نسخ الرابط إلى الحافظة')
      }
    } catch (err) {
      console.error('Sharing failed:', err)
    }
  }

  const safeContent = blog.content || ''

  const formattedDate = blog.created_at
    ? new Date(blog.created_at).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'تاريخ غير معروف'

  const authorName = blog.auther || 'مؤلف غير معروف'
  const readTime = blog.readTime || '5 دقائق'

  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'تقنية':
      case 'technology':
        return 'bg-logo-blue'
      case 'تعليم':
      case 'education':
        return 'bg-secondary-green'
      case 'برمجة':
      case 'programming':
        return 'bg-primary-yellow text-primary-dark'
      case 'تصميم':
      case 'design':
        return 'bg-alert-red'
      default:
        return 'bg-logo-blue'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Section */}
      <section
        className="relative bg-gradient-primary-enhanced text-white py-24 md:py-32 overflow-hidden"
        ref={heroRef}
      >
        {/* 💫 Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-pattern opacity-10" />
        </div>

        {/* 🧠 Article Header */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {blog.category && (
              <motion.div
                className="inline-block mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`${getCategoryColor(blog.category)} text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg backdrop-blur-sm`}>
                  {blog.category}
                </div>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {blog.title || 'عنوان المقال'}
            </motion.h1>

            {blog.excerpt && (
              <motion.p
                className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {blog.excerpt}
              </motion.p>
            )}

            {/* Meta information */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8"
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <User className="h-4 w-4 text-primary-yellow" />
                <span className="font-semibold text-white text-sm">{authorName as React.ReactNode}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Calendar className="h-4 w-4 text-secondary-green" />
                <span className="font-semibold text-white text-sm">{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Clock className="h-4 w-4 text-logo-blue" />
                <span className="font-semibold text-white text-sm">{readTime}</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleShare}
                className="group bg-primary-yellow text-primary-dark px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
              >
                <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>مشاركة المقال</span>
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white p-3 rounded-xl hover:bg-white/20 transition duration-300 ${isLiked ? 'text-red-400' : ''}`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

        

      
      <div className="container mx-auto px-4 py-20 relative">
          {/* Breadcrumb */}
        <motion.nav
          className="mb-12 max-w-5xl mx-auto "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="مسار التنقل"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-logo-blue hover:text-secondary-green transition-colors font-medium">
                الرئيسية
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blogs" className="text-logo-blue hover:text-secondary-green transition-colors font-medium">
                المقالات
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary-dark font-semibold" aria-current="page">
                {blog.title || 'المقال الحالي'}
              </span>
            </div>
          </div>
        </motion.nav>
        {/* 📰 Article Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1  gap-12">
            <div className="xl:col-span-3" ref={contentRef}>
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="h-2 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow"></div>
                <div className="p-8 md:p-12">
                  <motion.article
                    className="prose prose-lg max-w-none text-gray-800 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div
                      className="text-gray-700 !leading-[40px]   text-justify text-lg md:text-xl "
                      dangerouslySetInnerHTML={{ __html: safeContent }}
                    />
                  </motion.article>
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                className="mt-12 bg-gradient-to-br from-primary-yellow/90 to-secondary-green/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-primary-dark relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-right sm:items-start sm:gap-6 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-4 sm:mb-0 shadow-xl">
                    <User className="h-10 w-10 text-primary-dark" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      حول الكاتب: {authorName as React.ReactNode}
                    </h2>
                    <p className="leading-relaxed opacity-90">
                      كاتب متخصص في مجال التكنولوجيا والتعليم، يسعى إلى تقديم محتوى قيم ومفيد للقراء.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ✅ Enhanced Sidebar */}
            <div className="xl:col-span-1 flex justify-center items-center ">
              
              {/* Article Stats
              <motion.div
                className="card-primary mb-8  top-8"
                initial={{ opacity: 0, x: 30 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-logo-blue">إحصائيات المقال</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'مدة القراءة', value: readTime, icon: <Clock className="h-4 w-4" /> },
                    { label: 'المشاهدات', value: `${Math.floor(Math.random() * 1000) + 500}`, icon: <Eye className="h-4 w-4" /> },
                    { label: 'التعليقات', value: `${Math.floor(Math.random() * 50) + 10}`, icon: <MessageCircle className="h-4 w-4" /> },
                    { label: 'الإعجابات', value: `${Math.floor(Math.random() * 100) + 25}`, icon: <Heart className="h-4 w-4" /> },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                      <div className="flex items-center gap-2">
                        <div className="text-logo-blue group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        <span className="text-gray-600 font-medium">{stat.label}</span>
                      </div>
                      <span className="font-bold text-primary-dark">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* Quick Actions */}
              <motion.div
                className="card-primary flex justify-center items-center  flex-col min-w-[250px] md:min-w-[500px]  "
                initial={{ opacity: 0, x: 30 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-logo-blue mb-6">إجراءات سريعة</h3>
                <div className="space-y-3">
                  <button 
                    onClick={handleShare}
                    className="w-full btn-gradient-primary -z-10 flex items-center justify-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>مشاركة المقال</span>
                  </button>
                  
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full border-2 px-4 py-3 rounded-xl font-semibold transition duration-300 flex items-center justify-center gap-2 ${
                      isLiked 
                        ? 'border-red-300 bg-red-50 text-red-600' 
                        : 'border-gray-300 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{isLiked ? 'تم الإعجاب' : 'أعجبني'}</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Enhanced Related Articles */}
      {relatedBlogs?.length > 0 && (
        <section className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden" ref={relatedRef}>
          <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-primary-yellow/90 backdrop-blur-sm text-primary-dark px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg mb-6">
                  مقالات مشابهة
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  مقالات قد تعجبك
                </h2>
                
                <div className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full shadow-lg"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.article
                    key={relatedBlog.id}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500 group border border-white/20 flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {relatedBlog.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={relatedBlog.image }
                            alt={`صورة مصغرة لـ ${relatedBlog.title}`}
                            fill
                            // sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            // width={500}
                            // height={300}
                          />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-logo-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <BookOpen className="h-6 w-6 text-logo-blue" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3 hover:text-logo-blue transition-colors duration-300 line-clamp-2 group-hover:text-logo-blue">
                          <Link 
                            href={`/blogs/${relatedBlog.id}`} 
                            className="focus:outline-none focus:ring-2 focus:ring-logo-blue rounded"
                          >
                            {relatedBlog.title}
                          </Link>
                        </h3>
                        
                        {relatedBlog.excerpt && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow group-hover:text-gray-800 transition-colors duration-300">
                            {relatedBlog.excerpt}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(relatedBlog.created_at || '').toLocaleDateString('ar-EG')}</span>
                        </div>
                        
                        <Link
                          href={`/blogs/${relatedBlog.id}`}
                          className="group/btn inline-flex items-center gap-2 text-logo-blue hover:text-secondary-green font-semibold text-sm transition duration-300 relative"
                          aria-label={`اقرأ المزيد عن ${relatedBlog.title}`}
                        >
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
