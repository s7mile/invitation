import GuestBookBalloon from "./GuestBookBalloon";

function GuestBook() {
	return (
		<section className="nes-container is-rounded is-dark">
			<GuestBookBalloon text={["This is ", <p>Hello NES.css</p>,  "working."]} />
			<GuestBookBalloon text={["시인의 한 별을 그러나 남은 봄이 내 있습니다. 패, 잔디가 다하지 별 그러나 이런 나는 있습니다. 나의 사랑과 하나의 이름자 불러 딴은 이국 까닭입니다. 별 시인의 이 소녀들의 이름을 봅니다. 나는 나는 하나 프랑시스 했던 사랑과 별을 때 무엇인지 계십니다. 다 경, 까닭이요, 이름과 있습니다. 시와 내 라이너 하나에 동경과 나의 있습니다. 지나가는 밤이 파란 별 계십니다. 아침이 가난한 계집애들의 이 까닭입니다. 애기 별이 헤일 우는 이제 멀리 이런 가슴속에 까닭입니다. 차 별들을 비둘기, 헤일 거외다."]} />
		</section>
	);
}

export default GuestBook;
