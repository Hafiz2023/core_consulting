
import Image from 'next/image';
import { Metadata } from 'next';


const logos = {
  continuityResilience: '/Images/CLDigital-White-Background-1-scaled-e1631194943923-1-300x74.jpg',
  bciMiddleEast: '/Images/Emreach.jpg',
  bciIndiaSouthAsia: '/Images/GCAS_logo_OG_tcm20-12228-e1608469726727-300x167.jpg',
  indianAchievers: '/Images/Inoni.jpg',

  exemplarGlobal: '/Images/images1/1-pecb-authorized-partner-120x120.png',
  pecbAuthorized: '/Images/images1/Exemplar_Global_Black.jpg',
  fqa: '/Images/images1/FQA-Logo-e1614658252340.jpg',
  certificationLogo: '/Images/CLDigital-White-Background-1-scaled-e1631194943923-1-300x74.jpg', // آخری سرٹیفیکیشن لوگو
};

export const metadata: Metadata = {
  title: 'Continuity & Resilience - Advanced',
  description: 'Advanced, responsive, and effective website clone with hover effects.',
};

export default function CoreonlineCertifications() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 border-b border-gray-200 shadow-sm">
        {/* Awards Section */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4 md:mb-0">
          <Image src={logos.continuityResilience} alt="Continuity & Resilience" width={80} height={80} className="object-contain" />
          <div className="flex items-center space-x-2">
            <Image src={logos.bciMiddleEast} alt="BCI Middle East Awards" width={100} height={30} className="object-contain" />
            <span className="text-xs font-semibold text-gray-700">WINNER</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={logos.bciIndiaSouthAsia} alt="BCI India & South Asia Awards" width={100} height={30} className="object-contain" />
            <span className="text-xs font-semibold text-gray-700">WINNER</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={logos.indianAchievers} alt="Indian Achievers Awards" width={100} height={30} className="object-contain" />
            <span className="text-xs font-semibold text-gray-700">INDIA</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p className="font-bold text-gray-900">Pakistan</p>
          <p>Tel: 0339 4078880</p>
          <p>Whatsapp: 0320 4338215</p>
          <a href="https://www.continuityandresilience.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">www.continuityandresilience.com</a>
          <div className="pt-2">
            <p className="font-bold text-gray-900">UAE</p>
            <p>Tel: +971 2 6594006</p>
            <p>Whatsapp: +971 50 5767804</p>
            <a href="https://www.coreconsulting.ae" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">www.coreconsulting.ae</a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-700 text-white p-3 flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base font-semibold shadow-md">
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">CORE SERVICES </a>
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">TRAINING CALENDAR</a>
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">IT COURSES</a>
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">OUR TRAINERS</a>
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">ABOUT US</a>
        <a href="#" className="py-1 px-3 hover:bg-red-800 rounded transition-colors duration-200">TESTIMONIALS</a>
      </nav>

      {/* Partners Sections */}
      <main className="p-8 max-w-7xl mx-auto">
        {/* BCM & IT DR Solutions Partners Section */}
        <section className="mb-12">
          <div className="bg-blue-600 text-white text-center py-3 mb-8 text-lg font-medium rounded-md shadow-inner">
            BCM & IT DR Solutions Partners
          </div>
         
        </section>

        {/* Certification Partners Section */}
        <section>
          <div className="bg-blue-600 text-white text-center py-3 mb-8 text-lg font-medium rounded-md shadow-inner">
            Certification Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <Image src={logos.exemplarGlobal} alt="Exemplar Global" width={120} height={50} className="object-contain hover:scale-105 transition-transform duration-200" />
            <Image src={logos.pecbAuthorized} alt="PECB Authorized" width={120} height={50} className="object-contain hover:scale-105 transition-transform duration-200" />
            <Image src={logos.fqa} alt="FQA" width={120} height={50} className="object-contain hover:scale-105 transition-transform duration-200" />
            <Image src={logos.certificationLogo} alt="Certification Logo" width={120} height={50} className="object-contain hover:scale-105 transition-transform duration-200" />
          </div>
        </section>
      </main>

      {/* Floating Buttons (Right side) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-50">
        <button className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500">📞</button>
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">💬</button> {/* WhatsApp */}
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">🗓️</button> {/* Meetings */}
      </div>
    </div>
  );
}
