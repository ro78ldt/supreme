import { Menu, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Car1 from "/images/car1.png";
import Truck from "/images/truckbody.png";
import Car3 from "/images/car3.png";
import Car4 from "/images/car4.png";
import Car5 from "/images/car5.png";
import Car6 from "/images/car6.png";
import Logo from "/images/Logo.png";
import translator from "/images/translator.png";
import Linkedin from "/images/linkedin.png";

function App() {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasFinishedSlides, setHasFinishedSlides] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = useMemo(() => [
    {
      category: "Passenger vehicles",
      description: "Revving up Nonwoven innovation from interior to exterior.",
      image: <img src={Car1} alt="" className="w-[80%] h-auto object-contain"/>,
    },
    {
      category: "Commercial vehicles",
      description: "Advancing Nonwoven engineering for heavy-duty vehicles.",
      image: <img src={Truck} alt="" className="w-[80%] h-auto object-contain"/>,
    },
    {
      category: "Passenger vehicles",
      description: "Shaping the future of sustainable mobility.",
      image: <img src={Car3} alt="" className="w-[80%] h-auto object-contain"/>,
    },
    {
      category: "Electric vehicles",
      description: "Shaping the future of sustainable mobility.",
      image: <img src={Car4} alt="" className="w-[80%] h-auto object-contain"/>,
    },
    {
      category: "Passenger vehicles",
      description: "Shaping the future of sustainable mobility.",
      image: <img src={Car5} alt="" className="w-[80%] h-auto object-contain"/>,
    },
    {
      category: "Passenger vehicles",
      description: "Shaping the future of sustainable mobility.",
      image:<img src={Car6} alt="" className="w-[80%] h-auto object-contain"/>,
    },
  ], []);

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1000;
  
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
  
      // Check if we're within the cooldown period
      if (now - lastScrollTime < scrollCooldown) {
        return;
      }
      
      lastScrollTime = now;
      
      // Determine scroll direction
      const scrollingDown = e.deltaY > 0;
      
      if (scrollingDown) {
        // Handle scrolling down
        if (currentSlide === slides.length - 1) {
          // At last slide, exit slideshow
          setHasFinishedSlides(true);
          document.body.style.overflow = 'auto';
          window.removeEventListener('wheel', handleScroll);
        } else {
          // Move to next slide
          setCurrentSlide(currentSlide + 1);
        }
      } else {
        // Handle scrolling up
        if (currentSlide === 0) {
          // At first slide, go to last slide
          setCurrentSlide(slides.length - 1);
        } else {
          // Move to previous slide
          setCurrentSlide(currentSlide - 1);
        }
      }
    };
  
    if (!hasFinishedSlides) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleScroll, { passive: false });
    }
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide, slides.length, hasFinishedSlides]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px]">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Supreme Group" className="h-[40px]" />
          </div>
          <div className="rounded-md mt-2 flex items-center gap-4">

            <a href="#contact"
              className="flex justify-center items-center h-[50px] px-[30px] border border-[#00BFFF] text-base font-medium rounded-full text-black bg-[#5CD6FF] md:text-lg"
            >
              Contact Us
            </a>
            <img src={Linkedin} alt="Linkedin" className="h-6 w-66" />
            <img src={translator} alt="Translator" className="h-5 w-13" />
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 ">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
    

      <section className={`${hasFinishedSlides ? 'relative' : 'fixed'} w-full z-20 pt-20 h-[925px]`}>
        <div className="bg-black/60 py-20 h-full">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-full flex items-center justify-center">
            <div className="align-middle text-center">
              <p className="font-manrope font-normal text-[22px] leading-[100%] tracking-[0%] text-center text-white">
                Performance in motion
              </p>
              <h1 className="font-manrope font-semibold text-[48px] leading-[58px] tracking-[-0.5px] text-center text-white">
                Soft Trims and NVH Solutions
              </h1>
              <span className="font-manrope font-light text-[48px] leading-[58px] tracking-[-0.5px] text-center text-white">
                for Seamless rides
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${hasFinishedSlides ? 'relative' : 'fixed'} inset-0 z-10 h-[1020px]`}>
        <div
          className={"bg-black w-full h-full flex items-center justify-between px-20 transition-all duration-700 ease-in-out relative"}
        >
          <div className="w-1/2 text-white">
            <div className="mb-20">
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                Evolving the drive with <span className="font-semibold">360-degree</span>
                <br />
                nonwoven solutions
              </h1>
            </div>

            <div className="border-l-2 border-white/30 pl-6">
              <h3 className="text-2xl font-semibold mb-2">{slides[currentSlide].category}</h3>
              <p className="text-white/70">{slides[currentSlide].description}</p>
            </div>
          </div>

          <div className="w-1/2 flex justify-end items-center">
            {/* <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].category}
              className="w-[80%] h-auto object-contain"
            /> */}
            {slides[currentSlide].image}
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center text-white/60 text-sm">
            {currentSlide === slides.length - 1 ? (
              <p>Scroll down to continue</p>
            ) : (
              <>
                <p>Scroll down for next slide</p>
                <p className="text-xs">(Slide {currentSlide + 1} of {slides.length})</p>
              </>
            )}
          </div>
        </div>
      </section>

      {hasFinishedSlides && (
        <div className="relative z-30">
          <section className="bg-[#0066CC] py-20">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="text-white">
                  <p className="font-manrope font-semibold text-[48px] leading-[38px] tracking-[0] text-white mb-8">
                    Get in touch
                  </p>
                  <p className="text-xl mb-12">For general enquiries</p>

                  <div className="space-y-8">
                    <div>
                      <p className="font-medium mb-2">Address :</p>
                      <p>110, 16th Road, Chembur, Mumbai – 400071</p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Phone :</p>
                      <p>+91 22 25208822</p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Email :</p>
                      <p>info@supremegroup.co.in</p>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white pb-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white pb-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white pb-2 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white pb-2 focus:outline-none focus:border-white resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-white text-[#0066CC] px-12 py-3 rounded-full transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#F5F2F2]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
              <div className="py-16">
                <img
                  src={Logo}
                  alt="Supreme Group"
                  className="h-[40px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 pb-16">
                <div>
                  <h3 className="text-[#1E1E1E] text-sm font-bold tracking-[0.1em] mb-6">APPLICATIONS</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-[#666666]  text-base">Apparel</a></li>
                    <li><a href="#" className="text-[#666666]  text-base">Automotive</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Filtration</a></li>
                    <li><a href="#" className="text-[#666666]  text-base">Customised Solutions</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#1E1E1E] text-sm font-bold tracking-[0.1em] mb-6">COMPANY</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-[#666666] text-base">Innovation</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Global Competency</a></li>
                    <li><a href="#" className="text-[#666666] text-base">About Us</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Contact Us</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#1E1E1E] text-sm font-bold tracking-[0.1em] mb-6">MORE</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-[#666666] text-base">Careers</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Privacy Policy</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Terms and Conditions</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#1E1E1E] text-sm font-bold tracking-[0.1em] mb-6">FOLLOW US</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-[#666666] text-base">Twitter</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Linkedin</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Instagram</a></li>
                    <li><a href="#" className="text-[#666666] text-base">Medium</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-[#666666] text-sm mb-4 md:mb-0">
                    ©2023. All Rights Reserved.
                  </p>
                  <p className="text-[#666666] text-sm">
                    Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;