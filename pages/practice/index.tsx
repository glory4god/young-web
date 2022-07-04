import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { GlassmorphismBox } from '@components/ui';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import { NormalSlider } from '@components/slider';

const TechPage = () => {
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

export default TechPage;
