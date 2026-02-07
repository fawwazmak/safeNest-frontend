import PropertyDetails from "./PropertyDetails";
import ApplicationStepper from "./ApplicationStepper";
import PersonalInfoForm from "./PersonalInfoForm";
import RequiredDocument from "./RequiredDocument";


const RentApplication = () => {
  return (
    <div className="p-6">
      <PropertyDetails />
      <ApplicationStepper />
      <PersonalInfoForm />
      <ApplicationStepper />
      <RequiredDocument />
    </div>
  )
}

export default RentApplication
