import GuestBookList from "./GuestBookList";

function GuestBook() {
	const showModal = () => {
		document.getElementById('dialog-rounded').showModal()
	}

	return (
		<>
			<section>
				<button type="button" className="nes-btn is-warning guest-book" onClick={showModal}>
					축하 메시지 남기기
				</button>
				<dialog className="nes-dialog is-rounded" id="dialog-rounded">
					<form method="dialog">
						<p className="title">축하 메시지를 남겨주세요</p>
						<div class="nes-field">
							<input type="text" id="name_field" class="nes-input" placeholder="이름" />
						</div>
						<div class="nes-field">
							<input type="text" id="name_field" class="nes-input" placeholder="비밀번호" />
						</div>
						<div class="nes-field">
							<textarea id="textarea_field" class="nes-textarea" placeholder="내용"></textarea>
						</div>
						<menu className="dialog-menu">
							<button className="nes-btn">Cancel</button>
							<button className="nes-btn is-primary">Confirm</button>
						</menu>
					</form>
				</dialog>
			</section>

			<GuestBookList />
		</>
	);
}

export default GuestBook;
