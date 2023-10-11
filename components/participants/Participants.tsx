import { Table } from '@mantine/core';

const Participants = ({ data }) => {

	console.log("data:", data);


	function getRows(data) {
		return data.map((element) => (
			<tr key={element.participantID}>
				<td>{element.participantID}</td>
				<td>{(new Date(element.creationDate).toLocaleDateString())}</td>
			</tr>
		));
	}

	return (
		<>
			<div style={{ paddingTop: 20, width: "80%", textAlign: "left", margin: "auto" }}>
				<Table striped highlightOnHover >
					<thead>
						<tr>
							<th>Participant ID</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>{getRows(data.daughters)}</tbody>
				</Table>
			</div>
		</>
	);
}

export default Participants;
