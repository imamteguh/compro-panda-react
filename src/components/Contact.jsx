import { Circle, Mail, MapPinIcon, Phone, Send } from 'lucide-react';
import contactImage from '../assets/contact.jpg';

const Contact = () => {

  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      iconBgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Email',
      detail: 'info@example.com',
      aosDelay: 100
    },
    {
      id: 2,
      icon: Phone,
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      aosDelay: 200
    },
    {
      id: 3,
      icon: MapPinIcon,
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Address',
      detail: '123 Main St, Anytown, USA',
      aosDelay: 300
    }
  ];

  const formFields = [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Your Name',
      delay: 150
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Your Email',
      delay: 200
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Enter your message',
      rows: 5,
      delay: 250
    }
  ];
  return (
    <section id='contact' className='relative overflow-hidden bg-linear-to-br from-blue-50 to-purple-50
      py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center mb-6' data-aos="fade-down">
          <div className='flex-1 max-w-2xl mx-auto space-y-6'>
            <div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900'>
                Get In {" "}
                <span className='font-bold text-black'>
                  Touch<span className='text-green-500'>.</span>
                </span>
              </h2>
              <div className="flex gap-3 mt-4 justify-center">
                <Circle className="text-pink-500 w-5 h-5" />
                <Circle className="text-yellow-500 w-5 h-5" />
                <Circle className="text-green-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 items-center'>
          <div className='flex-1 bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 sm:p-8 border border-gray-100'
            data-aos="fade-right" data-aos-delay="100">
            <form action="" className='space-y-6'>
              {formFields.map((field) => (
                <div
                  key={field.id}
                  data-aos="fade-up"
                  data-aos-delay={field.delay}>
                  <label htmlFor={field.id} className='block text-sm font-medium text-gray-700 mb-2'>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      className='block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className='block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    />
                  )}
                </div>
              ))}
              <div data-aos="fade-up" data-aos-delay="300">
                <button className='w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600
                  transition-colors shadow-md hover:shadow-lg flex items-center justify-center'>
                  Send Message
                  <Send className='w-4 h-4 ml-2 inline-block' />
                </button>
              </div>
            </form>
          </div>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <div className='w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg rounded-xl md:rounded-2xl mb-8'
              data-aos="fade-left" data-aos-delay="200">
              <img src={contactImage} alt="Contact Us" 
                className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300' />
            </div>
            <div className='space-y-4 w-full max-w-md'>
              {contactInfo.map((info) => (
                <div key={info.id} className='flex items-center gap-4 bg-white rounded-xl shadow-md p-4'
                  data-aos="fade-left" data-aos-delay={info.aosDelay}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${info.iconBgColor}`}>
                    <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      {info.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute border-2 border-pink-500 bottom-20 left-10
        w-16 h-16 md:w-20 md:h-20 rounded-full z-0 opacity-50"
        data-aos="zoom-in" data-aos-delay="400"></div>
      <div className="hidden md:block absolute border-4 border-purple-500 top-40 right-10
        w-20 h-20 md:w-24 md:h-24 rounded-full z-0 opacity-50"
        data-aos="zoom-in" data-aos-delay="400"></div>
    </section>
  )
}

export default Contact