import React from 'react';

import s from './GlassmorphismBox.module.css';

import cn from 'classnames';

interface GlassmorphismBoxProps {
  className?: string;
  children?: any;
  title?: string;
}

const GlassmorphismBox = (props: GlassmorphismBoxProps) => {
  const { className, children, title } = props;
  return (
    <div className={cn(className, s.root)}>
      {title && <h2 className={s.title}>{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default GlassmorphismBox;
