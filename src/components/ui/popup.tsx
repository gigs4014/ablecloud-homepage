'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import Close from '@/public/icons/common/close.svg';
import noticePopupSrc from '@/public/images/home/notice-popup.jpg';

import { useRouter } from '@/i18n/routing';

interface PopupProps {
  alt?: string;
  storageKey?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function Popup({
  alt = 'Popup',
  storageKey = 'hasSeenWelcomePopup',
  onClose,
  showCloseButton = true,
}: PopupProps) {
  const [visible, setVisible] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(storageKey);
    if (!hasSeen) {
      setVisible(true);
    }
  }, [storageKey]);

  const handleClose = () => {
    setVisible(false);

    sessionStorage.setItem(storageKey, 'true');
    onClose?.();
  };

  const resetPopup = () => {
    sessionStorage.removeItem(storageKey);
    setVisible(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        resetPopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const onClick = () => {
    navigate.push('/resource/blog/33');
  };

  if (!visible) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50'
      onClick={handleOverlayClick}>
      <div className='relative'>
        {showCloseButton && (
          <button
            onClick={handleClose}
            className='absolute -top-4 -right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-md'>
            <Close className='w-6 h-6' />
          </button>
        )}
        <Image
          src={noticePopupSrc}
          alt={alt}
          onClick={onClick}
          className='rounded-xl shadow-2xl border border-gray-200 max-w-full h-auto hover:cursor-pointer'
          priority
        />
      </div>
    </div>
  );
}
