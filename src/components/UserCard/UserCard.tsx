import Skeleton from 'components/Skeleton/Skeleton';
import { UserInfo } from 'components/UserInfo';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { selectUserInfo } from 'features/user/user-select';
import { useSelector } from 'react-redux';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

export interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
	const { loading } = useSelector(selectUserInfo);

	return (
		<>
			<div className={styles.userCard}>
				{loading === 'pending' ? (
					<Skeleton />
				) : (
					<>
						<img
							src={props.avatar}
							alt={props.login}
							className={styles.avatar}
						/>
						<UserTitle
							created={props.created}
							login={props.login}
							name={props.name}
						/>
						<p
							className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}
						>
							{props.bio || 'This profile has no bio'}
						</p>
						<UserStat
							repos={props.repos}
							followers={props.followers}
							following={props.following}
						/>
						<UserInfo
							blog={props.blog}
							company={props.company}
							location={props.location}
							twitter={props.twitter}
						/>
					</>
				)}
			</div>
		</>
	);
};
