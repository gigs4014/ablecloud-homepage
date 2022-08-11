import { MouseEventHandler, ReactNode, useMemo, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { BaseComponentProps, HeaderMenuItem } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

export function getSelectedItem(
  items: Array<HeaderMenuItem>,
  currentPath: string,
): HeaderMenuItem | undefined {
  for (const item of items) {
    // exact match
    if (currentPath === item.href) return item;

    // subPath match
    if (item.subMenuItems) {
      const subItem = getSelectedItem(item.subMenuItems, currentPath);

      if (subItem !== undefined) return subItem;
    }
  }
}

export interface MenuItemProps extends BaseComponentProps {
  item: HeaderMenuItem;
  selectedItem?: HeaderMenuItem;
  children?: ReactNode;
  center?: boolean;
  isProductsAbleStackPage?: boolean;
}

export function MobileMenuItem({
  item,
  children,
  focusedItem,
  selectedItem,
  onClick,
  className,
}: MenuItemProps & {
  focusedItem?: HeaderMenuItem;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const { label, href, subMenuItems } = item;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const selected = useMemo(
    () => selectedItem && isIncludedItem(item, selectedItem),
    [item, selectedItem],
  );

  const focused = useMemo(() => item === focusedItem, [item, focusedItem]);

  return (
    <div className={cls`group h-full w-full py-[20px]${className} border-b-1 `}>
      <CustomLink href={href}>
        <div
          className={cls`flex h-full w-full items-center justify-between`}
          onClick={() => subMenuItems && setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen)}>
          <span className={cls`text-lg ${selected && 'text-primary'}`}>{label ?? children}</span>

          {subMenuItems && (
            <button
              className={cls`transition-transform icon-[expand_more] ${focused && 'rotate-180'}`}
              onClick={() => setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen)}
            />
          )}
        </div>
      </CustomLink>

      {isSubMenuOpen && subMenuItems && (
        <MobileSubMenu items={subMenuItems} selectedItem={selectedItem} />
      )}
    </div>
  );
}

export function MenuItem({
  item,
  children,
  selectedItem,
  className,
  isProductsAbleStackPage,
}: MenuItemProps) {
  const { label, href, subMenuItems } = item;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [isSubChildMenuOpen, setIsSubChildMenuOpen] = useState<boolean>(false);

  const selected = useMemo(
    () => selectedItem && isIncludedItem(item, selectedItem),
    [item, selectedItem],
  );

  // console.log(item.label, selected);

  return (
    <div
      className={cls`group h-full w-full ${className}`}
      onMouseOver={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}>
      <CustomLink
        href={href}
        className={cls`flex h-full w-full items-center justify-center px-4 ${
          selected ? `text-primary` : isProductsAbleStackPage ? 'text-white' : 'text-black'
        }`}>
        <div>{label ?? children}</div>
      </CustomLink>
      {isSubMenuOpen && subMenuItems && (
        <SubMenu items={subMenuItems} selectedItem={selectedItem} />
      )}
    </div>
  );
}

function isIncludedItem(parentItem: HeaderMenuItem, item: HeaderMenuItem): boolean {
  if (parentItem === item) return true;

  const { subMenuItems } = parentItem;
  if (subMenuItems === undefined) return false;

  for (const subItem of subMenuItems) {
    if (isIncludedItem(subItem, item)) return true;
  }

  return false;
}

export interface SubMenuProps {
  items: Array<HeaderMenuItem>;
  selectedItem?: HeaderMenuItem;
  className?: string;
}

export function SubMenu({ items, selectedItem, className }: SubMenuProps) {
  const subMenuBlock = (subItem: HeaderMenuItem) => (
    <li key={uuid()} className='space-y-2'>
      <CustomLink href={subItem.href}>
        <p
          className={cls`pl-4 text-sm ${
            selectedItem && isIncludedItem(subItem, selectedItem) && 'text-primary'
          }`}>
          {subItem.label}
        </p>

        {subItem.description && <p className='text-xs text-slate-300'>{subItem.description}</p>}
      </CustomLink>
    </li>
  );

  return (
    <ul className={cls`absolute rounded-md border-1 bg-white p-[4px] shadow-md ${className}`}>
      {items.map(item => (
        <li key={uuid()}>
          <ul className='rounded-md py-[8px] px-[16px] text-base hover:bg-backgroudGray md:text-[16px]'>
            {/* group section header */}
            <li
              className={`${selectedItem && isIncludedItem(item, selectedItem) && 'text-primary'}`}>
              <CustomLink href={item.href} className=''>
                {item.label}
              </CustomLink>
            </li>

            {item.type === 'group' && item.subMenuItems.map(subMenuBlock)}
          </ul>
        </li>
      ))}
    </ul>
  );
}
export function MobileSubMenu({ className, items, selectedItem }: SubMenuProps) {
  const subMenuBlock = (subItem: HeaderMenuItem) => (
    <li key={uuid()} className='space-y-2'>
      <CustomLink href={subItem.href}>
        <p
          className={cls`pl-4 text-sm ${
            selectedItem && isIncludedItem(subItem, selectedItem) && 'text-primary'
          }`}>
          {subItem.label}
        </p>

        {subItem.description && <p className='text-xs text-slate-300'>{subItem.description}</p>}
      </CustomLink>
    </li>
  );

  return (
    <ul className={cls`h-full w-full p-[4px] ${className}`}>
      {items.map(item => (
        <li key={uuid()}>
          <ul className='rounded-md py-[8px] px-[16px] text-base hover:bg-backgroudGray md:text-[16px]'>
            {/* group section header */}
            <li
              className={`${selectedItem && isIncludedItem(item, selectedItem) && 'text-primary'}`}>
              <CustomLink href={item.href} className=''>
                {item.label}
              </CustomLink>
            </li>

            {item.type === 'group' && item.subMenuItems.map(subMenuBlock)}
          </ul>
        </li>
      ))}
    </ul>
  );
}
