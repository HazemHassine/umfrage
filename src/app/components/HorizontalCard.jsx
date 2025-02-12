import { forwardRef } from "react"

const HorizontalCard = forwardRef(({ icon: Icon, title, description }, ref) => {
  return (
    <div ref={ref} className="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
      <div className="flex-shrink-0 mr-6">
        <div className="p-3 bg-white/20 rounded-full">
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
})

HorizontalCard.displayName = "HorizontalCard"

export default HorizontalCard

