import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';

function App() {
	return (
		<div className="page">
			<div className='page__container'>
				<Header></Header>
				<Main></Main>
			</div>
		</div>
	);
}

export default App;
