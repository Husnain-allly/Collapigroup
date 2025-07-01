import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../Pictures/Logo.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar with icons and language switch */}
      <div className="flex justify-between items-center bg-gray-100 px-6 py-1 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-gray-600 hover:text-gray-800" />
          </a>
        </div>
        <div>
          <button
            onClick={() => i18n.changeLanguage('it')}
            className={`hover:underline cursor-pointer ${i18n.language === 'it' ? 'font-bold text-black' : ''}`}
          >
            Italiano
          </button>
          {' - '}
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`hover:underline cursor-pointer ${i18n.language === 'en' ? 'font-bold text-black' : ''}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-3 bg-white relative z-10">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Coalpi Group Logo" className="h-12 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-10 text-gray-800 text-base font-medium">
          {/* Dropdown: The Group */}
          <div className="relative group inline-block text-left">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded inline-flex items-center">
              <span>{t('navbar.group')}</span>
            </button>

            <div className="absolute hidden group-hover:block bg-white shadow-lg border mt-1 rounded z-50">
              <a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {t('navbar.about')}
              </a>
              <a href="/ourmission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {t('navbar.mission')}
              </a>
              <a href="/application" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {t('navbar.application')}
              </a>
            </div>
          </div>

          {/* Other Pages */}
          <Link to="/services" className="hover:text-blue-600">
            {t('navbar.services')}
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            {t('navbar.contacts')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
