"use client";

import { useState } from "react";

interface RedirectConfirmModalProps {
  shopUrl: string;
  children: React.ReactNode;
}

export default function RedirectConfirmModal({
  shopUrl,
  children,
}: RedirectConfirmModalProps) {
  const [open, setOpen] = useState(false);

  const handleContinue = () => {
    window.location.href = shopUrl;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-outline w-full text-center text-xs sm:text-sm inline-flex items-center justify-center px-4 py-2"
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 max-w-sm w-[90%] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-base font-semibold mb-2 text-accent">Leaving SoCalShadesWholesale.com</h2>
            <p className="text-xs text-muted mb-4">
              You&apos;re about to be redirected to our secure Shopify store to
              complete your purchase.
            </p>
            <div className="flex justify-center gap-3 text-xs">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-outline px-4 py-1.5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className="btn-primary px-4 py-1.5"
              >
                Continue to Shopify
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
