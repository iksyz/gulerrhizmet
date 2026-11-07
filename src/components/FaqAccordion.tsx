"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details
          key={idx}
          name="guler-diyarbakir-faq"
          open={idx === 0}
          className="group border border-slate-200 open:border-blue-500 bg-white open:bg-blue-50/25 rounded-2xl transition-all duration-200 overflow-hidden shadow-sm"
        >
          <summary className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-700 transition-colors cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
            <span className="text-base sm:text-lg transition-colors leading-snug group-open:text-blue-700 group-open:font-extrabold">
              {item.question}
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-slate-100 text-slate-500 group-open:bg-blue-600 group-open:text-white group-open:rotate-180">
              <ChevronDown className="w-4 h-4" />
            </div>
          </summary>

          <div className="px-5 sm:px-6 pb-5 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/90 animate-in fade-in duration-200">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
