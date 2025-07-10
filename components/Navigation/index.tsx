'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكورسات', href: '/courses' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  // Effect to handle scroll behavior for hiding/showing navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll down past a certain threshold, hide nav
        setShowNav(false);
      } else {
        // Scroll up, or near the top, show nav
        setShowNav(true);
      }

      // Determine if user has scrolled beyond a small threshold to apply background/shadow
      setHasScrolled(currentScrollY > 30);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, x: '100%', transition: { ease: 'easeInOut' } },
    visible: { opacity: 1, x: '0%', transition: { ease: 'easeInOut' } },
    exit: { opacity: 0, x: '100%', transition: { ease: 'easeInOut' } },
  };

  // Framer Motion variants for menu item staggering
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${hasScrolled ? 'nav-gradient shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
      initial={false} // Prevents initial animation if not needed
      animate={showNav ? 'visible' : 'hidden'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex items-center justify-between h-16 md:h-20 flex-row-reverse md:flex-row">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white md:text-left">
            EduVento
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  hasScrolled ? 'text-white' : 'text-white' // Keep text white regardless of scroll for contrast
                } hover:text-blue-400 text-lg`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white  transition-colors focus:outline-none "
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
              className="md:hidden fixed inset-0 h-screen z-40 bg-gradient text-white p-6 flex flex-col"
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
                  EduVento
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
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="text-3xl font-medium hover:text-blue-400 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;