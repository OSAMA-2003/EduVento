'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // لحالة القائمة الفرعية "انضم إلينا"
  const [joinOpen, setJoinOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكورسات', href: '/courses' },
    { name: 'المدربين', href: '/instructors' },
    { name: 'المقالات', href: '/blogs' },
    { name: 'شركاؤنا', href: '/partners' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setHasScrolled(currentScrollY > 30);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%', transition: { ease: 'easeInOut' } },
    visible: { opacity: 1, x: '0%', transition: { ease: 'easeInOut' } },
    exit: { opacity: 0, x: '100%', transition: { ease: 'easeInOut' } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${hasScrolled ? 'nav-gradient shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
      initial={false}
      animate={showNav ? 'visible' : 'hidden'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex items-center justify-between h-16 md:h-20 flex-row-reverse md:flex-row">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white md:text-left">
            <Image
            src={'/images/logo.png'}
            alt={"logo"}
            width={120}
            height={120}
            />
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  hasScrolled ? 'text-white' : 'text-white'
                } hover:text-logo-blue text-lg`}
              >
                {item.name}
              </Link>
            ))}
            {/* انضم إلينا (ديسكتوب) */}
            <div
              className="relative"
              onMouseEnter={() => setJoinOpen(true)}
              onMouseLeave={() => setJoinOpen(false)}
            >
              <button
                className="font-medium transition-colors text-white hover:text-logo-blue text-lg flex items-center gap-1"
                onClick={() => setJoinOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={joinOpen}
                type="button"
              >
                انضم إلينا
                <svg
                  className={`w-4 h-4 transition-transform ml-1 ${
                    joinOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {joinOpen && (
                  <motion.ul
                   
                    className="absolute right-0 mt-3 min-w-[160px] z-40 bg-white text-black shadow-lg rounded-xl py-2 border border-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.16 }}
                  >
                    <li>
                      <Link href="/join?type=trainer" className="block px-6 py-3 hover:bg-secondary-green/20 transition-colors hover:text-logo-blue">
                        مدرب
                      </Link>
                    </li>
                    <li>
                      <Link href="/join?type=marketer" className="block px-6 py-3 hover:bg-primary-yellow/20 transition-colors hover:text-logo-blue">
                        مسوق
                      </Link>
                    </li>
                    <li>
                      <Link href="/join?type=sponsor" className="block px-6 py-3 hover:bg-logo-blue/10 transition-colors hover:text-logo-blue">
                        Sponser
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white  transition-colors focus:outline-none "
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="hidden " /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden fixed inset-0 h-screen z-40 bg-gradient-primary-enhanced text-white p-6 flex flex-col"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Header: Close Button and Logo */}
              <div className="flex items-center justify-between ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-red-400 transition-colors focus:outline-none "
                  aria-label="Close menu"
                >
                  <X className="h-8 w-8" />
                </button>
                <Link href="/" className="text-2xl font-bold text-white" onClick={() => setIsOpen(false)}>
                  <Image
            src={'/images/logo.png'}
            alt={"logo"}
            width={120}
            height={120}
            />
                </Link>
              </div>

              {/* Links Centered Vertically */}
              <motion.div
                className="flex flex-col items-center justify-center flex-grow space-y-8"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
               
                {/* روابط القائمة العادية */}
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="text-3xl font-medium hover:text-logo-blue transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                 {/* انضم إلينا (موبايل) */}
                <motion.div variants={itemVariants}>
                  <button
                    className="text-3xl font-medium hover:text-logo-blue transition-colors py-2 flex items-center gap-2"
                    onClick={() => setJoinOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={joinOpen}
                  >
                    انضم إلينا
                    <svg className={`w-5 h-5 transition-transform ${joinOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <AnimatePresence>
                    {joinOpen && (
                      <motion.div
                        
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <Link href="/join?type=trainer" onClick={() => setIsOpen(false)} className="block py-3 pr-7 text-2xl hover:text-logo-blue transition-colors">
                          مدرب
                        </Link>
                        <Link href="/join?type=marketer" onClick={() => setIsOpen(false)} className="block py-3 pr-7 text-2xl hover:text-logo-blue transition-colors">
                          مسوق
                        </Link>
                        <Link href="/join?type=sponsor" onClick={() => setIsOpen(false)} className="block py-3 pr-7 text-2xl hover:text-logo-blue transition-colors">
                          Sponser
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
