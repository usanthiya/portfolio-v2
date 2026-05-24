import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Headset, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalDev) {
      // Simulate email sending in local development mode
      console.log('Local Dev Mode: Simulating SendGrid send...', formData);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      return;
    }

    try {
      const response = await axios.post('/.netlify/functions/send-email', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(response.data.error || 'Failed to send message.');
      }
      
    } catch (error: any) {
      console.error('SendGrid Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Oops! Something went wrong while sending your message. Please try again later.');
    }
  };

  const contactInfo = [
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 6379477549', href: 'tel:+916379477549' },
    { icon: <Mail size={18} />, label: 'Email', value: 'santhiyaudhya1@gmail.com', href: 'mailto:santhiyaudhya1@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Chidambaram, India' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight inline-flex items-center gap-3">
            <Headset className="text-primary-500" size={28} />
            <span>Get in <span className="text-primary-500">Touch</span></span>
          </h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden shadow-xl">
            {/* Ambient decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to contact me for career opportunities, collaboration inquiries, or general developer questions. I'll get back to you as soon as possible!
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-slate-800 text-primary-400 p-3 rounded-2xl flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-semibold text-slate-200 hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-200">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro visual indicator */}
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500">
              <span>Typically responds within 24 hours</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/50 dark:border-slate-800/40">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-sm border border-emerald-200/40 dark:border-emerald-800/20"
                    >
                      <CheckCircle size={18} className="flex-shrink-0" />
                      <span>Thank you! Your message was submitted successfully.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 rounded-xl text-sm border border-rose-200/40 dark:border-rose-800/20"
                    >
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:border-primary-500 dark:focus:border-primary-500 outline-none text-sm transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:border-primary-500 dark:focus:border-primary-500 outline-none text-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:border-primary-500 dark:focus:border-primary-500 outline-none text-sm transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message details..."
                    required
                    rows={5}
                    className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:border-primary-500 dark:focus:border-primary-500 outline-none text-sm transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 mt-2 bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold shadow-md shadow-primary-600/10 hover:translate-y-[-2px] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
