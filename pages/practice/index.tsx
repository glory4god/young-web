import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import { NormalSlider } from '@components/slider';

const PracticePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBgColor('white'));
  }, []);
  return (
    <div className="w-full h-full pt-20 overflow-hidden">
      <NormalSlider />
    </div>
  );
};

export default PracticePage;
