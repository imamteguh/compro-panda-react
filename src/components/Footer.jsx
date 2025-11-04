import { Circle, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-pink-600'},
    { icon: Twitter, href: '#', color: 'hover:bg-blue-500'},
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500'},
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-600'},
  ];

  const quickLinks = [
    { label: 'Home', href: '#'},
    { label: 'About', href: '#'},
    { label: 'Service', href: '#'},
    { label: 'Company', href: '#'},
    { label: 'Contact', href: '#'}
  ];

  const services = [
    { label: 'UI/UX Design', href: '#'},
    { label: 'Web Development', href: '#'},
    { label: 'Mobile Development', href: '#'},
    { label: 'Photography', href: '#'},
    { label: 'Branding', href: '#'},
    { label: 'Digital Marketing', href: '#'},
  ];

  const contactInfo = [
    { icon: Phone, text: '+123 456 7890', color: 'text-pink-500'},
    { icon: Mail, text: 'info@example.mail', color: 'text-yellow-500'},
    {
      icon: MapPin,
      text: '123 Street achor, Bagades, Suport LA',
      color: 'text-green-500',
      multiline: true
    }
  ];

  const decorativeDots = [
    { color: 'text-pink-500'},
    { color: 'text-yellow-500'},
    { color: 'text-green-500'}
  ];
  return (
    <section className='relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800
      py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'>
          <div className='space-y-6'>
            <div className='flex items-center text-2xl font-bold'>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border-3
              sm:border-4 border-pink-600 text-pink-600 mr-2'>
                P
              </div>
              <span>
                ro <span className="text-yellow-500">Service</span>
              </span>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Facere soluta quo quod est alias sed tempore, provident similique nam? Non rerum 
              dolorum cum neque laborum ratione quaerat assumenda et incidunt!
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index} 
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors
                    ${social.color}`}>
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}
                    className='text-gray-300 hover:text-pink-500 transition-colors'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block'>
              Our Services
            </h3>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href}
                    className='text-gray-300 hover:text-pink-500 transition-colors'>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block'>
              Contact Info
            </h3>
            <div className='space-y-3'>
              {contactInfo.map((contact, index) => (
                <div key={index}
                  className={`flex items-center gap-3 ${contact.multiline ? 'items-start' : ''}`}>
                  <div className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0'>
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <div>
                    <p className='text-gray-300 whitespace-pre-line'>
                      {contact.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-3 mb-8'>
          {decorativeDots.map((dec, idx) => (
            <Circle key={idx} className={`w-4 h-4 ${dec.color}`} />
          ))}
        </div>
        <div className='border-t border-gray-700 pt-8 text-center'>
          <p className='text-gray-400 flex items-center justify-center gap-1'>
            &copy; 2026 Lorem ipsume.
            <Heart className='w-5 h-5 text-pink-500 fill-current' />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer