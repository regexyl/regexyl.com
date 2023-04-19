import { default as NextLink } from 'next/link';
import styles from './link.module.css';

export default function Link(props: NonNullable<typeof NextLink.defaultProps>) {
  const href = props.href ?? '';
  return (
    <NextLink href={href} className={styles.main}>
      {props.children}
    </NextLink>
  );
}
