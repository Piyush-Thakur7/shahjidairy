import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactLocation() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    
    // 10-digit Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(form.phone.trim())) {
      tempErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!form.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', phone: '', message: '' });
    }, 1500);
  };

  const openingHours = [
    { days: 'Monday - Friday', hours: '7:00 AM - 10:00 PM' },
    { days: 'Saturday', hours: '7:00 AM - 10:30 PM' },
    { days: 'Sunday', hours: '7:00 AM - 10:30 PM' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Contact Us & Visit Store
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form Left */}
          <div className="bg-[#FFFBEF] p-8 sm:p-10 rounded-3xl shadow-md border border-brand-green/5 relative">
            <h3 className="text-2xl font-heading font-bold text-brand-green mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal/80 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border bg-primary text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all ${
                    errors.name ? 'border-accent-red focus:border-accent-red' : 'border-brand-green/10 focus:border-brand-green'
                  }`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id="name-error" className="text-xs text-accent-red font-medium mt-1.5 block">{errors.name}</span>}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal/80 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className={`w-full px-4 py-3 rounded-xl border bg-primary text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all ${
                    errors.phone ? 'border-accent-red focus:border-accent-red' : 'border-brand-green/10 focus:border-brand-green'
                  }`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && <span id="phone-error" className="text-xs text-accent-red font-medium mt-1.5 block">{errors.phone}</span>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal/80 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you'd like to order or ask..."
                  className={`w-full px-4 py-3 rounded-xl border bg-primary text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all ${
                    errors.message ? 'border-accent-red focus:border-accent-red' : 'border-brand-green/10 focus:border-brand-green'
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <span id="message-error" className="text-xs text-accent-red font-medium mt-1.5 block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-green hover:bg-brand-green-light text-primary font-bold tracking-widest uppercase shadow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

            {/* Success Overlay Modal */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#FFFBEF] rounded-3xl p-8 flex flex-col justify-center items-center text-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="text-brand-orange mb-4" size={72} />
                  </motion.div>
                  <h4 className="text-2xl font-bold font-heading text-brand-green mb-2">Message Sent!</h4>
                  <p className="text-charcoal/70 text-sm sm:text-base font-body mb-6 max-w-xs">
                    Thank you! We have received your query and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-brand-green text-primary font-bold text-sm uppercase tracking-wider"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Details & Location Map Right */}
          <div className="space-y-8 flex flex-col justify-between">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Address */}
              <div className="bg-[#FFFBEF] p-6 rounded-2xl border border-brand-green/5 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-green text-base mb-1">Our Location</h4>
                  <p className="text-xs text-charcoal/70 font-body leading-relaxed">
                    CPW4+Q2J, Shaji Road, Sikandrabad,<br />
                    Uttar Pradesh 203205
                  </p>
                </div>
              </div>

              {/* Card 2: Contact & Phone */}
              <div className="bg-[#FFFBEF] p-6 rounded-2xl border border-brand-green/5 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-green text-base mb-1">Call Us</h4>
                  <a
                    href="tel:08979369874"
                    className="text-sm font-extrabold text-accent-red hover:underline font-body block"
                  >
                    08979369874
                  </a>
                  <p className="text-[10px] text-charcoal/50 font-body mt-1">Tap to call directly</p>
                </div>
              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#FFFBEF] p-6 rounded-2xl border border-brand-green/5 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-brand-green" size={22} />
                <h4 className="font-heading font-bold text-brand-green text-lg">Business Hours</h4>
              </div>
              <div className="divide-y divide-brand-green/10 font-body text-sm text-charcoal">
                {openingHours.map((row) => (
                  <div key={row.days} className="flex justify-between py-2.5">
                    <span className="font-medium text-charcoal/70">{row.days}</span>
                    <span className="font-bold text-brand-green">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-brand-green/10 flex-grow h-[250px] relative">
              <iframe
                title="Shahji Dairy Location Map in Sikandrabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.340058866504!2d77.69176961129994!3d28.469342791334994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc10636253c5f%3A0xe54d3d2e67dfb4a4!2sShahji%20Dairy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
