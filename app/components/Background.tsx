"use client";

import { useEffect, useRef } from "react";

const images = [
  { url: "/images/bg01.jpg", position: "center" },
  { url: "/images/bg02.jpg", position: "center" },
  { url: "/images/bg03.jpg", position: "center" },
];

const DELAY = 6000;

export default function Background() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const bgs: HTMLDivElement[] = [];

    images.forEach((img) => {
      const div = document.createElement("div");
      div.style.backgroundImage = `url("${img.url}")`;
      div.style.backgroundPosition = img.position;
      wrapper.appendChild(div);
      bgs.push(div);
    });

    let pos = 0;
    bgs[0].classList.add("visible", "top");

    if (bgs.length <= 1) return;

    const interval = setInterval(() => {
      const lastPos = pos;
      pos = (pos + 1) % bgs.length;

      bgs[lastPos].classList.remove("top");
      bgs[pos].classList.add("visible", "top");

      setTimeout(() => {
        bgs[lastPos].classList.remove("visible");
      }, DELAY / 2);
    }, DELAY);

    return () => {
      clearInterval(interval);
      bgs.forEach((bg) => bg.remove());
    };
  }, []);

  return <div id="bg" ref={wrapperRef} />;
}
