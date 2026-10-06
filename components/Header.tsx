"use client";

import Image from "next/image";
import { useState } from "react";
import { phone } from "@/lib/site";

const links = [
  ["Menu", "#menu"],
  ["Catering", "#catering"],
  ["Reels", "#reels"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="header-bar">
        <a className="brand" href="#top" onClick={close}>
          <Image
            src="/media/logo.webp"
            alt="Perlas de Pilipinas logo, a pearl shell on a navy badge"
            width={512}
            height={512}
            priority
          />
          <span>
            <strong>Perlas de Pilipinas</strong>
            <em>Authentic Filipino cuisine</em>
          </span>
        </a>
        <nav className={open ? "site-nav open" : "site-nav"} aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-gold" href={phone.href}>
            Call
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div id="primary-nav" className="mobile-panel">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a href={phone.href} onClick={close}>
            Call {phone.display}
          </a>
        </div>
      ) : null}
    </header>
  );
}
