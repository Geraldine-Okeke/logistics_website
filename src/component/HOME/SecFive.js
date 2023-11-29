import { useState } from "react";
import img from './images/secfive.png'
const AccordionItem = ({ question, answer, isExpanded, toggleAccordion }) => {
  return (
    <div className="flex flex-row bg-gray-200 w-full mt-10 ">
      <span className="w-4/5 text-2xl font-bold py-4" onClick={toggleAccordion}>
        {question}
        {isExpanded && <p className="text-lg  font-semibold leading-10 mt-2">{answer}</p>}
      </span>
      <div
        className="bg-blue-800 px-6 py-4 font-bold text-2xl cursor-pointer"
        onClick={toggleAccordion}
      >
        {isExpanded ? "-" : "+"}
      </div>
    </div>
  );
};

export default function SecFive() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleAccordion1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleAccordion2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleAccordion3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-10 mt-20 ">
        <h1 className="font-bold text-4xl text-blue-800">OLEM LOGISTICS Equals best-in-class support</h1>
        <span className="font-semibold text-xl w-full md:w-3/4  ">Here at Olem Logistics, we pride ourselves on our best-in-class customer support. 
          That’s why we have built our website with thorough guides, quality FAQ content, a live chat feature and more, so all the information you need is right here.</span>
        <div className="flex flex-row w-full gap-6 ">
          <div className="flex flex-col w-full  md:w-3/5 ">
            <h1 className="font-semibold text-blue- text-4xl">FAQ</h1>
            <AccordionItem
              question="When will my package arrive?"
              answer="There are several ways to check the status of your shipment: Use your shipment tracking number, 
              to track your package. When you track your package, you’ll see where your shipment is currently is. 
              If you don’t see an estimated delivery time window, that information may not be available for that 
              particular package. Call +1 317 529-3123 for USA support and +234 123 123 0000."
              isExpanded={isExpanded1}
              toggleAccordion={toggleAccordion1}
            />
            <AccordionItem
              question="How to track a package"
              answer="Once you type your parcels’ tracking numbers in our search bar, our system searches for them
               on the websites of hundreds of shipping companies worldwide. The search takes at most a few seconds.
               Our system presents the results to you
               in a way that’s clear and easy to understand, so you can know at once the status of each package."
              isExpanded={isExpanded2}
              toggleAccordion={toggleAccordion2}
            />
            <AccordionItem
              question='Shipping Terms and Definitions'
              answer='Drop Location: This is the Oltem Logistics Warehouse/Depot location where the customer comes to drop the item to be shipped.

              Drops First Name: It is the first name of the individual who will be responsible for dropping the parcel/shipment at the Oltem Warehouse/Depot.
              
              Drops Last Name: It is the last name of the individual who will be responsible for dropping the parcel/shipment at the Oltem Warehouse/Depot.
              
              Pickup Location: This is the location where the customer comes to pick up the item that was shipped.
              
              Pick-Up First Name: It is the first name of the individual who will be responsible for picking up the parcel/shipment at the Oltem Warehouse/Depot.
              
              Pick-Up Last Name: It is the last name of the individual who will be responsible for picking up the parcel/shipment at the Oltem Warehouse/Depot.
              
              Goods Description: A detailed description of the goods being shipped. This includes information about the type of goods, quantity, weight, dimensions, and any other relevant characteristics that are essential for proper handling and delivery.
              
              Important Note: Any special instructions, specific requirements, or critical information related to the shipment that you want us to be aware of during the transportation process. This may include information about hazardous materials, fragile items, temperature-sensitive goods, or specific delivery preferences.'
              isExpanded={isExpanded3}
              toggleAccordion={toggleAccordion3}
           />
          </div>
          <div className="hidden sm:hidden md:hidden lg:flex xl:flex w-2/5 ">
            <img className="w-full h-96" src={img} alt='img' />
          </div>

        </div>
      </div>
    </>
  );
}
