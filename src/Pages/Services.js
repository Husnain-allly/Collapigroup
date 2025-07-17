import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TopImage from '../Pictures/Services.png';

import ExplosionProof from '../Pictures/Explosion-proof.png';
import HighMediumVoltage from '../Pictures/High-and-medium-voltage.png';
import SmokeExtraction from '../Pictures/Smoke-extraction.png';
import PermanentMagnet from '../Pictures/Permanent-magnet.png';
import StandardMotor from '../Pictures/Standard-motor.png';
import DCMotor from '../Pictures/DC-motor.png';
import SinglePhase from '../Pictures/Single-phase.png';
import SynchronousGenerator from '../Pictures/Synchronous-generator.png';

const Services = () => {
  const { t } = useTranslation();

  const products = [
    { name: t('services.products.explosion_proof'), image: ExplosionProof, path: '/ExplosionProofMotor' },
    { name: t('services.products.high_medium_voltage'), image: HighMediumVoltage, path: '/High-and-medium-voltage' },
    { name: t('services.products.smoke_extraction'), image: SmokeExtraction, path: '/SmokeExtractionMotor' },
    { name: t('services.products.permanent_magnet'), image: PermanentMagnet, path: '/PermanentMagnetMotor' },
    { name: t('services.products.standard_motor'), image: StandardMotor, path: '/StandardMotors' },
    { name: t('services.products.dc_motor'), image: SinglePhase, path: '/DCMotors' },
    { name: t('services.products.single_phase'), image: DCMotor, path: '/SinglePhaseMotor' },
    { name: t('services.products.synchronous_generator'), image: SynchronousGenerator, path: '/SynchronousGenerators' },
  ];

  return (
    <>
      {/* Top Banner Image */}
      <section className="w-full">
        <img
          src={TopImage}
          alt="CoalpiGroup Products"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Heading and Intro Text */}
      <section className="text-center py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">{t('services.heading')}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {t('services.description1')}
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t('services.description2')}
        </p>
      </section>

      {/* Electric Motors Section */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-800 mb-8">{t('services.motor_section')}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {products.map((product, index) => (
            <Link to={product.path} key={index} className="group block">
              <div className="overflow-hidden rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="bg-blue-700 text-white mt-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
