import Header from '@components/header';
import styles from './about.module.css';
import Link from '@components/link';

export default function About() {
  return (
    <main>
      <Header showAbout={false} />
      {
        <article className={styles.main}>
          <div>
            Hi there! I&apos;m Regina Liu, a Front End Engineer currently at{' '}
            <Link href="https://bebop.xyz">Bebop</Link>, based in the sunny little
            island of Singapore. I enjoy working on web performance, improving developer tooling and things that contribute to the frontend space.
          </div>
          <br />
          <div>
            I&apos;ve worked at{' '}
            <Link href="https://meta.com">Meta</Link> (2022),{' '}
            <Link href="https://grab.com">Grab</Link> (2021) and{' '}
            <Link href="https://mask.io/">Mask Network</Link> (2021) as a software engingeering intern.
          </div>
          {/* <br />
          <div>
            This blog is to document what I&apos;ve learned and things I&apos;m
            excited to share about. Particularly web performance, improving
            developer tooling and front-endy things in general.
          </div> */}
          <br />
          <div>
            I&apos;m on <Link href="https://twitter.com/regexyl">Twitter</Link>,{' '}
            <Link href="https://github.com/regexyl">GitHub</Link> and{' '}
            <Link href="https://www.linkedin.com/in/regina-liu/">LinkedIn</Link>. DMs
            are always open! ٩(＾◡＾)۶
          </div>
        </article>
      }
    </main>
  );
}
