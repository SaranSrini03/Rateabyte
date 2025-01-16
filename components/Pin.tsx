import Image from 'next/image'
import { Heart, MessageCircle, Upload } from 'lucide-react'

interface PinProps {
  imageUrl: string
  title: string
  aspectRatio?: string
}

export function Pin({ imageUrl, title, aspectRatio = "4/5" }: PinProps) {
  return (
    <div className=" overflow-hidden  hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className=" relative group" style={{ aspectRatio }}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button className="p-2 bg-orange-600 rounded-full text-white hover:bg-orange-700 transition-colors duration-200">
              <Heart size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-orange-600 hover:bg-orange-100 transition-colors duration-200">
              <MessageCircle size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-orange-600 hover:bg-orange-100 transition-colors duration-200">
              <Upload size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">

        <h3 className="font-semibold text-lg mb-2 truncate text-white">{title}</h3>
      </div>

    </div>
  )
}

