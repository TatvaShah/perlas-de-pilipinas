"use client";

import { useState } from "react";
import { links, messages } from "@/lib/site";

type Intent = "catering" | "order";

function legacyCopy(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "true");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(area);
  return ok;
}

async function copyText(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the older copy command.
  }
  try {
    return legacyCopy(text);
  } catch {
    return false;
  }
}

export function DmButton({
  intent,
  children,
  className = "btn btn-navy",
}: {
  intent: Intent;
  children: React.ReactNode;
  className?: string;
}) {
  const [toast, setToast] = useState("");

  async function send() {
    const text = messages[intent];
    const copied = await copyText(text);

    if (copied) {
      setToast("Message copied, just paste it in the DM");
    } else {
      setToast("Clipboard was blocked. Instagram will still open so you can write them.");
    }

    window.setTimeout(() => {
      window.open(links.instagramDm, "_blank", "noopener,noreferrer");
    }, 700);

    window.setTimeout(() => setToast(""), 4200);
  }

  return (
    <>
      <button type="button" className={className} onClick={send}>
        {children}
      </button>
      {toast ? (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      ) : null}
    </>
  );
}
