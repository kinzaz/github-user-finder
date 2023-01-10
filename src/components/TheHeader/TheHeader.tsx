import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'features/theme';

export const TheHeader = () => (
	<div className={styles.header}>
		<div className={styles.logo}>devfinder</div>
		<ThemeSwitcher />
	</div>
);
