import React, { useState } from 'react';

import cn from 'classnames';

const SLIDER = ['red', 'yellow', 'green', 'blue', 'purple'];

const NormalSlider = () => {
  const [sliderIdx, setSliderIdx] = useState<number>(0);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [dragX, setDragX] = useState<number>(0);

  const moveNextSlide = () => {
    if (sliderIdx < SLIDER.length - 1) {
      setSliderIdx((prev) => prev + 1);
    }
  };
  const movePrevSlide = () => {
    if (sliderIdx > 0) {
      setSliderIdx((prev) => prev - 1);
    }
  };
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('onMouseDown', e);
    if (!isDrag) {
      setIsDrag(true);
      setDragX(e.pageX);
    }
  };
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrag) {
      const deltaX = e.pageX - dragX;
      if (deltaX < 0) {
        // 마우스를 좌로 쓸음 => 우측으로 슬라이드 이동
        moveNextSlide();
      } else {
        // 마우스를 우로 쓸음 => 좌측으로 슬라이드 이동
        movePrevSlide();
      }
      setIsDrag(false);
    }
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrag) {
      console.log('onMouseMove', e);
    }
  };
  return (
    <div className="c-container">
      <div
        className={cn(`slider`)}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ transform: `translateX(-${sliderIdx * 100}vw)` }}>
        {SLIDER.map((color, i) => {
          return (
            <div key={color} className={cn(`slider-contant bg-${color}-500`)} />
          );
        })}
      </div>
      <div className="navigator">
        {SLIDER.map((c, i) => {
          return (
            <button
              className={cn(sliderIdx === i && 'btn-active')}
              onClick={() => setSliderIdx(i)}
              key={i}></button>
          );
        })}
      </div>
    </div>
  );
};

export default NormalSlider;
