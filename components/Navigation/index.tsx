'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setHasScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${hasScrolled ? 'bg-blue-600 shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex items-center justify-between h-16 md:h-20 flex-row-reverse md:flex-row">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white md:text-left">
            EduVento
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  hasScrolled ? 'text-[#132cb2]' : 'text-white'
                } hover:text-blue-500`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      {/* Mobile Navigation */}
<motion.div
  className={`md:hidden fixed top-0 left-0 right-0 h-screen z-40 bg-[#132cb2] text-white ${
    isOpen ? 'block' : 'hidden'
  }`}
  initial={{ opacity: 0 }}
  animate={{ opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Header: Logo + Close */}
  <div className="flex items-center justify-between px-4 pt-4">

 {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="text-white hover:text-red-400 transition-colors"
    >
      <X className="h-6 w-6" />
    </button>


    {/* Logo */}
    <Link href="/" className="text-xl font-bold text-white">
      EduVento
    </Link>

   
  </div>

  {/* Links Centered Vertically */}
  <div className="py-6 px-4 space-y-6 flex flex-col items-center justify-center h-[calc(100%-4rem)]">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="text-xl font-medium hover:text-blue-400 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
</motion.div>

      </div>
    </motion.nav>
  );
};

export default Navigation;
