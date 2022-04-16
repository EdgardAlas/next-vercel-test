import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href, ...rest }: Props) => {
  const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
  };

  const { asPath } = useRouter();

  return (
    <Link href={href} {...rest}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
