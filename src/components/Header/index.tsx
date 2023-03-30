// import Link from "next/link";
import { SignInButton } from "../SigninButton";

import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <>Home</>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <>Posts</>
          </ActiveLink>
          {/* <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link> */}
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
