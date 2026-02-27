import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { format } from "date-fns";

interface EventDialogProps {
  mode: "add" | "edit";
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  event: Partial<MyEvent>;
  onEventUpdate: (data: Partial<MyEvent>) => void;
  onAddEvent: () => void;
  onDeleteEvent: () => void;
  onClose: () => void;
}

export default function EventDialog({
  mode,
  isOpenModal,
  setIsOpenModal,
  event,
  onEventUpdate,
  onAddEvent,
  onDeleteEvent,
  onClose,
}: EventDialogProps) {
  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
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
              value={event.title ?? ""}
              onChange={(e) =>
                onEventUpdate({ ...event, title: e.target.value })
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
                event.start ? format(event.start, "yyyy-MM-dd'T'HH:mm") : ""
              }
              onChange={(e) =>
                onEventUpdate({
                  ...event,
                  start: new Date(e.target.value),
                })
              }
              className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>

          {/* 종료일 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">종료</label>
            <input
              type="datetime-local"
              value={event.end ? format(event.end, "yyyy-MM-dd'T'HH:mm") : ""}
              onChange={(e) =>
                onEventUpdate({
                  ...event,
                  end: new Date(e.target.value),
                })
              }
              className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>
        </div>

        <DialogFooter>
          <button
            onClick={onClose}
            className="hover:bg-accent rounded-md border px-4 py-2 text-sm"
          >
            취소
          </button>
          {mode === "edit" && (
            <button
              onClick={onDeleteEvent}
              className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
            >
              삭제
            </button>
          )}
          <button
            onClick={onAddEvent}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm"
          >
            {mode === "add" ? "추가" : "저장"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
