import React, { HtmlHTMLAttributes } from 'react';
import NextLink from 'next/link';
import s from './Link.module.css';
import cn from 'classnames';

interface LinkProps extends HtmlHTMLAttributes<HTMLLinkElement> {
  children?: any;
  rest?: any;
  href: string;
  selected?: boolean;
}

const Link = (props: LinkProps) => {
  const { children, href, rest, selected = false } = props;

  return (
    <NextLink href={href} {...rest}>
      <a className={cn(s.root, selected && s.selected)}>{children}</a>
    </NextLink>
  );
};

export default Link;
