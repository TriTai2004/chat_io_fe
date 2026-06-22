import { useLayoutEffect, useRef } from "react";
import "./style.css";

const ChatScrollArea = ({
    as: Component = "div",
    className,
    children,
    initialAnchor = "top",
    onReachTop,
    onReachBottom,
    threshold = 22,
    dataLength = 0,
    ...rest
}) => {
    const ref = useRef(null);
    const programmaticScrollRef = useRef(false);
    const autoAnchorEnabledRef = useRef(true);
    const callbacksEnabledRef = useRef(false);
    const mountedRef = useRef(false);

    const scrollToAnchor = (el) => {
        programmaticScrollRef.current = true;

        const applyAnchor = () => {
            if (initialAnchor === "bottom") {
                el.scrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
            } else {
                el.scrollTop = 0;
            }
        };

        applyAnchor();

        requestAnimationFrame(() => {
            applyAnchor();

            requestAnimationFrame(() => {
                programmaticScrollRef.current = false;
                mountedRef.current = true;
            });
        });
    };

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (autoAnchorEnabledRef.current) {
            scrollToAnchor(el);
        }
    }, [children, dataLength, initialAnchor]);

    const enableCallbacks = () => {
        if (!mountedRef.current) return;
        callbacksEnabledRef.current = true;
        autoAnchorEnabledRef.current = false;
    };

    const handleScroll = () => {
        const el = ref.current;
        if (!el) return;

        if (programmaticScrollRef.current || !callbacksEnabledRef.current) return;

        const isAtTop = el.scrollTop <= threshold;
        const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;

        if (isAtTop) {
            onReachTop?.();
        }

        if (isAtBottom) {
            onReachBottom?.();
        }
    };

    return (
        <Component
            ref={ref}
            onScroll={handleScroll}
            onWheel={enableCallbacks}
            onTouchStart={enableCallbacks}
            onPointerDown={enableCallbacks}
            onKeyDown={enableCallbacks}
            className={["chat-scroll-area-base", className].filter(Boolean).join(" ")}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default ChatScrollArea;
