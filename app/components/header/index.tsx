import Link from "next/link";
import styles from "./header.module.css";
import Socials from "@components/socials";
import { ArrowLeft } from "@components/icons";

export default function Header({ showAbout }: { showAbout: boolean }) {
  const buttonGoTo = showAbout ? "/" : "/about";
  const buttonContent = showAbout ? (
    <>
      <ArrowLeft className={styles.backButton} />
      Posts
    </>
  ) : (
    "About"
  );

  return (
    <div className={styles.main}>
      <div>
        <h1>Regina Liu</h1>
        <div>Your friendly neighbourhood web tickler.</div>
      </div>

      <div className={styles.links}>
        <Socials />
        <Link href={buttonGoTo} className={styles.about}>
          {buttonContent}
        </Link>
      </div>
    </div>
  );
}
