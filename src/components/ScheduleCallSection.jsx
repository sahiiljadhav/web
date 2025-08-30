"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, AlertTriangle } from "lucide-react";

function formatGoogleDate(date, time) {
  const [hours, minutes] = time.split(":");
  const start = new Date(date);
  start.setHours(Number(hours), Number(minutes), 0, 0);
  // 30-minute meeting
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const toZulu = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return {
    start: toZulu(start),
    end: toZulu(end),
  };
}

export default function ScheduleCallSection() {
  const today = new Date();
  const [cursorMonth, setCursorMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const organizerEmail = 'akashpawar321@gmail.com';

  const days = useMemo(() => {
    const year = cursorMonth.getFullYear();
    const month = cursorMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const leading = firstDay.getDay();
    const cells = [];
    for (let i = 0; i < leading; i++) cells.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) cells.push(new Date(year, month, d));
    return cells;
  }, [cursorMonth]);

  const timeslots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM",
  ];

  const monthNames = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
  ];

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const { start, end } = formatGoogleDate(selectedDate, selectedTime);
    const text = encodeURIComponent("Free Strategy Call — Tall Giraffe");
    const details = encodeURIComponent("30-minute strategy + AI audit call.");
    const location = encodeURIComponent("Google Meet");
    const addGuest = encodeURIComponent(organizerEmail);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}%2F${end}&details=${details}&location=${location}&add=${addGuest}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="schedule" className="bg-white dark:bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#121212] dark:text-white">Ready to Dominate Your Market?</h2>
          <p className="mt-3 text-[#6E6E6E] dark:text-[#B3B3B3]">Book a strategy call. We'll outline exactly how to 3x–10x with AI.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#ececec] dark:border-[#2a2a2a] bg-white dark:bg-[#161616]">
          {/* Left: Calendar */}
          <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#ececec] dark:border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-[#6E6E6E] dark:text-[#B3B3B3]">Pick your domination date</div>
                             <div className="flex items-center gap-2">
                 <button onClick={() => setCursorMonth(new Date(cursorMonth.getFullYear(), cursorMonth.getMonth()-1, 1))} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><ChevronLeft size={16} /></button>
                 <button onClick={() => setCursorMonth(new Date(cursorMonth.getFullYear(), cursorMonth.getMonth()+1, 1))} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><ChevronRight size={16} /></button>
               </div>
            </div>
            <div className="text-[#FF8C42] font-semibold mb-4">{monthNames[cursorMonth.getMonth()]} {cursorMonth.getFullYear()}</div>
                         <div className="grid grid-cols-7 text-center text-xs font-medium text-[#6E6E6E] dark:text-[#B3B3B3] mb-3">
               {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (<div key={d} className="py-2">{d}</div>))}
             </div>
             <div className="grid grid-cols-7 gap-1">
               {days.map((d, idx) => {
                 if (!d) return <div key={idx} className="py-3" />;
                 const isSelected = selectedDate && d.toDateString() === selectedDate.toDateString();
                 const isPast = d < new Date(new Date().setHours(0,0,0,0));
                 return (
                   <button
                     key={idx}
                     disabled={isPast}
                     onClick={() => setSelectedDate(d)}
                     className={`py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isSelected ? 'bg-[#FF8C42] text-white shadow-lg' : 'hover:bg-[#FF8C42]/10 dark:hover:bg-[#FF8C42]/20'} ${isPast ? 'opacity-30 cursor-not-allowed text-[#9CA3AF]' : 'text-[#121212] dark:text-white'}`}
                   >
                     {d.getDate()}
                   </button>
                 );
               })}
             </div>

                         {/* Timeslots */}
             <div className="mt-6">
               <div className="text-sm font-semibold text-[#6E6E6E] dark:text-[#B3B3B3] mb-3">Choose a time (30 mins)</div>
               <div className="grid grid-cols-3 gap-2">
                 {timeslots.map((t) => (
                   <button
                     key={t}
                     onClick={() => setSelectedTime(t)}
                     className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${selectedTime===t ? 'bg-[#FF8C42] text-white border-[#FF8C42] shadow-lg' : 'border-[#e6e6e6] dark:border-[#333] hover:border-[#FF8C42] hover:bg-[#FF8C42]/5 dark:hover:bg-[#FF8C42]/10'}`}
                   >
                     {t}
                   </button>
                 ))}
               </div>
             </div>

                         <div className="mt-6 flex flex-col sm:flex-row gap-3">
               <button
                 onClick={handleConfirm}
                 disabled={!selectedDate || !selectedTime}
                 className={`flex-1 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-semibold px-6 py-3 rounded-xl hover:from-[#FF7A28] hover:to-[#E6621E] transition-all duration-200 shadow-lg hover:shadow-xl ${(!selectedDate || !selectedTime) ? 'opacity-60 cursor-not-allowed' : ''}`}
               >
                 Add to Google Calendar
               </button>
               <a
                 href={selectedDate && selectedTime ? `https://wa.me/918793197804?text=${encodeURIComponent(`Hi! I'd like to confirm a 30-min strategy call on ${selectedDate.toDateString()} at ${selectedTime}.`)}` : undefined}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`flex-1 sm:flex-none sm:w-auto text-center border-2 border-[#FF8C42] text-[#FF8C42] font-semibold px-6 py-3 rounded-xl hover:bg-[#FF8C42] hover:text-white transition-all duration-200 ${(!selectedDate || !selectedTime) ? 'pointer-events-none opacity-60' : ''}`}
               >
                 Confirm via WhatsApp
               </a>
             </div>
          </div>

          {/* Right: Value bullets */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]">
            <div className="text-xl font-extrabold text-[#121212] dark:text-white mb-4">Free Strategy Call</div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <CheckCircle className="text-[#FF8C42] mt-1" size={18} />
                <div>
                  <div className="font-semibold text-[#121212] dark:text-white">30‑Minute Growth Audit</div>
                  <div className="text-[#6E6E6E] dark:text-[#B3B3B3]">We’ll analyze your business and show you exactly where you’re losing money.</div>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-[#FF8C42] mt-1" size={18} />
                <div>
                  <div className="font-semibold text-[#121212] dark:text:white">Custom AI Strategy</div>
                  <div className="text-[#6E6E6E] dark:text-[#B3B3B3]">Get a personalized roadmap to 3x–10x your revenue with AI.</div>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-[#FF8C42] mt-1" size={18} />
                <div>
                  <div className="font-semibold text-[#121212] dark:text:white">Competitor Analysis</div>
                  <div className="text-[#6E6E6E] dark:text-[#B3B3B3]">We’ll show you exactly what competitors are doing wrong.</div>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-[#FF8C42] mt-1" size={18} />
                <div>
                  <div className="font-semibold text-[#121212] dark:text:white">No Pitch, Just Value</div>
                  <div className="text-[#6E6E6E] dark:text-[#B3B3B3]">We’re not here to waste your time with sales pitches.</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-[#FFE0CC] bg-[#FFF4EC] dark:border-[#3a2a21] dark:bg-[#221915] text-[#7a3e1d] dark:text-[#f0c6a4]">
              <div className="flex items-start gap-2 font-semibold"><AlertTriangle size={16} className="mt-0.5" /> WARNING:</div>
              <div className="text-sm mt-1">We only take 10 new clients per month. If you’re serious about dominating your market, book now before spots fill up.</div>
            </div>

            <div className="mt-4 text-sm text-[#6E6E6E] dark:text-[#B3B3B3]"><span className="text-[#FF8C42] font-semibold">This call is worth $500</span> but it’s FREE for qualified businesses.</div>
          </div>
        </div>

        {/* Hidden lightweight fallback submission to email if needed */}
        <form action="https://formsubmit.co/akashpawar321@gmail.com" method="POST" className="hidden" id="schedule-fallback-form">
          <input type="hidden" name="_subject" value="New Strategy Call Request" />
          <input type="hidden" name="date" value={selectedDate ? selectedDate.toDateString() : ''} />
          <input type="hidden" name="time" value={selectedTime} />
        </form>
      </div>
    </section>
  );
}


