import NextLink from 'next/link';
import * as React from 'react';

const Default = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a
    href={props.href}
    className={`${props.className} font-medium text-inherit cursor-pointer hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const Next = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <NextLink
    href={props.href ?? ''}
    className={`${props.className} font-medium text-inherit cursor-pointer hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </NextLink>
);

const Button = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a
    href={props.href}
    className={`${props.className} font-medium bg-brand hover:bg-brandAlt focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const Paragraph = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a
    href={props.href}
    className={`${props.className} font-medium text-inherit cursor-pointer underline hover:no-underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const IconLink = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a
    href={props.href}
    className={`${props.className} inline-flex items-center font-medium text-inherit hover:underline`}
    itemScope={props.itemScope}
    itemType={props.itemType}
    itemProp={props.itemProp}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

export default {
  Button,
  Default,
  IconLink,
  Next,
  Paragraph,
};
