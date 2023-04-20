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
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  console.log({ theme, resolvedTheme });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle light and dark modes"
          className={`${socialStyles.icon} ${className}`}
        >
          {getIcon(theme, resolvedTheme, iconSize, strokeWidth)}
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;

// Sub-components

function getIcon(
  theme: ReturnType<typeof useTheme>['theme'],
  resolvedTheme: ReturnType<typeof useTheme>['resolvedTheme'],
  iconSize: number | undefined,
  strokeWidth: number | undefined
) {
  theme = theme === 'system' ? resolvedTheme : theme;

  if (resolvedTheme == 'light') {
    return <Moon size={iconSize} strokeWidth={strokeWidth || 2} />;
  } else {
    return <Sun size={iconSize} strokeWidth={strokeWidth || 1} />;
  }
}
