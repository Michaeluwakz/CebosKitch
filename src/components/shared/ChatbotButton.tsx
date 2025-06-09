'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChatbotDialog } from './ChatbotDialog';
import { MessageCircle, X } from 'lucide-react';

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </Button>
      <ChatbotDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
