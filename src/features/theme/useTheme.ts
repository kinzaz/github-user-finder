import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useEffect } from 'react';
import { selectTheme, toggleTheme } from './theme-slice';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

export const useTheme = () => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector(selectTheme);

	const themeText = theme === 'light' ? 'Light' : 'Dark';
	const ThemeIcon = theme === 'light' ? SunIcon : MoonIcon;

	const handleClick = () =>
		dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));

	useEffect(() => {
		document.body.setAttribute(
			'data-theme',
			theme === 'dark' ? 'dark' : 'light'
		);
	}, [theme]);

	return { handleClick, themeText, ThemeIcon };
};
