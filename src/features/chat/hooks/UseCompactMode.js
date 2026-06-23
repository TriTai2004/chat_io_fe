import { useEffect, useState } from "react";


export const useCompactMode = (breakpoint = "(max-width: 1100px)") => {
    const [compactMode, setCompactMode] = useState(false);
    const [activePanel, setActivePanel] = useState("chat");

    useEffect(() => {
        const media = window.matchMedia(breakpoint);

        const syncMode = () => {
            setCompactMode(media.matches);
            if (!media.matches) setActivePanel("chat");
        };

        syncMode();
        media.addEventListener("change", syncMode);
        return () => media.removeEventListener("change", syncMode);
    }, [breakpoint]);

    return { compactMode, activePanel, setActivePanel };
}


export function useLockBodyScroll() {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);
}