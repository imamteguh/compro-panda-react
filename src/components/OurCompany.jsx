import { Circle, Shield, Star, Zap } from "lucide-react"

const OurCompany = () => {
  return (
    <section id='company' className='relative scroll-m-6 overflow-hidden bg-linear-to-br from-blue-50 to-purple-50
      py-12 px-4 sm:py-16 md:px-12 lg:px-20'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
            Why Our{" "}
            <span className="font-bold text-black">
              Company<span className="text-green-500">?</span>
            </span>
          </h2>
          <div className="flex gap-3 mt-4 justify-center">
            <Circle className="text-pink-500 w-5 h-5" />
            <Circle className="text-yellow-500 w-5 h-5" />
            <Circle className="text-green-500 w-5 h-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full flex justify-center order-2 lg:order-1">
            <div className="bg-white w-full max-w-md lg:max-w-lg xl:max-w-xl h-[460px] md:h-[500px] lg:h-[520px]
              overflow-hidden shadow-lg md:shadow-xl absolute top-0 z-0
              rounded-[30%_10%_20%_70%/60%_30%_70%_30%]"
              data-aos="fade-right" data-aos-delay="100">
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10 p-4 sm:p-6 w-full max-w-md">
              <div className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right" data-aos-delay="200">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <Star className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Quality Service
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, illo?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right" data-aos-delay="300">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <Shield className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Trust & Reability
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, illo?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6 p-4 transition-all bg-transparent"
                data-aos="fade-right" data-aos-delay="400">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <Zap className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Innovation Driven
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, illo?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-linear-to-br from-yellow-500 to-pink-500 rounded-2xl md:rounded-3xl
              p-6 md:p-8 flex flex-col justify-center"
              data-aos="zoom-in" data-aos-delay="200">
              <div className="max-w-md mx-auto text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto
                  mb-4 sm:mb-6">
                    <Star className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Commitment to Excellence
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                  We are dedicated to providing the highest quality services to our clients,
                  ensuring their satisfaction and success through our innovative solutions
                  and expert team.
                </p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                    <div className="text-xs sm:text-sm text-white">Projects Completed</div>
                  </div>
                  <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                    <div className="text-xs sm:text-sm text-white">Years Experience</div>
                  </div>
                  <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                    <div className="text-xs sm:text-sm text-white">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute border-4 border-yellow-500 -top-8 -right-6
              w-20 h-20 md:w-24 md:h-24 rounded-full z-0 opacity-50"
              data-aos="fade-up" data-aos-delay="600"></div>
            <div className="hidden md:block absolute border-4 border-pink-500 -bottom-4 -left-14
              w-20 h-20 md:w-24 md:h-24 rounded-full z-0 opacity-50"
              data-aos="fade-up" data-aos-delay="600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCompany