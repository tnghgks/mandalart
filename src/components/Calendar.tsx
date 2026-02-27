"use client";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const DnDCalendar = withDragAndDrop<MyEvent>(BigCalendar) as any;

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { ko },
});

export default function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [newEvent, setNewEvent] = useState<Partial<MyEvent>>({});
  const [events, setEvents] = useState<MyEvent[]>([
    { id: "1", title: "회의", start: new Date(), end: new Date() },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setMode("add");
    setNewEvent({ start, end, title: "" });
    setModalOpen(true);
  };

  const handleSelectEvent = (event: MyEvent) => {
    setMode("edit");
    setNewEvent(event);
    setModalOpen(true);
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) return;
    setEvents((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        title: newEvent.title!,
        start: newEvent.start!,
        end: newEvent.end!,
        color: newEvent.color,
      },
    ]);
    setModalOpen(false);
    setNewEvent({});
  };

  const handleDeleteEvent = () => {
    if (!newEvent.id) return;
    setEvents((prev) => prev.filter((e) => e.id !== newEvent.id));
    setModalOpen(false);
    setNewEvent({});
  };

  const handleEventDrop = ({
    event,
    start,
    end,
  }: {
    event: MyEvent;
    start: Date | string;
    end: Date | string;
  }) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === event.id
          ? { ...e, start: new Date(start), end: new Date(end) }
          : e,
      ),
    );
  };

  const handleEventResize = ({
    event,
    start,
    end,
  }: {
    event: MyEvent;
    start: Date | string;
    end: Date | string;
  }) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === event.id
          ? { ...e, start: new Date(start), end: new Date(end) }
          : e,
      ),
    );
  };

  const eventStyleGetter = (event: MyEvent) => ({
    style: {
      backgroundColor: event.color ?? "#3174ad",
      borderRadius: "4px",
      color: "white",
    },
  });

  return (
    <div className="p-5 py-40">
      <DnDCalendar
        localizer={localizer}
        defaultView="month"
        events={events}
        style={{ height: 900 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        resizable
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day", "agenda"]}
        messages={{
          today: "오늘",
          previous: "이전",
          next: "다음",
          month: "월",
          week: "주",
          day: "일",
          agenda: "일정",
        }}
      />

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {mode === "add" ? "일정 추가" : "일정 수정"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            {/* 제목 */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">제목</label>
              <input
                type="text"
                placeholder="일정 제목을 입력하세요"
                value={newEvent.title ?? ""}
                onChange={(e) =>
                  setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                }
                className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
              />
            </div>

            {/* 시작일 */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">시작</label>
              <input
                type="datetime-local"
                value={
                  newEvent.start
                    ? format(newEvent.start, "yyyy-MM-dd'T'HH:mm")
                    : ""
                }
                onChange={(e) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    start: new Date(e.target.value),
                  }))
                }
                className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
              />
            </div>

            {/* 종료일 */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">종료</label>
              <input
                type="datetime-local"
                value={
                  newEvent.end ? format(newEvent.end, "yyyy-MM-dd'T'HH:mm") : ""
                }
                onChange={(e) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    end: new Date(e.target.value),
                  }))
                }
                className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
              />
            </div>
          </div>

          <DialogFooter>
            <button
              onClick={() => setModalOpen(false)}
              className="hover:bg-accent rounded-md border px-4 py-2 text-sm"
            >
              취소
            </button>
            {mode === "edit" && (
              <button
                onClick={handleDeleteEvent}
                className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                삭제
              </button>
            )}
            <button
              onClick={handleAddEvent}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm"
            >
              {mode === "add" ? "추가" : "저장"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
