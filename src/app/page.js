import Image from "next/image";
import NavbarUniversal from "./components/NavbarUniversal";
import Stats from "./components/Stats";
import HorizontalCard from "./components/HorizontalCard";
import { Mail, Phone, MapPin } from "lucide-react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Home page
export default function Home() {
  const specs = [
    {
      title: "Origin",
      description: "Designed by Good Goods, Inc.",
    },
    {
      title: "Material",
      description: "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
    },
    {
      title: "Dimensions",
      description: '15" x 3.75" x .75"',
    },
    {
      title: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    {
      title: "Includes",
      description: "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
    },
    {
      title: "Considerations",
      description: "Made from natural materials. Grain and color vary with each item.",
    },
  ];

  return (
    <div>
      <NavbarUniversal />
      <div id="intro" className="mx-48 mt-10 flex justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">The easiest way to create online polls and get paid for answering them</h1>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className="flex mt-16 gap-4">
            <button className="py-1 px-4 bg-slate-500 hover:bg-slate-600 transition-all duration-200 ease-in-out rounded-sm text-white focus:ring-0">For Creators</button>
            <button className="py-1 px-4 bg-slate-500 hover:bg-slate-600 transition-all duration-200 ease-in-out rounded-sm text-white focus:ring-0">For Participants</button>
          </div>
        </div>
        <div className="px-auto w-1/3"><Image src="/simplistic-woman-answering-questionnaire.png"
          width={500}
          height={500}
          alt="woman answering questionnaire" /></div>
      </div>
      <Stats />
      <div className="bg-gray-900 px-48 mt-20">
        <h1 className="text-4xl font-bold text-white text-center py-10">For Poll Creators</h1>
        <div className="flex gap-0">
          <div className="max-w-2xl w-full space-y-8">
            {[
              { icon: Mail, title: "Email", description: "contact@example.com contact@example.com contact@example.com contact@example.com" },
              { icon: MapPin, title: "Address", description: "123 Main St, Anytown, USA 12345 123 Main St, Anytown, USA 12345123 Main St, Anytown, USA 12345123 Main St, Anytown, USA 12345" },
            ].map((card, index) => (
              <HorizontalCard key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
          <div className="pt-4">
            <Image src="/tree.png"
              alt="nothing"
              height={1076 / 2}
              width={522 / 2} />
          </div>
          <div className="max-w-2xl w-full space-y-11">
            {[
              { icon: Mail, title: "Email", description: "contact@example.com contact@example.com contact@example.com contact@example.com" },
              { icon: MapPin, title: "Address", description: "123 Main St, Anytown, USA 12345 123 Main St, Anytown, USA 12345 123 Main St, Anytown, USA 12345123 Main St, Anytown, USA 12345123 Main St, Anytown, USA 12345" },
            ].map((card, index) => (
              <HorizontalCard key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-12%2017-52-08-iy0hbuxAltZXoEUj5yKtkwoMuvLvmr.png"
              alt="Desk organization system showing coffee mug, pen holders, and phone stand"
              className="w-full h-auto rounded-lg mb-8"
            />

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Technical Specifications</h2>

            <p className="text-center text-gray-600 mb-12">
              Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
              meticulously arrange items into dedicated trays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {specs.map((spec, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{spec.title}</h3>
                  <p className="text-sm text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>);
}
