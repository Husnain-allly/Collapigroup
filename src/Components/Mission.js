import React from 'react';
import { useTranslation } from 'react-i18next';
import Missionp1 from '../Pictures/Mission-1.png';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Full-Screen Image */}
      <section className="w-full h-screen">
        <img
          src={Missionp1}
          alt={t('mission.image_alt')}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Mission Statement Heading with Lines */}
      <section className="text-center my-16 px-4">
        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-t border-gray-400 mx-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            {t('mission.title')}
          </h2>
          <hr className="flex-grow border-t border-gray-400 mx-4" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          {t('mission.subtitle')}
        </h2>
      </section>

      {/* Blue Background Paragraph Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Text */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-10">{t('mission.brand')}</h1>
            <p className="mb-6 text-lg leading-relaxed">{t('mission.para1')}</p>
            <p className="mb-6 text-lg leading-relaxed">{t('mission.para2')}</p>
            <p className="mb-6 text-lg leading-relaxed">{t('mission.para3')}</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl mb-6">{t('mission.cta_text')}</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-gray-100"
          >
            {t('mission.cta_button')}
          </a>
        </div>
      </section>

    </>
  );
};

export default Mission;
