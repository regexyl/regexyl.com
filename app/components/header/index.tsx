import Link from 'next/link';
import styles from './header.module.css';
import Socials from '@components/socials';
import { ArrowLeft } from '@components/icons';

export default function Header({ showAbout }: { showAbout: boolean }) {
  const buttonGoTo = showAbout ? '/' : '/about';
  const buttonContent = showAbout ? (
    <>
      <ArrowLeft className={styles.backButton} />
      <span className={styles.about}>Posts</span>
    </>
  ) : (
    <span className={styles.about}>About</span>
  );

  return (
    <div className={styles.main}>
      <div>
        <Link href="/" className={styles.title}>
          regexyl
        </Link>
        <div>~Your friendly neighbourhood web tickler~</div>
      </div>

      <div className={styles.links}>
        <Socials />
        <Link href={buttonGoTo}>
          {buttonContent}
        </Link>
      </div>
    </div>
  );
}
