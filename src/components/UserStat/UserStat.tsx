import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps
	extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ followers, following, repos }: UserStatProps) => (
	<div className={styles.UserStat}>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Repos: {repos}</div>
			<div className={styles.infoNumber}></div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Following: {following}</div>
			<div className={styles.following}></div>
		</div>
		<div className={styles.info}>
			<div className={styles.followers}>Followers: {followers}</div>
			<div className={styles.infoNumber}></div>
		</div>
	</div>
);
