import { ReactNode, useMemo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import { HeaderMenuItem } from './Menu.types';

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

export type MenuItemProps = HeaderMenuItem &
  BaseComponentProps & {
    selectedItem?: HeaderMenuItem;
    children?: ReactNode;
  };

export function MenuItem({
  label,
  href,
  children,
  subMenuItems,
  selectedItem,
  className,
}: MenuItemProps) {
  const selected = useMemo(() => {
    if (selectedItem === undefined) return false;
    if (href === selectedItem.href) return true;
    if (subMenuItems && isIncludedItem(subMenuItems, selectedItem)) return true;
  }, [href, subMenuItems, selectedItem]);

  return (
    <div className={cls`group flex h-full w-full items-center justify-center ${className}`}>
      <CustomLink
        href={href}
        className={cls`flex h-full w-full items-center justify-center px-2 align-middle ${{
          'text-blue-500': selected,
        }}`}>
        <div>{label ?? children}</div>
      </CustomLink>
    </div>
  );
}

function isIncludedItem(parentItems: Array<HeaderMenuItem>, item: HeaderMenuItem): boolean {
  for (const subItem of parentItems) {
    if (subItem.href === item.href) return true;

    if (subItem.subMenuItems && isIncludedItem(subItem.subMenuItems, item)) return true;
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
    <li key={subItem.href} className='space-y-2'>
      <CustomLink href={subItem.href}>
        <p className='text-sm'>{subItem.label}</p>

        {subItem.description && <p className='text-xs text-slate-300'>{subItem.description}</p>}
      </CustomLink>
    </li>
  );

  return (
    <ul className={cls`grid w-full grid-cols-3 rounded-b-lg dark:bg-stone-900 ${className}`}>
      {items.map(item => {
        if (item.type === 'group') {
          return (
            <li className='flex flex-col' key={item.href}>
              <ul className='space-y-2 p-4 text-lg'>
                {/* group section header */}
                <li>
                  <CustomLink href={item.href}>{item.label}</CustomLink>
                </li>

                {item.subMenuItems.map(subMenuBlock)}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={item.href}>
              <MenuItem {...item} selectedItem={selectedItem} className='p-8 text-lg' />
            </li>
          );
        }
      })}
    </ul>
  );
}
