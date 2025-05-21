import React, { useState, useRef, FormEvent } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
// στη φόρμα:
import ReCAPTCHA from 'react-google-recaptcha';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error('Παρακαλώ επαληθεύστε ότι δεν είστε ρομπότ.');
      return;
    }
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_dp6q9iv', 
      'template_g0v8zbs', 
      formRef.current,
      '5xHzaRnQcqSqDQB-T'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success('Το μήνυμά σας στάλθηκε με επιτυχία!');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        toast.error('Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Στείλτε μου μήνυμα</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
            Ονοματεπώνυμο
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Μήνυμα
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey="your_recaptcha_site_key_here"
          onChange={(value) => setCaptchaValue(value)}
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};