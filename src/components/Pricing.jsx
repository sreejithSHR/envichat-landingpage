import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Envichat"
          title="Choose your pricing plan"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
    // <div className="py-12 bg-black-100 min-h-screen" id="pricing">
    //   <nav className="text-center py-8">
    //     <h1 className="text-4xl font-bold">Choose Your Pricing Plan</h1>
    //   </nav>

    //   <div className="flex flex-wrap justify-center">
    //     <div className="max-w-xs m-4 p-8 bg-white shadow-lg rounded-xl relative overflow-hidden">
    //       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-1">
    //         <div className="absolute inset-0 bg-white rounded-xl p-6">
    //           <h1 className="text-5xl font-bold text-center mb-2">Free</h1>
    //           <h3 className="text-sm font-light text-center mb-8">per month</h3>
    //           <h2 className="text-2xl font-semibold text-center mb-4">Free Plan</h2>
    //           <p className="text-gray-700 text-center mb-6">
    //             <span>&#10003;</span> Unlimited Access<br />
    //             <span>&#10003;</span> 20 Chats/Month<br />
    //             <span>&#10003;</span> 1 User/Seat
    //           </p>
    //           <a href="#" className="block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Start Free Trial</a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="max-w-xs m-4 p-8 bg-white shadow-lg rounded-xl relative overflow-hidden">
    //       <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-1">
    //         <div className="absolute inset-0 bg-white rounded-xl p-6">
    //           <h1 className="text-5xl font-bold text-center mb-2"><span>&#x20B9;</span>399</h1>
    //           <h3 className="text-sm font-light text-center mb-8">per month</h3>
    //           <h2 className="text-2xl font-semibold text-center mb-4">Starter Plan</h2>
    //           <p className="text-gray-700 text-center mb-6">
    //             <span>&#10003;</span> 300 Chats/Month<br />
    //             <span>&#10003;</span> 2 Users/Seats<br />
    //             <span>&#10003;</span> Website Integration
    //           </p>
    //           <a href="#" className="block text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Start Now</a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="max-w-xs m-4 p-8 bg-white shadow-lg rounded-xl relative overflow-hidden">
    //       <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-1">
    //         <div className="absolute inset-0 bg-white rounded-xl p-6">
    //           <h1 className="text-5xl font-bold text-center mb-2"><span>&#x20B9;</span>899</h1>
    //           <h3 className="text-sm font-light text-center mb-8">per month</h3>
    //           <h2 className="text-2xl font-semibold text-center mb-4">Pro Plan</h2>
    //           <p className="text-gray-700 text-center mb-6">
    //             <span>&#10003;</span> 1500 Chats/Month<br />
    //             <span>&#10003;</span> 4 Users/Seats<br />
    //             <span>&#10003;</span> Whatsapp Integration
    //           </p>
    //           <a href="#" className="block text-center bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">Start Now</a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="max-w-xs m-4 p-8 bg-white shadow-lg rounded-xl relative overflow-hidden">
    //       <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-1">
    //         <div className="absolute inset-0 bg-white rounded-xl p-6">
    //           <h1 className="text-5xl font-bold text-center mb-2"><span>&#x20B9;</span>1499</h1>
    //           <h3 className="text-sm font-light text-center mb-8">per month</h3>
    //           <h2 className="text-2xl font-semibold text-center mb-4">Unlimited Plan</h2>
    //           <p className="text-gray-700 text-center mb-6">
    //             <span>&#10003;</span> Unlimited Chats<br />
    //             <span>&#10003;</span> 6 Users/Seats<br />
    //             <span>&#10003;</span> Advanced Security
    //           </p>
    //           <a href="#" className="block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Start Now</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Pricing;
