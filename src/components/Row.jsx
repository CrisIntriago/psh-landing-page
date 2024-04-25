import React from "react";

const Row = ({ children, speed, playing }) => {
  const scrollerRef = React.useRef();
  const clonedScrollerRef = React.useRef();
  const hoverRef = React.useRef(false);
  const playingRef = React.useRef(playing);

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // Clonación de children (no necesita validación adicional aquí)
  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  React.useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;

    function animate() {
      if (playingRef.current && scrollerRef.current && clonedScrollerRef.current) {
        let scrollerXPos = parseFloat(scrollerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        let clonedScrollerXPos = parseFloat(clonedScrollerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollerRef.current.offsetWidth) {
          scrollerXPos = clonedScrollerRef.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);

    return () => {
      animating = false;
    };
  }, [speed]);

  return (
    <div
      className="row"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div ref={scrollerRef}>{children}</div>
      <div ref={clonedScrollerRef}>{clonedChildren}</div>
    </div>
  );
};

export default Row;