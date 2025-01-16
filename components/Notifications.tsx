import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

type Notification = {
  id: number;
  user: string;
  avatar: string;
  action: string;
  time: string;
  read: boolean;
};

const notifications: Notification[] = [
  { id: 1, user: "Alice Smith", avatar: "/placeholder.svg?height=40&width=40", action: "liked your pin", time: "2 hours ago", read: false },
  { id: 2, user: "Bob Johnson", avatar: "/placeholder.svg?height=40&width=40", action: "commented on your pin", time: "4 hours ago", read: false },
  { id: 3, user: "Carol Williams", avatar: "/placeholder.svg?height=40&width=40", action: "started following you", time: "1 day ago", read: true },
  { id: 4, user: "David Brown", avatar: "/placeholder.svg?height=40&width=40", action: "saved your pin", time: "2 days ago", read: true },
];

export function Notifications() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ScrollArea className="h-[600px] w-full rounded-md border">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center p-4 border-b ${
              notification.read ? 'bg-white' : 'bg-blue-50'
            }`}
          >
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={notification.avatar} alt={notification.user} />
              <AvatarFallback>{notification.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold">{notification.user}</p>
              <p className="text-sm text-gray-600">{notification.action}</p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </div>
            {!notification.read && (
              <Button variant="ghost" size="sm">
                Mark as read
              </Button>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

