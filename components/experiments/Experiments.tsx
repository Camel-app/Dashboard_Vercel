import { Table, Text, Loader, Badge, Button, Alert, List, ThemeIcon, createStyles } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

import { BsClipboardData, BsDoorOpen } from "react-icons/bs";
import Link from 'next/link';
import copyToClipboard from '../../controllers/copyClipboard';
import UploadForm from '../uploadForm/UploadForm';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


const useStyles = createStyles((theme) => ({
    inner: {
        //marginLeft: 100,
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 1,
        maxWidth: 960,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        }},
		button: {
			fontSize: "14px"
		}
}));


const Experiments = ({ data }) => {
	const { classes } = useStyles();

	const linkApi = publicRuntimeConfig.DEV_URL;

	const mapColor = {
		"active": "lime",
		"archived": "violet",
		"completed": "yellow",
		"inactive": "red"
	}


	return (
		<div style={{ paddingTop: 30, width: "80%", textAlign: "left", margin: "auto" }}>
			<Table striped highlightOnHover >
				<thead>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Status</th>
						<th>Collected</th>
						<th>Link for participants</th>
						<th>Go to</th>
					</tr>
				</thead>
				<tbody>
					{
						data?.experiments.map(
							(element) => (
								<tr key={element.name}>
									<td>{element.name}</td>
									<td>{(new Date(element.creationDate).toLocaleDateString())}</td>
									<td><Badge variant="outline" color={mapColor[element.status]}>{element.status}</Badge></td>
									<td>{element.numberCams}</td>
									<td>
										<Button leftIcon={<BsClipboardData />} variant="subtle" onClick={() => { copyToClipboard(element._id, linkApi) }} className={classes.button}>Copy link</Button>
									</td>
									<td>
										<Link href={"/experiment?id=" + element._id} passHref>
											<Button leftIcon={<BsDoorOpen />} variant="subtle" className={classes.button}>Enter experiment</Button>
										</Link>
									</td>
								</tr>
							)
						)
					}
				</tbody>
			</Table>
			<div style={{ paddingTop: 10, width: "80%", textAlign: "center", margin: "auto" , fontSize: "14px", fontStyle: "italic"}}>
			You may need to refresh the browser window after creating an experiment.
			</div>
			<UploadForm />
		</div>
	);
}


export default Experiments;
