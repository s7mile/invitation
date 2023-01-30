import Greeting from './Greeting';
import LoadMap from "./LoadMap";
import SNSShare from "./SNSShare";
import GuestBook from './GuestBook';
// import { weddingHallName } from 'constants/constants'  

function AppMain() {
	return (
		<div className="container">
			<Greeting />
			<LoadMap />
			<SNSShare />
			<GuestBook />


			{/* <section className="nes-container with-title">
				<h2 className="title">Buttons</h2>
				<div id="buttons" className="item">
					<button type="button" className="nes-btn">공유하기</button>
					<button type="button" className="nes-btn is-primary">Primary</button>
					<button type="button" className="nes-btn is-success">Success</button>
					<button type="button" className="nes-btn is-warning">Warning</button>
					<button type="button" className="nes-btn is-error">Error</button>
					<button type="button" className="nes-btn is-disabled">Disabled</button>
				</div>
			</section> */}
		</div>
	);
}

export default AppMain;
