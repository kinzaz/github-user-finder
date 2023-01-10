import styles from './ThemeSwitcher.module.scss';
import { useTheme } from './useTheme';

export const ThemeSwitcher = () => {

	const { handleClick, ThemeIcon, themeText } = useTheme();

	return (
		<div className={styles.switcher} onClick={handleClick}>
			<span>{themeText}</span>
			<ThemeIcon className={styles.icon} />
		</div>
	);
};
