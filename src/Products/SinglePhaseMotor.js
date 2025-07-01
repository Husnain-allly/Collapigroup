import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BannerImage from '../Pictures/Products.png';
import MotorImage from '../Pictures/Single-phase.png';

const SinglePhaseMotor = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      {/* Top Banner */}
      <section className="w-full">
        <img
          src={BannerImage}
          alt={t('single_phase.banner_alt')}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Tagline Section */}
      <section className="bg-blue-900 text-white py-6 px-4 text-center">
        <p className="bg-blue-700 inline-block px-4 py-1 rounded-full text-sm mb-2">
          {t('single_phase.tag')}
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t('single_phase.tagline')}
        </h2>
      </section>

      {/* Title & Motor Image */}
      <section className="text-center py-10 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          {t('single_phase.title')}
        </h3>
        <img
          src={MotorImage}
          alt={t('single_phase.motor_alt')}
          className="mx-auto max-w-xs sm:max-w-md"
        />
      </section>

      {/* Description & Application */}
      <section className="max-w-3xl mx-auto px-4 pb-12 text-gray-800 text-sm sm:text-base leading-relaxed">
        <p className="mb-6">
          <strong>{t('single_phase.title')}</strong> – {t('single_phase.description')}
        </p>

        <h4 className="font-semibold mb-2 text-blue-900">{t('single_phase.application_title')}</h4>
        <ul className="list-disc list-inside space-y-1">
          {t('single_phase.application_list', { returnObjects: true }).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 text-white py-8 px-4 text-center">
        <h4 className="text-xl font-semibold mb-4">{t('single_phase.cta_title')}</h4>
        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          {t('single_phase.cta_button')}
        </button>
      </section>
    </div>
  );
};

export default SinglePhaseMotor;
