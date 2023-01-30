function AppFooter() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			<footer>
				<p>© 2023 MINJUNG.</p>
			</footer>
			<button type="button" className="nes-btn is-error scroll-btn" onClick={scrollToTop}><span>&lt;</span></button>
		</>
	);
}

export default AppFooter;
