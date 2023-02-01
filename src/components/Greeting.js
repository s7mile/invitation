import InfoBadge from "./InfoBadge";

function Greeting() {
	return (
		<section className="nes-container is-rounded with-title is-centered">
			<h2 className="title">Greeting</h2>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			<p>Good morning. Thou hast had a good night's sleep, I hope.</p>

			<p>☆☆☆ ☆☆☆ 뭐시기</p>
			<p>★★★ ★★★ 뭐시기</p>
			
			<InfoBadge title="일시" contents="7월 29일 토요일 오후 6시" />
			
			<table className="nes-table is-bordered is-centered calendar">
				<thead>
					<tr>
						<th>S</th>
						<th>M</th>
						<th>T</th>
						<th>W</th>
						<th>T</th>
						<th>F</th>
						<th>S</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td className="sel">4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
					</tr>
					<tr>
						<td>8</td>
						<td>9</td>
						<td>10</td>
						<td>11</td>
						<td>12</td>
						<td>13</td>
						<td>14</td>
					</tr>
					<tr>
						<td>15</td>
						<td>16</td>
						<td>17</td>
						<td>18</td>
						<td>19</td>
						<td>20</td>
						<td>21</td>
					</tr>
					<tr>
						<td>22</td>
						<td>23</td>
						<td>24</td>
						<td>25</td>
						<td>26</td>
						<td>27</td>
						<td>28</td>
					</tr>
					<tr>
						<td>29</td>
						<td>30</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default Greeting;
