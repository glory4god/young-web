import React, { useState } from 'react';

import cn from 'classnames';

const NormalSlider = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  return (
    <div className="c-container">
      <div
        className={cn(`slider`)}
        style={{ transform: `translateX(-${sliderIdx * 100}vw)` }}>
        <div className={cn('slider-contant bg-red-500')}>1</div>
        <div className={cn('slider-contant bg-yellow-500')}>2</div>
        <div className={cn('slider-contant bg-green-500')}>3</div>
        <div className={cn('slider-contant bg-blue-500')}>4</div>
        <div className={cn('slider-contant bg-purple-500')}>5</div>
      </div>
      <div className="navigator">
        {[0, 1, 2, 3, 4].map((i) => {
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
