import { useEffect } from "react";
const { kakao } = window;

function KakaoMap() {
	useEffect(() => {
		// 기본 지도 셋팅
		const mapContainer = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.45001, 126.570667),
			level: 3
		};
		const map = new kakao.maps.Map(mapContainer, options);

		// 위치 마커 
		var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
		var marker = new kakao.maps.Marker({
			position: markerPosition
		});
		marker.setMap(map);


	}, [])

	return (
		<div id="map"></div>
	);
}

export default KakaoMap;
