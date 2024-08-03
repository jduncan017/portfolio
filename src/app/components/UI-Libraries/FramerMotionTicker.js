import React, { useRef, useState, useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

export const TICKER_DIRECTION_LEFT = -1;
export const TICKER_DIRECTION_RIGHT = 1;

const noop = () => {};

const FramerMotionTicker = ({
  children,
  duration = 10,
  direction = TICKER_DIRECTION_LEFT,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const tickerRef = useRef(null);
  const tickerContentsRef = useRef(null);
  const [tickerContentWidth, setTickerContentWidth] = useState(2);
  const [numDupes, setNumDupes] = useState(1);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = useState(undefined);
  const isInView = useInView(scope);
  const onMouseEnter = () => setIsPlaying(false);
  const onMouseLeave = () => setIsPlaying(true);

  useEffect(() => {
    if (tickerRef.current && tickerContentsRef.current) {
      const contentWidth =
        tickerContentsRef.current.getBoundingClientRect().width;
      setTickerContentWidth(contentWidth);
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / contentWidth),
          1,
        ),
      );
    }
  }, []);

  useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        {
          x: tickerContentWidth * direction,
        },
        {
          ease: "linear",
          duration,
          repeat: Infinity,
        },
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [
    isInView,
    tickerContentWidth,
    direction,
    duration,
    animate,
    scope,
    animationControls,
  ]);

  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying, animationControls]);

  return (
    <div
      className="FMT__container"
      ref={tickerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={scope}
        className="FMT__container__contents"
        style={{
          display: "flex",
          width: "max-content",
          marginLeft: `-${tickerContentWidth * numDupes}px`,
        }}
      >
        <div style={{ display: "flex" }}>
          {[...Array(numDupes)].map((_, i) =>
            React.Children.map(children, (child, index) => (
              <React.Fragment key={`dupe-${i}-${index}`}>
                {child}
              </React.Fragment>
            )),
          )}
        </div>
        <div ref={tickerContentsRef} style={{ display: "flex" }}>
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={`main-${index}`}>{child}</React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {[...Array(numDupes)].map((_, i) =>
            React.Children.map(children, (child, index) => (
              <React.Fragment key={`dupe2-${i}-${index}`}>
                {child}
              </React.Fragment>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default FramerMotionTicker;
