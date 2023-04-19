import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const PostFooter = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <p className={styles.text}>
        Thanks for reading! You can find me on Twitter at{' '}
        <Link target="_blank" href="https://twitter.com/regexyl">
          @regexyl
        </Link>
        . DMs are always open ꒰(･‿･)꒱
      </p>
    </footer>
  );
};

export default PostFooter;
