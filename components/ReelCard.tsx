"use client";

import { useEffect, useRef } from "react";

export function ReelCard({
  src,
  poster,
  title,
  quote,
  href,
}: {
  src: string;
  poster: string;
  title: string;
  quote: string;
  href: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="reel">
      <video
        ref={videoRef}
        poster={poster}
        controls
        playsInline
        muted
        preload="metadata"
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption>
        <blockquote>{quote}</blockquote>
        <a href={href} target="_blank" rel="noopener noreferrer">
          Watch on Instagram
        </a>
      </figcaption>
    </figure>
  );
}
