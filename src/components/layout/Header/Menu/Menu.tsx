import { MouseEventHandler, ReactNode, useMemo } from 'react';

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
  const selected = useMemo(
    () => selectedItem && isIncludedItem(item, selectedItem),
    [item, selectedItem],
  );
  console.log(item.label, selected);

  const focused = useMemo(() => item === focusedItem, [item, focusedItem]);

  return (
    <div className={cls`group h-full w-full ${className}`}>
      <CustomLink href={href} className={cls`flex h-full w-full items-center justify-between`}>
        <span className={cls`text-lg ${selected && 'text-blue-500'}`}>{label ?? children}</span>

        {subMenuItems && (
          <button
            className={cls`transition-transform icon-[expand_more] ${focused && 'rotate-180'}`}
            onClick={onClick}
          />
        )}
      </CustomLink>

      {subMenuItems && (
        <SubMenu
          items={subMenuItems}
          selectedItem={selectedItem}
          className={cls`overflow-hidden transition-[height] ${focused ? 'h-fit' : 'h-0'}`}
        />
      )}
    </div>
  );
}

export function MenuItem({ item, children, selectedItem, className }: MenuItemProps) {
  const { label, href } = item;
  const selected = useMemo(
    () => selectedItem && isIncludedItem(item, selectedItem),
    [item, selectedItem],
  );

  // console.log(item.label, selected);

  return (
    <div className={cls`group h-full w-full ${className}`}>
      <CustomLink
        href={href}
        className={cls`flex h-full w-full items-center justify-center px-4 ${{
          'text-primary': selected,
        }}`}>
        <div>{label ?? children}</div>
      </CustomLink>
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
    <li key={subItem.href} className='space-y-2'>
      <CustomLink href={subItem.href}>
        <p
          className={cls`pl-4 text-sm ${
            selectedItem && isIncludedItem(subItem, selectedItem) && 'text-blue-500'
          }`}>
          {subItem.label}
        </p>

        {subItem.description && <p className='text-xs text-slate-300'>{subItem.description}</p>}
      </CustomLink>
    </li>
  );

  return (
    <ul className={cls`md:grid md:w-full md:grid-cols-3 md:rounded-b-lg ${className}`}>
      {items.map(item => (
        <li key={item.href}>
          <ul className='space-y-1 py-1 px-4 text-base md:p-4 md:text-lg'>
            {/* group section header */}
            <li
              className={`mb-2  ${
                selectedItem && isIncludedItem(item, selectedItem) && 'text-blue-500'
              }`}>
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
