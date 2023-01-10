import { Container } from 'components/Container';
import { Search } from 'components/Search';
import Skeleton from 'components/Skeleton/Skeleton';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { selectUser } from 'features/user/user-select';
import { loadUserByName } from 'features/user/user-slice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

function App() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const onSubmit = (name: string) => dispatch(loadUserByName(name));

	return (
		<>
			<Container>
				<TheHeader />
				<Search hasError={!user} onSubmit={onSubmit} />
				{user && <UserCard {...user} />}
			</Container>
		</>
	);
}

export default App;
