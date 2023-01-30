function SNSShare() {
    const Share = () => {
		if (navigator.share) {
			navigator.share({
				title: '공유하기',
				text: '공유할거양',
				url: 'https://s7mile.github.io',
			});
		}else if (navigator.clipboard) {
			navigator.clipboard
			.writeText('https://s7mile.github.io')
			.then(() => alert("링크가 클립보드에 복사되었습니다."));
		} else {
			alert("공유하기가 지원되지 않는 환경 입니다.");
		}	
	}

	return (
        <button type="button" onClick={() => Share()} className="nes-btn is-primary sns-share-btn">공유하기</button>
    );
}

export default SNSShare;
