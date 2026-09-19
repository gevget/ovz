"use client";

import type { ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";

export function BottomSheet({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  return <Modal open={open} title={title} onClose={onClose} align="bottom" className="max-h-[92dvh] max-w-xl rounded-t-sheet rounded-b-none sm:rounded-sheet">{children}</Modal>;
}
