'use client';

import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User, AlertTriangle, ShoppingBasket, HelpCircle, Sparkles } from 'lucide-react';
import { getAiResponse } from '@/lib/actions';
import type { ChatMessage } from '@/types';
import { allMenuItems } from '@/lib/data'; // For suggesting food items

type ChatMode = 'faq' | 'pairing_input' | 'term_input';

export function ChatbotDialog({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>('faq');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const initialMessage: ChatMessage = {
    id: 'initial',
    sender: 'ai',
    content: "Hello! I'm Cebo's AI assistant. How can I help you today? You can ask about our menu, events, or cultural terms. You can also ask for food pairings!",
    timestamp: Date.now(),
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen]);


  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      content: inputValue,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    let aiQueryType: 'faq' | 'pairing' | 'term' = 'faq';
    let aiContext: string | undefined = undefined;

    if (chatMode === 'pairing_input') {
      aiQueryType = 'pairing';
      aiContext = userMessage.content; // The food item
    } else if (chatMode === 'term_input') {
      aiQueryType = 'term';
      aiContext = userMessage.content; // The cultural term
    }
    // For 'faq' mode, query is userMessage.content and context is undefined

    const aiResponse = await getAiResponse(userMessage.content, aiQueryType, aiContext);
    setMessages((prev) => [...prev, aiResponse]);
    setIsLoading(false);
    setChatMode('faq'); // Reset mode after response
  };

  const switchToPairingMode = () => {
    setChatMode('pairing_input');
    const foodItems = allMenuItems.map(item => item.name).slice(0,3).join(', ');
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      sender: 'system',
      content: `What food item would you like a pairing suggestion for? (e.g., ${foodItems})`,
      timestamp: Date.now()
    }]);
  };

  const switchToTermMode = () => {
    setChatMode('term_input');
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      sender: 'system',
      content: 'What Zimbabwean or South African cultural term would you like to understand? (e.g., Braai, Sadza, Ubuntu)',
      timestamp: Date.now()
    }]);
  };
  
  const getPlaceholderText = () => {
    if (chatMode === 'pairing_input') return 'Enter food item for pairing...';
    if (chatMode === 'term_input') return 'Enter cultural term...';
    return 'Ask about menu, events, culture...';
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] h-[70vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="font-headline text-primary flex items-center">
            <Bot className="mr-2 h-6 w-6 text-accent" /> Cebo's Kitchen AI Helper
          </DialogTitle>
           <DialogDescription>
            Get instant answers, pairing tips, and cultural insights.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <Bot size={18} />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 text-sm shadow ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : msg.type === 'error' 
                      ? 'bg-destructive text-destructive-foreground' 
                      : msg.sender === 'system'
                      ? 'bg-muted text-muted-foreground w-full text-center italic'
                      : 'bg-card text-card-foreground'
                  }`}
                >
                  {msg.type === 'error' && <AlertTriangle className="inline mr-1 h-4 w-4"/>}
                  {msg.content}
                </div>
                {msg.sender === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      <User size={18} />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                <Avatar className="h-8 w-8">
                   <AvatarFallback className="bg-accent text-accent-foreground">
                      <Bot size={18} />
                    </AvatarFallback>
                </Avatar>
                <div className="max-w-[75%] rounded-lg px-3 py-2 text-sm shadow bg-card text-card-foreground">
                  <Sparkles className="h-4 w-4 animate-spin inline-block mr-2" /> Thinking...
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {chatMode === 'faq' && (
           <div className="p-2 border-t flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={switchToPairingMode} className="text-accent border-accent hover:bg-accent/10">
                <ShoppingBasket className="mr-2 h-4 w-4" /> Suggest Pairing
            </Button>
            <Button variant="outline" size="sm" onClick={switchToTermMode} className="text-accent border-accent hover:bg-accent/10">
                <HelpCircle className="mr-2 h-4 w-4" /> Explain Term
            </Button>
          </div>
        )}

        <DialogFooter className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={getPlaceholderText()}
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || inputValue.trim() === ''} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Send
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
