"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from 'lucide-react'

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
};

type Conversation = {
  id: number;
  user: string;
  lastMessage: string;
  avatar: string;
};


const conversations: Conversation[] = [
  { id: 1, user: "Alice Smith", lastMessage: "Hey, how are you?", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, user: "Bob Johnson", lastMessage: "Did you see that new pin?", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, user: "Carol Williams", lastMessage: "Thanks for sharing!", avatar: "/placeholder.svg?height=40&width=40" },
];

const initialMessages: Message[] = [
  { id: 1, sender: "Alice Smith", content: "Hey, how are you?", timestamp: "10:30 AM" },
  { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "10:32 AM" },
  { id: 3, sender: "Alice Smith", content: "I'm doing well. Did you see the new art exhibition pins I shared?", timestamp: "10:33 AM" },
];

export function Messages() {
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex h-[600px] border rounded-lg overflow-hidden">
        <div className="w-1/3 border-r">
          <h2 className="text-xl font-semibold p-4 border-b">Messages</h2>
          <ScrollArea className="h-[552px]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${activeConversation?.id === conv.id ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveConversation(conv)}
              >
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={conv.avatar} alt={conv.user} />
                  <AvatarFallback>{conv.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{conv.user}</h3>
                  <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="w-2/3 flex flex-col">
          {activeConversation ? (
            <>
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">{activeConversation.user}</h2>
              </div>
              <ScrollArea className="flex-grow p-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`mb-4 ${msg.sender === "You" ? "text-right" : ""}`}>
                    <div className={`inline-block p-2 rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                      {msg.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
                  </div>
                ))}
              </ScrollArea>
              <div className="p-4 border-t">
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-grow mr-2"
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

