"use client";

interface RedirectConfirmModalProps {
  shopUrl: string;
  children: React.ReactNode;
}

// Temporary stub: renders children without any modal behavior
export default function RedirectConfirmModal({ children }: RedirectConfirmModalProps) {
  return <>{children}</>;
}
