import { ArrowRight, Brush, Camera, Circle, CircleCheck, Code } from 'lucide-react';
import React, { useState } from 'react'
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

const Services = () => {

  const [activeService, setActiveService] = useState(1);
  const services = [
    {
      id: 1,
      icon: <Brush className='w-5 h-5 sm:w-6 sm:h-6' />,
      title: 'UI/UX Design',
      description: 'Creating user-friendly and visually appealing designs for web and mobile applications.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'UI Design',
        'Usability Testing'
      ],
      color: 'bg-pink-400',
      bgColor: 'bg-pink-400 hover:bg-pink-500',
      iconColor: 'text-pink-100',
      image: service1
    },
    {
      id: 2,
      icon: <Code className='w-5 h-5 sm:w-6 sm:h-6' />,
      title: 'Web Development',
      description: 'Building responsive and high-performance websites using the latest technologies.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'UI Design',
        'Usability Testing'
      ],
      color: 'bg-yellow-400',
      bgColor: 'bg-yellow-400 hover:bg-yellow-500',
      iconColor: 'text-yellow-100',
      image: service2
    },
    {
      id: 3,
      icon: <Camera className='w-5 h-5 sm:w-6 sm:h-6' />,
      title: 'Photography',
      description: 'Capturing stunning images and videos for various purposes.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'UI Design',
        'Usability Testing'
      ],
      color: 'bg-green-400',
      bgColor: 'bg-green-400 hover:bg-green-500',
      iconColor: 'text-green-100',
      image: service3
    }
  ];
  return (
    <section id='services' className='relative overflow-hidden bg-linear-to-br from-gray-50 to-green-50
      py-12 px-4 sm:py-16 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center text-center' data-aos="fade-down">
          <div className='flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0'>
            <div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900'>
                Our {" "}
                <span className='font-bold text-black'>
                  Services <span className='text-green-500'>.</span>
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
        <div className='flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center'
          data-aos="fade-up" data-aos-delay="100">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-5 py-3 sm:px-6 sm:py-4 rounded-full font-medium text-white
                shadow-md sm:shadow-lg hover:shadow-xl transition-all
                ${activeService === service.id ? service.bgColor : 'bg-gray-300 hover:bg-gray-400 text-gray-700'}`}>
              <div className='flex items-center gap-2 sm:gap-3'>
                <span className={`${activeService === service.id ? service.iconColor : 'text-gray-600'}`}>
                  {service.icon}
                </span>
                <span className='text-sm sm:text-base'>{service.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className='bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 sm:p-8
          mb-12 sm:mb-16 border border-gray-100'
          data-aos="fade-up" data-aos-delay="200">
          {services.filter(service => service.id === activeService).map((service) => (
            <div key={service.id} className='flex flex-col lg:flex-row gap-6 md:gap-10'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 sm:gap-4 mb-2 sm:mb-6' data-aos="fade-right" data-aos-delay="300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center
                    ${service.color} bg-opacity-10`}>
                    <div className={service.iconColor}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className='text-2xl sm:text-3xl font-bold font-gray-800'>
                    {service.title}
                  </h3>
                </div>
                <p className='text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed'
                  data-aos="fade-right" data-aos-delay="350">
                  {service.description}
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8'
                  data-aos="fade-up" data-aos-delay="400">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2'
                      data-aos="fade-up"
                      data-aos-delay={450 + index * 50}>
                        <CircleCheck className='w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0' />
                        <span className='text-gray-700 text-sm sm:text-base'>
                          {feature}
                        </span>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center lg:justify-start' data-aos="fade-up" data-aos-delay="500">
                  <button className={`px-6 py-3 md:px-8 md:py-4 ${service.bgColor} text-white rounded-full font-medium
                    transition-colors shadow-md md:shadow-lg hover:shadow-xl flex items-center gap-2 text-sm md:text-base`}>
                    Get This Service
                    <ArrowRight className='w-4 h-4' />
                  </button>
                </div>
              </div>
              <div className='flex-1 mt-6 lg:mt-0' data-aos="fade-left" data-aos-delay="300">
                <div className='w-full h-60 sm:h-72 md:h-80 overflow-hidden shadow-lg rounded-xl md:rounded-2xl'>
                  <img src={service.image} alt={service.title} 
                    className='object-cover w-full transform hover:scale-105 transition-transform duration-500'/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block absolute border-2 border-pink-500 bottom-20 left-10
        w-16 h-16 md:w-20 md:h-20 rounded-full z-0 opacity-50"
        data-aos="zoom-in" data-aos-delay="700"></div>
      <div className="hidden md:block absolute border-4 border-green-500 top-40 right-10
        w-20 h-20 md:w-24 md:h-24 rounded-full z-0 opacity-50"
        data-aos="zoom-in" data-aos-delay="700"></div>
    </section>
  )
}

export default Services