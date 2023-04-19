import Link from "next/link";
import styles from "./header.module.css";
import Socials from "@components/socials";
import { ArrowLeft } from "@components/icons";

export default function Header({
  showAbout,
  toggleAbout,
}: {
  showAbout: boolean;
  toggleAbout: () => void;
}) {
  return (
    <div className={styles.main}>
      <h1>Regina Liu</h1>

      <div className={styles.links}>
        <Socials />
        <Link href="" onClick={toggleAbout} className={styles.about}>
          {showAbout ? (
            <>
              <ArrowLeft className={styles.backButton}/>
              Posts
            </>
          ) : (
            "About"
          )}
        </Link>
      </div>
    </div>
  );
}
