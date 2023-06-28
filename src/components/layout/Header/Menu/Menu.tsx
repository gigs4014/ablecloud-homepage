import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useMemo, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { BaseComponentProps, HeaderMenuItem } from '@/types';
import { cls } from '@/utils';

import { CustomLink } from '@/components/common';

import Chevron_Down from '@/public/images/logos/chevron_down.svg';

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
  setIsMobileMenu?: Dispatch<SetStateAction<boolean>>;
  setIsWhiteHeader?: Dispatch<SetStateAction<boolean>>;
  selectedItem?: HeaderMenuItem;
  children?: ReactNode;
  center?: boolean;
  isProductsAbleStackPage?: boolean;
  isAboutPage: boolean;
}

export function MobileMenuItem({
  item,
  children,
  focusedItem,
  selectedItem,
  onClick,
  setIsMobileMenu,
  className,
  setIsWhiteHeader,
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

  return (
    <div className={cls`group h-full w-full py-[20px]  ${className} border-b-1`}>
      <CustomLink href={href}>
        <div
          className={cls`flex h-full w-full items-center justify-between`}
          onClick={() => {
            subMenuItems && setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen);
            if (!subMenuItems && setIsWhiteHeader && setIsMobileMenu) {
              setIsWhiteHeader(false);
              setIsMobileMenu(false);
            }
          }}>
          <span className={cls`text-lg ${selected && 'text-primary'}`}>{label ?? children}</span>

          {subMenuItems && (
            <Chevron_Down className='w-[18px]' />
            // <button
            //   className={cls`transition-transform icon-[expand_more] ${focused && 'rotate-180'}`}
            //   style={{ zIndex: -9999 }}
            //   onClick={() => setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen)}
            // />
          )}
        </div>
      </CustomLink>

      {isSubMenuOpen && subMenuItems && (
        <MobileSubMenu
          items={subMenuItems}
          selectedItem={selectedItem}
          setIsMobileMenu={setIsMobileMenu}
          setIsWhiteHeader={setIsWhiteHeader}
        />
      )}
    </div>
  );
}

export function MenuItem({
  item,
  children,
  selectedItem,
  className,
  headerColor,
  isProductsAbleStackPage,
  isAboutPage,
}: MenuItemProps & {
  headerColor: 'bg-[#17244F]' | 'bg-[#000000]' | 'bg-[white]' | 'bg-[#000020]';
}) {
  const { label, href, subMenuItems } = item;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={cls`group h-[110px] w-full ${className}`}
      onMouseOver={() => {
        setIsSubMenuOpen(true);
      }}
      onMouseLeave={() => {
        setIsSubMenuOpen(false);
      }}>
      <CustomLink
        href={href}
        className={cls`flex h-full w-full items-center justify-center px-4 
       hover:font-[700] hover:text-primary hover:shadow-primary
        ${isProductsAbleStackPage || isAboutPage ? 'text-white' : 'text-[#444444]'}
        ${isSubMenuOpen && 'hover:shadow-primary '}`}>
        <div>{label ?? children}</div>
      </CustomLink>
      {isSubMenuOpen && subMenuItems && (
        <SubMenu
          headerColor={headerColor}
          items={subMenuItems}
          selectedItem={selectedItem}
          label={label}
        />
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
  setIsMobileMenu?: Dispatch<SetStateAction<boolean>>;
  setIsWhiteHeader?: Dispatch<SetStateAction<boolean>>;
  label?: ReactNode;
}

export function SubMenu({
  items,
  selectedItem,
  headerColor,
  className,
  label,
}: SubMenuProps & {
  headerColor: 'bg-[#17244F]' | 'bg-[#000000]' | 'bg-[white]' | 'bg-[#000020]';
}) {
  const subMenuBlock = (subItem: HeaderMenuItem) => (
    <li key={uuid()}>
      <CustomLink href={subItem.href}>
        <p
          className={cls`py-[8px] text-[14px] font-[400] ${
            selectedItem && isIncludedItem(subItem, selectedItem) && 'text-primary'
          }`}>
          {subItem.label}
        </p>

        {subItem.description && <p className='text-xs text-slate-300'>{subItem.description}</p>}
      </CustomLink>
    </li>
  );

  return (
    <div
      className={cls`fixed left-0 flex w-screen justify-center border-t-1 border-borderGray ${headerColor} ${
        headerColor === 'bg-[white]' ? 'text-[#444]' : 'text-white'
      } drop-shadow-lg`}>
      <div>
        <ul
          className={cls`flex max-w-[1256px] flex-row flex-wrap gap-y-8 px-[42px] py-[48px] ${
            label === '제품' ? 'gap-x-[43px]' : 'gap-x-[124px]'
          } ${className}`}>
          {/* <div>{label}</div> */}
          {items.map(item => (
            <li key={uuid()} className={item.type !== 'group' ? 'mb-[10px]' : ''}>
              <ul className='w-[200px] py-[8px] text-[16px] '>
                {item.type === 'group' ? (
                  <>
                    {item.label && (
                      <li className={'mb-[20px] font-[500]'}>
                        <CustomLink href={item.href} className={`text-red`}>
                          {item.label}
                        </CustomLink>
                      </li>
                    )}
                    {item.subMenuItems.map(subMenuBlock)}
                  </>
                ) : (
                  <li className={'flex flex-col font-[500]'}>
                    <CustomLink
                      href={item.href}
                      className={`${
                        selectedItem && isIncludedItem(item, selectedItem) && 'text-primary'
                      }`}>
                      {item.label}
                    </CustomLink>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function MobileSubMenu({
  className,
  items,
  selectedItem,
  setIsMobileMenu,
  setIsWhiteHeader,
}: SubMenuProps) {
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
          <CustomLink href={item.href}>
            <ul
              className='rounded-md py-[8px] px-[16px] text-base md:text-[16px]'
              onClick={() => {
                if (setIsMobileMenu && setIsWhiteHeader) {
                  setIsWhiteHeader(false);
                  setIsMobileMenu(false);
                }
              }}>
              {/* group section header */}
              <li
                className={`${
                  selectedItem && isIncludedItem(item, selectedItem) && 'text-primary'
                }`}>
                {item.label}
              </li>

              {item.type === 'group' && item.subMenuItems.map(subMenuBlock)}
            </ul>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
}
