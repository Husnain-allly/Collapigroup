import React from 'react';
import { FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t('footer.company_name')}</h3>
          <p className="text-sm">{t('footer.company_description')}</p>
          <div className="mt-4 text-sm">
            <p className="flex items-center gap-2"><FaEnvelope /> {t('footer.email')}</p>
            <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> {t('footer.phone')}</p>
          </div>
        </div>

      

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t('footer.connect_title')}</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder={t('footer.email_placeholder')}
              className="p-2 rounded-l w-full text-black text-sm"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800 text-sm">
              {t('footer.signup')}
            </button>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-2xl hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
