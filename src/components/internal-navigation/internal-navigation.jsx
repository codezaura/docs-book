"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------

export function InternalNavigation({ navList }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Intersection Observer tracks which heading is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }, // Triggers when heading is in top 20% of screen
    );

    // Observe all elements that have an ID matching our navList
    navList.forEach((item) => {
      const el = document.getElementById(item.path.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navList]);

  return (
    <div className="hidden xl:block px-4 min-w-64">
      <aside className="w-56 fixed top-24">
        <h5 className="text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
          On this page
        </h5>
        <ul className="mt-4 space-y-3 border-l border-zinc-200 dark:border-zinc-800">
          {navList.map((item) => {
            const id = item.path.replace("#", "");
            const isActive = activeId === id;

            return (
              <li key={item.path} className="relative">
                <a
                  href={item.path}
                  className={cn(
                    "block pl-4 text-sm transition-colors hover:text-rose-500",
                    // Apply indentation if it's a sub-item (H3)
                    item.level === 3 ? "ml-4" : "",
                    isActive
                      ? "text-rose-600 dark:text-rose-400 font-medium"
                      : "text-zinc-500 dark:text-zinc-400",
                  )}
                >
                  {/* Vertical bar for the active link */}
                  {isActive && (
                    <span className="absolute -left-px rounded-xl top-0 h-full w-0.5 bg-rose-600 dark:bg-rose-400" />
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
