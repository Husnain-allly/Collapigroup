import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../Pictures/Products.png';
import MotorImage from '../Pictures/High-and-medium-voltage.png';
import { useTranslation } from 'react-i18next';

const HighMediumVoltageMotor = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      {/* Top Banner Image */}
      <section className="w-full">
        <img
          src={BannerImage}
          alt={t('high_voltage.banner_alt')}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Product Tagline */}
      <section className="bg-blue-900 text-white py-6 px-4 text-center">
        <p className="bg-blue-700 inline-block px-4 py-1 rounded-full text-sm mb-2">
          {t('high_voltage.tag')}
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t('high_voltage.tagline')}
        </h2>
      </section>

      {/* Product Title & Motor Image */}
      <section className="text-center py-10 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          {t('high_voltage.title')}
        </h3>
        <img
          src={MotorImage}
          alt={t('high_voltage.motor_alt')}
          className="mx-auto max-w-xs sm:max-w-md"
        />
      </section>

      {/* Description & Application Fields */}
      <section className="max-w-3xl mx-auto px-4 pb-12 text-gray-800 text-sm sm:text-base leading-relaxed">
        <p className="mb-6">
          <strong>{t('high_voltage.highlight')}</strong> {t('high_voltage.description')}
        </p>

        <h4 className="font-semibold mb-2 text-blue-900">
          {t('high_voltage.application_title')}
        </h4>
        <ul className="list-disc list-inside space-y-1">
          {t('high_voltage.application_list', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-8 px-4 text-center">
        <h4 className="text-xl font-semibold mb-4">{t('high_voltage.cta_title')}</h4>
        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          {t('high_voltage.cta_button')}
        </button>
      </section>
    </div>
  );
};

export default HighMediumVoltageMotor;
