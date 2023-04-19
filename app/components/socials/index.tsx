import styles from "./socials.module.css";
import { GitHub, Twitter, Mail } from "@components/icons";
// import ThemeSwitcher from "@components/theme-switcher";
import Link from "next/link";

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  end?: boolean;
};

const SocialButton = ({ href, icon, end = false }: SocialButtonProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={end ? styles.iconEnd : styles.icon}
    >
      {icon}
    </Link>
  );
};

const Socials = () => {
  return (
    <div className={styles.socials}>
      <SocialButton
        href="https://github.com/regexyl"
        icon={<GitHub strokeWidth={2} />}
      />
      <SocialButton
        href="https://twitter.com/regexyl"
        icon={<Twitter strokeWidth={2} />}
      />
      <SocialButton
        href="mailto:reginaliuyx@gmail.com"
        icon={<Mail strokeWidth={2} />}
        end={true}
      />
      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export default Socials;
