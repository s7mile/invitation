function GreetingInfoBadge(props) {
	return (
		<p className="nes-badge is-splited greeting">
			<span className="is-dark">{props.title}</span>
			<span className="is-primary">{props.contents}</span>
		</p>
	);
}

export default GreetingInfoBadge;
