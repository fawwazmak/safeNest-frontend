import { FaRegUser } from "react-icons/fa6";


const PersonalInfoForm = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm font-[Inter] mb-4">
      <div className="flex md:flex-row flex-col items-center gap-2 mb-6">
        <div className="w-16 h-16 rounded-3xl text-white flex items-center justify-center bg-purple-600">
          <FaRegUser className="text-2xl" />
        </div>

        <div>
          <h3 className=" md:text-2xl text-lg md:text-start text-center">Personal Information</h3>
          <p className="text-sm text-gray-500 mt-2">
            Please provide your basic information
          </p>
        </div>
      </div>

      <form >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email Address" />
          <Input label="Phone Number" />
          <Input label="Date of Birth" />
          <Input label="NIN" />
        </div>

        <div className="h-px w-full bg-gray-400 my-4"></div>
        
        <div className="col-span-full flex justify-end gap-4 mt-6">
          <button className="text-md font-normal  cursor-pointer ">
            Save as Draft
          </button>
          <button className="bg-purple-600 text-white px-12 py-6 rounded-3xl text-md cursor-pointer">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label }) {
  return (
    <div className="mb-6 font-[Inter]">
      <label className="text-sm mb-3 inline-block">{label} *</label>

      <div className="mt-1 rounded-lg bg-[#E2E8F0]">
        <input required type="text" className="w-full px-3 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl"  placeholder={`Enter your ${label.toLowerCase()}`} />
      </div>
    </div>
  );
}
export default PersonalInfoForm;
