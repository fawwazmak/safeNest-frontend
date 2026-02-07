import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import UploadItem from "./UploadItem";


const RequiredDocument = () => {
    const [files, setFiles] = useState({
        id: null,
        income: null,
        bank: null,
    });

    const [errors, setErrors] = useState({});
    const isFormValid = files.id && files.income && files.bank;

    const handleSubmit = () => {
    if (!isFormValid) {
      setErrors({
        id: !files.id,
        income: !files.income,
        bank: !files.bank,
      });

      toast.error("Please upload all required documents");
      return;
    }

    toast.success("Documents validated successfully 🎉");

    console.log("Uploaded files:", files);
  };


  return (
    <div className='font-[Inter] bg-white rounded-2xl shadow-lg p-8'>
        <div className="flex md:flex-row flex-col items-center gap-2 mb-6">
            <div className="w-16 h-16 rounded-3xl text-white flex items-center justify-center bg-purple-600">
                <FaRegUser className="text-2xl" />
            </div>

            <div>
                <h3 className=" md:text-2xl text-lg md:text-start text-center">Required Document</h3>
                <p className="text-sm text-gray-500 mt-2">Upload necessary documents for your application</p>
            </div>
        </div>

        <div className="bg-[#DBEAFE] p-4 rounded-4xl mb-4">
            <p className="text-lg">Document Guidelines</p>
            <p className="font-light">All documents should be in PDF, JPG, or PNG format. Maximum file size is 10MB per document. Ensure all information is clearly visible.</p>
        </div>

        {/* Upload Items */}
        <div className="space-y-4">
            <UploadItem
                label="Government-issued ID"
                required
                error={errors.id}
                onFileChange={(file) =>
                setFiles((prev) => ({ ...prev, id: file }))
                }
            />

            <UploadItem
                label="Proof of Income (Last 3 Months)"
                required
                error={errors.income}
                onFileChange={(file) =>
                setFiles((prev) => ({ ...prev, income: file }))
                }
            />

            <UploadItem
                label="Bank Statements (Last 2 Months)"
                required
                error={errors.bank}
                onFileChange={(file) =>
                setFiles((prev) => ({ ...prev, bank: file }))
                }
            />

            {/* ✅ OPTIONAL DOCUMENT */}
            <UploadItem
                label="Additional Supporting Document"
                onFileChange={(file) =>
                setFiles((prev) => ({ ...prev, additional: file }))
                }
            />
        </div>

        <div className="border mt-4 p-4 rounded-lg">
            <p>Additional Information</p>

            <div>
                <label htmlFor="applicants" className="font-semibold">Number of Applicants(Including Yourself)</label>
                <input type="number" className="inline-block w-full py-2 px-4 border rounded-3xl mt-1" />
            </div>

            <div className="mt-4">
                <p className="font-semibold">Do you have any pets? *</p>
                <div className="flex gap-4">
                    <input type="radio" name="pet" id="pet-yes" className="hidden peer/petYes" />
                    <label
                    htmlFor="pet-yes"
                    className="cursor-pointer px-4 py-2 rounded-2xl text-gray-700 font-medium
                                peer-checked/petYes:text-white peer-checked/petYes:bg-[#9714FA]"
                    >
                    Yes
                    </label>

                    <input type="radio" name="pet" id="pet-no" className="hidden peer/petNo" required />
                    <label
                    htmlFor="pet-no"
                    className="cursor-pointer px-4 py-2 rounded-2xl text-gray-700 font-medium
                                peer-checked/petNo:text-white peer-checked/petNo:bg-[#9714FA]"
                    >
                    No
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <p className="font-semibold">Do you have a vehicle?</p>
                <div className="flex gap-4">
                    <input type="radio" name="vehicle" id="vehicle-yes" className="hidden peer/vehicleYes" />
                    <label htmlFor="vehicle-yes" className="cursor-pointer px-4 py-2 rounded-2xl text-gray-700 font-medium
                                peer-checked/vehicleYes:text-white peer-checked/vehicleYes:bg-[#9714FA]"
                    >
                    Yes
                    </label>

                    <input type="radio" name="vehicle" id="vehicle-no" className="hidden peer/vehicleNo" />
                    <label
                    htmlFor="vehicle-no"
                    className="cursor-pointer px-4 py-2 rounded-2xl text-gray-700 font-medium
                                peer-checked/vehicleNo:text-white peer-checked/vehicleNo:bg-[#9714FA]"
                    >
                    No
                    </label>
                </div>
            </div>

        </div>


        <div className="flex items-center justify-between mt-6">
            <button className="cursor-pointer border py-3 px-8 rounded-3xl">Previous</button>

            <div className="flex items-center gap-4">
                <button className="cursor-pointer">Save As Draft</button>

                <button onClick={handleSubmit} disabled={!isFormValid} className={` px-8 py-4 rounded-lg text-white transition ${isFormValid? "bg-purple-600 hover:bg-purple-700" : "bg-gray-300 cursor-not-allowed"}`}>
                    Continue
                </button>
            </div>
        </div>
    </div>
  )
}

export default RequiredDocument
