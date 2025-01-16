import { Pin } from './Pin'

const pins = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Serene Mountain Lake', aspectRatio: '4/5' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe', title: 'Delicious Pancakes', aspectRatio: '3/4' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba', title: 'Curious Cat', aspectRatio: '1/1' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', title: 'Fashion Model in Yellow', aspectRatio: '2/3' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace', title: 'Modern Living Room', aspectRatio: '3/4' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', title: 'Scenic Mountain Road', aspectRatio: '4/5' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', title: 'Colorful Food Plate', aspectRatio: '1/1' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987', title: 'Cozy Winter Outfit', aspectRatio: '2/3' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6', title: 'Potted Plant on Table', aspectRatio: '3/4' },
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', title: 'Sunset over the Ocean', aspectRatio: '4/5' },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pins.map((pin) => (
            <Pin key={pin.id} imageUrl={pin.imageUrl} title={pin.title} aspectRatio={pin.aspectRatio} />
          ))}
        </div>
      </main>
    </div>
  )
}

