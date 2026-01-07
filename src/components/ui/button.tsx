import { ButtonData } from '@/types/ui';

import { Link } from '@/i18n/routing';

export function Button(props: ButtonData) {
  const { text, className, color, ...linkProps } = props;

  const colorClassName = color === 'white' ? 'bg-white text-[#202020]' : 'bg-[#202020] text-white';

  return (
    <Link {...linkProps} locale={undefined}>
      <div
        className={`${colorClassName} text-sm font-bold py-[14px] px-[34px] rounded-full transition duration-300 select-none cursor-pointer hover:brightness-90 ${className}`}>
        {text}
      </div>
    </Link>
  );
}
