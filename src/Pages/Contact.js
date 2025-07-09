import React, { useRef, useState } from 'react';
import TopImage from '../Pictures/Contactus.png';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tufgssi',      // Replace with your actual Service ID
      'template_w9oocy3',     // Template ID
      formRef.current,
      'Pw5o7WfS1VAMwR6XG'     // Public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus('success');
        formRef.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus('error');
      }
    );
  };

  return (
    <div className="font-sans">
      {/* Top Image */}
      <section className="w-full">
        <img src={TopImage} alt="Contact Banner" className="w-full h-auto object-cover" />
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-900 text-white p-4 text-sm sm:text-base">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p><strong>{t('contact.headquarter')}</strong> {t('contact.headquarter_address')}</p>
      <p><strong>Email:</strong></p>
      <p>infocoalpigroup@gmail.com</p>
    </div>
    <div>
      <p><strong>Phone:</strong></p>
      <p>+39 345 402 0222 (Alex)</p>
      <p>+39 351 723 6664 (Mario)</p>
    </div>
  </div>
</section>


      {/* Branch Prompt */}
      <section className="bg-gray-100 py-4 px-6 text-center">
        <p className="mb-2">{t('contact.branch_prompt')}</p>
      </section>

      {/* Request Info Form */}
      <section className="bg-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">{t('contact.request_info.heading')}</h2>
          <p className="text-center text-sm mb-6">{t('contact.request_info.description')}</p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder={t('contact.request_info.name')} className="border p-2 w-full" required />
              <input name="surname" type="text" placeholder={t('contact.request_info.surname')} className="border p-2 w-full" required />
              <input name="email" type="email" placeholder={t('contact.request_info.email')} className="border p-2 w-full" required />
              <input name="phone" type="tel" placeholder={t('contact.request_info.phone')} className="border p-2 w-full" required />
            </div>
            <textarea name="message" placeholder={t('contact.request_info.request')} className="border p-2 w-full h-32" required></textarea>
            <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
              {t('contact.request_info.submit_button')}
            </button>
          </form>

          {/* Submission Feedback */}
          {status === 'success' && (
            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center mt-4">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
