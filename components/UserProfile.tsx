"use client"
import { useState } from 'react'
import { Pin } from './Pin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Settings, Plus } from 'lucide-react'
import Image from 'next/image'

const userPins = [
  { id: 1, imageUrl: '/placeholder.svg?height=400&width=300', title: 'My Favorite Landscape' },
  { id: 2, imageUrl: '/placeholder.svg?height=300&width=300', title: 'Best Recipe' },
  { id: 3, imageUrl: '/placeholder.svg?height=450&width=300', title: 'Cute Pet' },
  { id: 4, imageUrl: '/placeholder.svg?height=350&width=300', title: 'Fashion Inspiration' },
  // Add more pins as needed
]

export function UserProfile() {
  const [activeTab, setActiveTab] = useState('created')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="User Avatar"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
        <p className="text-gray-600 mb-4">@janedoe • Following 245 • 1.2k followers</p>
        <div className="flex space-x-4">
          <Button variant="outline">Share</Button>
          <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Edit profile</Button>
        </div>
      </div>

      <Tabs defaultValue="created" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="created" onClick={() => setActiveTab('created')}>Created</TabsTrigger>
          <TabsTrigger value="saved" onClick={() => setActiveTab('saved')}>Saved</TabsTrigger>
          <TabsTrigger value="followers" onClick={() => setActiveTab('followers')}>Followers</TabsTrigger>
          <TabsTrigger value="following" onClick={() => setActiveTab('following')}>Following</TabsTrigger>
        </TabsList>
        <TabsContent value="created">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
            {userPins.map((pin) => (
              <Pin key={pin.id} imageUrl={pin.imageUrl} title={pin.title} />
            ))}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg h-64 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
              <Plus className="h-12 w-12 text-gray-400" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <p className="text-center text-gray-600 mt-6">No saved pins yet.</p>
        </TabsContent>
        <TabsContent value="followers">
          <p className="text-center text-gray-600 mt-6">Followers list will be displayed here.</p>
        </TabsContent>
        <TabsContent value="following">
          <p className="text-center text-gray-600 mt-6">Following list will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

