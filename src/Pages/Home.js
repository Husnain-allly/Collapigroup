import React from 'react';
import { useNavigate } from 'react-router-dom';
import FromUsImage from '../Pictures/Home-1.png';
import EngineeringBg from '../Pictures/Home-2.png';
import GreenSection from '../Pictures/Home-3.png';
import ServicesBg from '../Pictures/Home-4.png';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <main className="pt-16">
        <div className="w-full">

          {/* Section 1 - Full Image */}
          <section className="mb-4">
            <img src={FromUsImage} alt={t("home.section1.alt")} className="w-full object-cover" />
          </section>

          {/* Section 2 - Engineering Excellence */}
          <section
            className="bg-cover bg-center text-black py-20 px-4 mb-4"
            style={{ backgroundImage: `url(${EngineeringBg})` }}
          >
            <div className="max-w-6xl mx-auto bg-white bg-opacity-90 p-8 rounded">
              <h2 className="text-4xl font-bold" style={{ color: '#205A95' }}>
                {t("home.section2.heading")}
              </h2>
              <p className="mt-4 text-lg max-w-xl text-black">
                {t("home.section2.description")}
              </p>
            </div>
          </section>

          {/* Section 3 - Green Image */}
          <section className="mb-4">
            <img src={GreenSection} alt={t("home.section3.alt")} className="w-full object-cover" />
          </section>

          {/* Section 4 - About Us */}
          <section className="bg-blue-600 text-white py-12 text-center mb-4">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">{t("home.section4.heading")}</h2>
              <p className="text-lg">
                {t("home.section4.description")}
              </p>
              <button
                className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200"
                onClick={() => navigate('/aboutus')}
              >
                {t("home.section4.button")}
              </button>
            </div>
          </section>

          {/* Section 5 - Our Services */}
          <section
            className="bg-cover bg-center text-white py-20 px-4 mb-4"
            style={{ backgroundImage: `url(${ServicesBg})` }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold">{t("home.section5.heading")}</h2>
              <p className="mt-4 text-lg max-w-xl">
                {t("home.section5.description")}
              </p>
              <button
                className="mt-6 px-6 py-3 bg-blue-600 rounded hover:bg-blue-700"
                onClick={() => navigate('/services')}
              >
                {t("home.section5.button")}
              </button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
