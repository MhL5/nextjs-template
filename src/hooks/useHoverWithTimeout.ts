import { useCallback, useRef } from "react";

type UseHoverWithTimeoutOptions = {
  onEnter?: () => void;
  onLeave?: () => void;
  enterDelay?: number;
  leaveDelay?: number;
};

export function useHoverWithTimeout({
  onEnter,
  onLeave,
  enterDelay = 200,
  leaveDelay = 300,
}: UseHoverWithTimeoutOptions = {}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onEnterRef = useRef(onEnter);
  const onLeaveRef = useRef(onLeave);

  const handleClearTimeout = useCallback(() => {
    if (!timeoutRef.current) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  const handleMouseEnter = useCallback(() => {
    handleClearTimeout();

    if (onEnterRef.current)
      timeoutRef.current = setTimeout(onEnterRef.current, enterDelay);
  }, [enterDelay, handleClearTimeout]);

  const handleMouseLeave = useCallback(() => {
    handleClearTimeout();

    if (onLeaveRef.current)
      timeoutRef.current = setTimeout(onLeaveRef.current, leaveDelay);
  }, [leaveDelay, handleClearTimeout]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    clearTimeout: handleClearTimeout,
  };
}
