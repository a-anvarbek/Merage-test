import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation({ currentSection, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionChange = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false); // Menu yopish mobilda
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'services', 
      label: 'Services',
      submenu: [
        { id: 'day-escapes', label: 'Signature Day Escapes' },
        { id: 'multi-day-tours', label: 'Multi-Day Tours' }
      ]
    },
    { 
      id: 'experiences', 
      label: 'Experiences',
      submenu: [
        { id: 'tokyo-highlights', label: 'Tokyo City Highlights' },
        { id: 'mt-fuji-escape', label: 'Mt. Fuji Escape' },
        { id: 'hakone-serenity', label: 'Hakone Serenity' },
        { id: 'nikko-cultural', label: 'Nikko Cultural Discovery' },
        { id: 'kamakura-heritage', label: 'Kamakura Heritage' }
      ]
    },
    { id: 'our-story', label: 'Our Story' },
    { id: 'essence', label: 'Essence' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-nippon-black/95 backdrop-blur-lg shadow-luxury border-b border-nippon-gold/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              className="cursor-pointer"
              onClick={() => onSectionChange('home')}
            >
              <h1 className="text-luxury-2xl text-nippon-gold font-serif tracking-wider">
                Nippon Imperial
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`text-luxury-sm font-sans tracking-wide transition-all duration-300 hover:text-nippon-gold ${
                      currentSection === item.id 
                        ? 'text-nippon-gold' 
                        : 'text-nippon-warm-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-nippon-warm-white shadow-luxury border-l-4 border-nippon-gold min-w-64">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => onSectionChange(subItem.id)}
                            className="block w-full text-left px-6 py-3 text-luxury-sm text-nippon-black font-sans hover:bg-nippon-gold/10 hover:text-nippon-gold transition-colors duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={() => onSectionChange('contact')}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-6 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold"
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="tracking-wider font-medium">Contact</span>
                </span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              className="lg:hidden p-2 bg-transparent text-nippon-gold hover:bg-nippon-gold/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-nippon-black/98 border-t border-nippon-gold/20 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 text-luxury-base font-sans transition-colors duration-200 ${
                      currentSection === item.id 
                        ? 'text-nippon-gold' 
                        : 'text-nippon-warm-white hover:text-nippon-gold'
                    }`}
                  >
                    {item.label}
                  </button>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            onSectionChange(subItem.id);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-luxury-sm text-nippon-gray-light font-sans hover:text-nippon-gold transition-colors duration-200"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-nippon-gold/20">
                <div className="space-y-3 text-luxury-sm text-nippon-gray-light">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-nippon-gold" />
                    <span>+81 3-1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-nippon-gold" />
                    <span>concierge@nipponimperial.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Navigation Spacer */}
      <div className="h-20"></div>
    </>
  );
}