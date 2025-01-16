import { Search, Bell, MessageCircle, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"

export function Header() {
  const unreadNotifications = 2; // This would be dynamically updated in a real app

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-orange-600 font-bold text-3xl">RAB</Link>
        <div className="flex-grow mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/notifications" className="relative">
            <Bell className="text-gray-700 hover:text-red-600 cursor-pointer" />
            {unreadNotifications > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 px-1 min-w-[20px] h-5 flex items-center justify-center">
                {unreadNotifications}
              </Badge>
            )}
          </Link>
          <Link href="/messages">
            <MessageCircle className="text-gray-700 hover:text-red-600 cursor-pointer" />
          </Link>
          <Link href="/profile">
            <User className="text-gray-700 hover:text-red-600 cursor-pointer" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

