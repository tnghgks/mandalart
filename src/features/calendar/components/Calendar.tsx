"use client";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import EventDialog from "./EventDialog";

const DnDCalendar = withDragAndDrop<MyEvent>(BigCalendar) as any;

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { ko },
});

export default function Calendar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [newEvent, setNewEvent] = useState<Partial<MyEvent>>({});
  const [events, setEvents] = useState<MyEvent[]>([
    { id: "1", title: "회의", start: new Date(), end: new Date() },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setMode("add");
    setNewEvent({ start, end, title: "" });
    setIsOpenModal(true);
  };

  const handleSelectEvent = (event: MyEvent) => {
    setMode("edit");
    setNewEvent(event);
    setIsOpenModal(true);
  };

  const handleEventUpdate = (data: Partial<MyEvent>) => {
    setNewEvent(data);
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) return;

    if (mode === "edit") {
      setEvents((prev) =>
        prev.map((e) =>
          e.id === newEvent.id ? ({ ...e, ...newEvent } as MyEvent) : e,
        ),
      );
    } else {
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
    }

    setIsOpenModal(false);
    setNewEvent({});
  };

  const handleDeleteEvent = () => {
    if (!newEvent.id) return;
    setEvents((prev) => prev.filter((e) => e.id !== newEvent.id));
    setIsOpenModal(false);
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
      {isOpenModal && (
        <EventDialog
          onAddEvent={handleAddEvent}
          onDeleteEvent={handleDeleteEvent}
          onEventUpdate={handleEventUpdate}
          onClose={() => setIsOpenModal(false)}
          event={newEvent}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          mode={mode}
        />
      )}
    </div>
  );
}
