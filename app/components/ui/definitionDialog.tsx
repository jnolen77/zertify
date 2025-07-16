import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

// Root dialog component
function Modal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

// Button or element that opens the modal
function ModalTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

// The modal content wrapper
function ModalContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50 " />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-lg max-w-lg w-full h-1/3 p-6",
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-center mb-4">
          <DialogPrimitive.Title className="text-xl font-bold">
            Definition
          </DialogPrimitive.Title>
          <DialogPrimitive.Close className="text-gray-500 hover:text-black">
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </div>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export { Modal, ModalTrigger, ModalContent };
