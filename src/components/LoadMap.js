function LoadMap() {
	return (
		<section className="loadmap">
			<h3>찾아오시는 길</h3>
			<ul>
				<li><a href="tmap://search?name=더빅토리아웨딩파티" className="nes-btn is-warning">티맵</a></li>
				<li><a href="tmap://search?name=더빅토리아웨딩파티" className="nes-btn is-warning">카카오네비</a></li>
				<li><a href="nmap://search?query=%EB%8D%94%EB%B9%85%ED%86%A0%EB%A6%AC%EC%95%84%EC%9B%A8%EB%94%A9%ED%8C%8C%ED%8B%B0&amp;appname=https://s7mile.github.io" className="nes-btn is-warning">네이버지도</a></li>
			</ul>
		</section>
	);
}

export default LoadMap;
