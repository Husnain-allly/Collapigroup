import React from 'react';
import applicationp1 from '../Pictures/Application-1.png';
import applicationp2 from '../Pictures/Application-2.png';
import { useTranslation } from 'react-i18next';

const Application = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans text-[#333]">
      {/* Top Image Banner */}
      <section className="w-full h-auto">
        <img
          src={applicationp1}
          alt={t('application.image1_alt')}
          className="w-full object-cover"
        />
      </section>

      {/* Blue Section Heading */}
      <section className="bg-blue-800 text-white py-6 px-4 text-center">
        <div className="mb-2">
          <span className="bg-white text-blue-800 font-semibold py-1 px-3 text-sm rounded">
            {t('application.label')}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{t('application.tagline')}</h2>
      </section>

      {/* Application Areas Image */}
      <section className="w-full py-8 px-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
          {t('application.heading')}
        </h3>
        <img
          src={applicationp2}
          alt={t('application.image2_alt')}
          className="mx-auto w-full max-w-5xl"
        />
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-4 pb-8 text-justify">
        <p className="mb-6">{t('application.description1')}</p>

        {/* Industries List */}
        <h4 className="text-lg font-semibold mb-2">{t('application.industries_title')}</h4>
        <ul className="list-disc pl-6 space-y-1">
          {t('application.industries', { returnObjects: true }).map((item, index) => (
            <li key={index}><strong>{item.label}</strong> ({item.translation})</li>
          ))}
        </ul>

        <p className="mt-6">{t('application.description2')}</p>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6 px-4 text-center">
        <h5 className="text-xl font-semibold mb-4">{t('application.footer_title')}</h5>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="block bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-gray-100 transition"
          >
            {t('application.footer_contact')}
          </a>
          <a
            href="/ourmission"
            className="block bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-gray-100 transition"
          >
            {t('application.footer_mission')}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Application;
