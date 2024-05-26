import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  // <Section className="overflow-hidden" id="roadmap">
  //   <div className="container md:pb-10">
  //     <Heading tag="Ready to get started" title="What we’re working on" />

  //     <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
  //       {roadmap.map((item) => {
  //         const status = item.status === "done" ? "Done" : "In progress";

  //         return (
  //           <div
  //             className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
  //               item.colorful ? "bg-conic-gradient" : "bg-n-6"
  //             }`}
  //             key={item.id}
  //           >
  //             <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
  //               <div className="absolute top-0 left-0 max-w-full">
  //                 <img
  //                   className="w-full"
  //                   src={grid}
  //                   width={550}
  //                   height={550}
  //                   alt="Grid"
  //                 />
  //               </div>
  //               <div className="relative z-1">
  //                 <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
  //                   <Tagline>{item.date}</Tagline>

  //                   <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
  //                     <img
  //                       className="mr-2.5"
  //                       src={item.status === "done" ? check2 : loading1}
  //                       width={16}
  //                       height={16}
  //                       alt={status}
  //                     />
  //                     <div className="tagline">{status}</div>
  //                   </div>
  //                 </div>

  //                 <div className="mb-10 -my-10 -mx-15">
  //                   <img
  //                     className="w-full"
  //                     src={item.imageUrl}
  //                     width={628}
  //                     height={426}
  //                     alt={item.title}
  //                   />
  //                 </div>
  //                 <h4 className="h4 mb-4">{item.title}</h4>
  //                 <p className="body-2 text-n-4">{item.text}</p>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}

  //       <Gradient />
  //     </div>

  //     <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
  //       <Button href="/roadmap">Our roadmap</Button>
  //     </div>
  //   </div>
  // </Section>
  <section id="contact" className="py-12 bg-black-100 overflow-hidden">
  <h1 className="text-4xl font text-center mb-8">Contact</h1>

  <div className="mt-8 text-center">
      <p className="text-gray-700 mb-4">
        For registration questions please get in touch using the contact details below.
      </p>
      <ul className="mb-4">
        {/* <li className="mb-2"><i className="fa fa-phone"></i> <a href="tel:9999999999" className="text-indigo-500">987654321</a></li> */}
        <li className="mb-2"><i className="fa fa-envelope"></i> <a href="mailto:@envidoxsolutions.com" className="text-indigo-500">contact@envidoxsolutions.com</a></li>
      </ul>
      
    </div>
  
  <div className="max-w-4xl mx-auto px-4">
    <form id="contact-form" className=" p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <input 
          type="text" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" 
          id="name" 
          placeholder="NAME" 
          name="name" 
          required 
        />
      </div>
      <div className="mb-4">
        <input 
          type="email" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" 
          id="email" 
          placeholder="EMAIL" 
          name="email" 
          required 
        />
      </div>
      <div className="mb-4">
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" 
          rows="10" 
          placeholder="MESSAGE" 
          name="message" 
          required 
        />
      </div>
      <button 
        className="w-full p-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-900 transition duration-300" 
        id="submit" 
        type="submit" 
        value="SEND"
      >
        SEND
      </button>
    </form>
    
    
  </div>
</section>
);

export default Roadmap;
