import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AboutusP1 from '../Pictures/Aboutus-1.png';
import AboutusP2 from '../Pictures/Aboutus-2.png';

const Aboutus = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Full-Screen Image */}
      <section className="w-full h-screen">
        <img
          src={AboutusP1}
          alt={t('about.image1_alt')}
          className="w-full h-full object-cover"
        />
      </section>

      {/* About Us Heading with Lines */}
      <section className="text-center my-16 px-4">
        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-t border-gray-400 mx-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">{t('about.section_heading')}</h2>
          <hr className="flex-grow border-t border-gray-400 mx-4" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          {t('about.proud')}
        </h2>
      </section>

      {/* Blue Background Paragraph Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-10">{t('about.title')}</h1>
            <p className="mb-6 text-lg leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>

          {/* Image Right Side */}
          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img
              src={AboutusP2}
              alt={t('about.image2_alt')}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Contact Us CTA */}
        <div className="text-center mt-16">
          <p className="text-xl mb-6">{t('about.cta_text')}</p>
          <button
            className="bg-white text-blue-700 font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-gray-200"
            onClick={() => navigate('/contact')}
          >
            {t('about.cta_button')}
          </button>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
