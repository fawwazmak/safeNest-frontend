import apartment from "/aprtImg.png";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiShowerLight } from "react-icons/pi";
import { TbSquare } from "react-icons/tb";
import { IoCalendarClearOutline } from "react-icons/io5";

const PropertyCard = () => {
    const property = {
      name: "Skyline Modern Apartment",
      apartmentImage: apartment,
      location: "Alagbado",
      beds: 3,
      baths: 3,
      size: 4200,
      rent: 320000,
      paymentType: "Month",
      deposit: 640000,
      avalability: "January 1, 2025"
    };


  return (
    <div className="bg-white rounded-2xl shadow-lg flex md:flex-row flex-col md:gap-x-8 md:gap-y-0 gap-y-4 justify-between p-8 mb-6 font-[Inter]">
      <img src={property.apartmentImage} alt="Apartment" className=" rounded-lg object-cover block " />

      <div className="flex-3 flex flex-col md:gap-y-0 gap-y-4 justify-between">
        <h2 className="font-medium text-2xl md:text-start text-center">{property.name}</h2>

        {/* location details  */}
        <div className="flex items-center text-xl font-light mt-1">
          <CiLocationOn className="" />
          <p className="text-sm text-gray-500">{property.location}</p>
        </div>

        {/* bed - bath - sqft details  */}
        <div className="flex flex-wrap gap-6 md:justify-baseline justify-between text-sm mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <IoBedOutline className="" />{property.beds} Beds
          </div>
          <div className="flex items-center gap-1">
            <PiShowerLight className="" />{property.baths} Baths
          </div>
          <div className="flex items-center gap-1">
            <TbSquare className="" />{property.size.toLocaleString()} sqft
          </div>
        </div>

        {/* rent and deposit details  */}
        <div className="flex flex-wrap md:justify-baseline justify-between gap-6 text-sm mt-2">
          <span className="">Rent: ₦{property.rent.toLocaleString()}/{property.paymentType}</span>
          <span className="text-gray-500">Deposit: ₦{property.deposit.toLocaleString()}</span>
        </div>

        {/* Availability details  */ }
        <div className="flex items-center gap-1 mt-4 text-sm text-gray-600 md:justify-baseline justify-center">
          <IoCalendarClearOutline className="text-2xl" />
          <p>Available: <span>{property.avalability}</span></p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;