import "nes.css/css/nes.min.css";
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
// import { weddingHallName } from 'constants/constants'  

function App() {
	return (
		<>
			<AppHeader />
			<AppMain />
			<AppFooter />
		</>
	);
}

export default App;
