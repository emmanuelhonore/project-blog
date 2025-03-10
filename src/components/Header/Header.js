'use client';
import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import Link from 'next/link';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    Cookie.set(
      'color-theme',
      nextTheme,
      { expires: 1000 }
    );

    const root = document.documentElement;
    const themeColor = nextTheme === 'light'
      ? LIGHT_TOKENS
      : DARK_TOKENS;

    root.setAttribute('data-color-theme', nextTheme);
    Object.entries(themeColor).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <Link href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </Link>
        <button className={styles.action} onClick={handleTheme}>
          {theme === 'light'
            ? <Moon size="1.5rem" />
            : <Sun size="1.5rem" />
          }

          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
