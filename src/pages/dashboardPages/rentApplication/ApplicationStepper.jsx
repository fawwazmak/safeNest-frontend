const ApplicationStepper = () => {
  const steps = ["Personal", "Address", "Employment", "Documents"];
  const currentStep = 0;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 font-[Inter]">
      <div className="relative flex flex-wrap items-center justify-between">
        
        {/* BACK LINE */}
        <div className="absolute left-0 right-0 top-1/3 h-0.5 bg-gray-200 min-[340px]:block hidden" />

        {steps.map((step, index) => (
          <div key={step} className="relative z-10 flex-1 flex flex-col items-center">
            {/* STEP CIRCLE */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold ${index <= currentStep? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>{index + 1}
            </div>

            {/* STEP LABEL */}
            <span className="text-xs mt-2 text-gray-600">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStepper;
