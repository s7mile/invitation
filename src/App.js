import "nes.css/css/nes.min.css";
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import GuestBook from './components/GuestBook';

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
				<section class="loadmap">
					<h3>찾아오시는 길</h3>
					<ul>
						<li><button type="button" class="nes-btn is-primary">티맵</button></li>
						<li><button type="button" class="nes-btn is-primary">카카오네비</button></li>
						<li><button type="button" class="nes-btn is-primary">네이버지도</button></li>
					</ul>
				</section>
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
		</>
	);
}

export default App;
