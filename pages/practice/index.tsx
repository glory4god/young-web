import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { GlassmorphismBox } from '@components/ui';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import cn from 'classnames';

const TechPage = () => {
  const dispatch = useDispatch();

  const [sliderIdx, setSliderIdx] = useState(0);
  useEffect(() => {
    dispatch(setBgColor('white'));
  }, []);
  return (
    <div className="w-full h-full pt-20 overflow-hidden">
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
    </div>
  );
};

export default TechPage;
