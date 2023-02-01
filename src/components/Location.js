import InfoBadge from "./InfoBadge";
import KakaoMap from "./KakaoMap";
import LocationLinkList from "./LocationLinkList";

function Location() {
	return (
		<section className="nes-container is-rounded with-title is-centered loadmap">
			<h2 className="title">Location</h2>
			<InfoBadge title="장소" contents="어이더이이더" />
			<p>서울 영등포구 여의대로 14</p>
			<KakaoMap />
			<LocationLinkList />
		</section>
	);
}

export default Location;
