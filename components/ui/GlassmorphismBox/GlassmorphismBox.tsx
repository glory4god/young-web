import React from 'react';

import s from './GlassmorphismBox.module.css';

import cn from 'classnames';

interface GlassmorphismBoxProps {
  className?: string;
  children?: any;
  title?: string;
  size?: 'l' | 'm' | 's';
}

const GlassmorphismBox = (props: GlassmorphismBoxProps) => {
  const { className, children, title, size = 'l' } = props;
  console.log(children);
  return (
    <div
      className={cn(
        className,
        s.root,
        `${size === 'l' && s.large}`,
        `${size === 'm' && s.medium}`,
        `${size === 's' && s.small}`,
      )}>
      {title && (
        <h2 className={s.title}>
          <b>{title}</b>
        </h2>
      )}
      {children}
    </div>
  );
};

export default GlassmorphismBox;
