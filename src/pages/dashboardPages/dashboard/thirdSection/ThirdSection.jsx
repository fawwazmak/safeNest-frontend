import RecentMessages from "./RecentMessages"
import SearchAlerts from "./SearchAlerts"

const ThirdSection = () => {
  return (
    <div className="flex md:flex-row md:gap-8 flex-col p-8 bg-[#f9fafb]">
      <RecentMessages />
      <SearchAlerts />
    </div>
  )
}

export default ThirdSection
