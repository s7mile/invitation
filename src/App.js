import "nes.css/css/nes.min.css";
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import GuestBook from './components/GuestBook';
import LoadMap from "./components/LoadMap";
import SNSShare from "./components/SNSShare";
// import { weddingHallName } from 'constants/constants'  

function App() {
	return (
		<>
			<AppHeader />
			<div className="container">
				<section className="nes-container is-rounded is-dark">
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
				</section>
				<section className="nes-container is-rounded">
					<p>☆☆☆ ☆☆☆ 뭐시기</p>
					<p>★★★ ★★★ 뭐시기</p>
				</section>
				<LoadMap />
				<SNSShare />
				<section className="nes-container with-title">
					<h2 className="title">Buttons</h2>
					<div id="buttons" className="item">
						<button type="button" className="nes-btn">공유하기</button>
						<button type="button" className="nes-btn is-primary">Primary</button>
						<button type="button" className="nes-btn is-success">Success</button>
						<button type="button" className="nes-btn is-warning">Warning</button>
						<button type="button" className="nes-btn is-error">Error</button>
						<button type="button" className="nes-btn is-disabled">Disabled</button>
					</div>
				</section>

				<GuestBook />
			</div>
			<AppFooter />

			<i className="icon-cloud-1"></i>
			<i className="icon-cloud-2"></i>
			<i className="icon-cloud-3"></i>
			<i className="icon-cloud-4"></i>
		</>
	);
}

export default App;
