import "nes.css/css/nes.min.css";
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import GuestBook from './components/GuestBook';
import LoadMap from "./components/LoadMap";

function App() {
	return (
		<>
			<AppHeader />
			<div class="container">
				<div class="nes-container is-rounded is-dark">
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
					<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
				</div>
				<section>
					<p>☆☆☆ ☆☆☆ 뭐시기</p>
					<p>★★★ ★★★ 뭐시기</p>
				</section>
				<LoadMap />
				<section class="nes-container with-title">
					<h2 class="title">Buttons</h2>
					<div id="buttons" class="item">
						<a class="nes-btn" href="#">Normal</a>
						<button type="button" class="nes-btn is-primary">Primary</button>
						<button type="button" class="nes-btn is-success">Success</button>
						<button type="button" class="nes-btn is-warning">Warning</button>
						<button type="button" class="nes-btn is-error">Error</button>
						<button type="button" class="nes-btn is-disabled">Disabled</button>
					</div>
				</section>

				<GuestBook />
			</div>
			<AppFooter />

			<i class="icon-cloud-1"></i>
			<i class="icon-cloud-2"></i>
			<i class="icon-cloud-3"></i>
			<i class="icon-cloud-4"></i>
		</>
	);
}

export default App;
