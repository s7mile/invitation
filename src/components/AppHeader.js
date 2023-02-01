function AppHeader() {
	return (
		<header>
			<h1>Invitation</h1>

			<i className="icon-cloud-1"></i>
			<i className="icon-cloud-2"></i>
			<i className="icon-cloud-3"></i>
			<i className="icon-cloud-4"></i>

			<div className="characters">
				<div className="Character Character--walk-down c1">
					<img src="./test.png" className="PixelArtImage Character_sprite-sheet index-0" />
				</div>
				<div className="Character Character--walk-down c2">
					<img src="./test.png" className="PixelArtImage Character_sprite-sheet index-0" />
				</div>
			</div>
			<i className="bottom"></i>
		</header>
	);
}

export default AppHeader;
