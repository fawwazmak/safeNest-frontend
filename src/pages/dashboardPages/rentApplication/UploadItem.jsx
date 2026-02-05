import { MdOutlineFileUpload } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useRef, useState } from "react";
// import toast from "react-hot-toast";


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const UploadItem = ({ label, required, onFileChange, error }) => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleClick = () => {
    fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // ❌ File type validation
        if (!ALLOWED_TYPES.includes(file.type)) {
        alert("Only PDF, JPG, or PNG files are allowed.");
        return;
        }

        // ❌ File size validation
        if (file.size > MAX_FILE_SIZE) {
        alert("File size must not exceed 10MB.");
        return;
        }

        setFileName(file.name);
        onFileChange(file);
    };

    return (
        <div className="flex flex-col gap-1">
        <div className={`flex items-center justify-between border rounded-3xl px-6 py-4 ${error ? "border-red-500" : ""}`}>
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <IoDocumentTextOutline size={28} className="text-gray-500" />
                </div>

                <div className="flex flex-col">
                    <span className="text-sm font-light">{label}</span>
                    {fileName && (
                    <span className="text-xs text-green-600 truncate max-w-[180px]">
                        {fileName}
                    </span>
                    )}
                </div>

                {required && (
                    <span className="text-sm px-6 py-2 rounded-full bg-red-100 text-red-400 border-2 border-red-400">
                    Required
                    </span>
                )}
            </div>

            <button type="button" onClick={handleClick} className="flex cursor-pointer items-center gap-2 border px-4 py-1.5 rounded-lg text-sm">
                <MdOutlineFileUpload size={16} />
                Upload
            </button>

            {/* Hidden input */}
            <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
        </div>

        {error && (
            <p className="text-xs text-red-500 ml-4">
            This document is required
            </p>
        )}
        </div>
    );
};

export default UploadItem;
