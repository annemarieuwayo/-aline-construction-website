"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "250782467295";

export function WhatsAppButton({ message, label = "Inquire on WhatsApp" }: { message: string; label?: string }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1ebe57] transition-colors"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
