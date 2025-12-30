import React from 'react'

const ApplicationStatus = () => {
    const applications = [
        {
            id: 1,
            apartmentName: "Skyline Modern Apartment",
            dateSubmitted: "Dec 8, 2025",
            status: "under_review", 
            progress: 65,
            progressLabel: "Background Check in Progress"
        },
        {
            id: 2,
            apartmentName: "Skyline Modern Apartment",
            dateSubmitted: "Dec 8, 2025",
            status: "approved",
            progress: 100,
            progressLabel: "Ready To Rent"
        },
        {
            id: 3,
            apartmentName: "Skyline Modern Apartment",
            dateSubmitted: "Dec 8, 2025",
            status: "pending_documents",
            progress: 30,
            progressLabel: "Upload Proof of Income"
        }
    ];

    const statusStyles = {
        under_review: "bg-[#F0B100]",
        approved: "bg-[#00C951]",
        pending_documents: "bg-[#FE7B20]",
    };

    const statusLabels = {
        under_review: "Under Review",
        approved: "Approved",
        pending_documents: "Pending Documents",
    };

  return (
    <div className="p-8 bg-white rounded-2xl">
      <h1 className="text-xl font-semibold mb-6 md:text-start text-center">Application Status</h1>

      <div className="flex flex-col gap-4">
        {applications.map((app) => (
            <div key={app.id} className="border border-blue-200 rounded-xl p-5 bg-blue-50">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-3">
                <div>
                    <h2 className="font-medium text-gray-900">
                    {app.apartmentName}
                    </h2>
                    <p className="text-sm text-gray-500">
                    Submitted {app.dateSubmitted}
                    </p>
                </div>

                <span
                    className={`px-5 py-3 rounded-full text-xs font-medium text-white ${statusStyles[app.status]}`}
                >
                    {statusLabels[app.status]}
                </span>
                </div>

                {/* Progress */}
                <p className="text-sm text-gray-600 mb-2">Progress</p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-purple-600 rounded-full transition-all" style={{ width: `${app.progress}%` }} />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 bg-[#2563EB] rounded-full"></span>
                    <span>{app.progressLabel}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ApplicationStatus
