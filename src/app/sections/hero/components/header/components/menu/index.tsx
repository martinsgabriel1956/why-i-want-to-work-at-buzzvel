import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

interface MenuProps {
  onClose: () => void
}

export function Menu({ onClose }: MenuProps) {
  return (
    <div className="">
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        )}
      >
        <button
          onClick={onClose}
          className="text-white absolute top-4 right-4"
          title="Open menu"
          type="button"
        >
          <Cross1Icon />
        </button>
      </div>
    </div>

  )
}