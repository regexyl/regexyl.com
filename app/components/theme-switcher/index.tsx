'use client';

import { Moon, Sun } from '@components/icons';
import socialStyles from '@components/socials/socials.module.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = ({
  className = '',
  iconSize = 22,
  strokeWidth,
}: {
  className?: string;
  iconSize?: number;
  strokeWidth?: number;
}) => {
  const { theme: activeTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button
          onClick={() => setTheme(activeTheme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle light and dark modes"
          className={`${socialStyles.icon} ${className}`}
        >
          {activeTheme === 'light' ? (
            <Moon size={iconSize} strokeWidth={strokeWidth || 2} />
          ) : (
            <Sun size={iconSize} strokeWidth={strokeWidth || 1} />
          )}
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
