function GuestBookBalloon(props) {
	return (
		<div className="message -left">
			<i className="icon-chat"></i>
			<div className="nes-balloon from-left is-dark">
				{props.text}
			</div>
		</div>
	);
}

export default GuestBookBalloon;
