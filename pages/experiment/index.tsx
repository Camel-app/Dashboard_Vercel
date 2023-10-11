import { NextPage } from 'next';
import Participants from "../../components/participants/Participants";
import ChangeStatus from "../../components/experiments/ChangeStatus";
import { Alert, Badge, Loader, Space } from '@mantine/core';
import { useCookies } from 'react-cookie';
import { Metrics } from '../../components/metrics/Stats';
import getConfig from 'next/config';
import useSWR from 'swr';
import fetcher from '../../controllers/fetcher';
import { IconAlertCircle } from '@tabler/icons';
const { publicRuntimeConfig } = getConfig();

interface Props {
	experimentId: string;
};

const Manage: NextPage<Props> = ({ experimentId }) => {

	const [cookies] = useCookies(["auth"]);
	const jwt = cookies?.auth || "";

	const linkApi = publicRuntimeConfig.DEV_URL;
	const link = linkApi + 'researchers/getExperimentById?id=' + experimentId;
	const { data, error } = useSWR({ link, jwt }, fetcher);

	const mapColor = {
		"active": "lime",
		"completed": "yellow",
		"inactive": "red"
	}


	if (error) {
		return (
			<>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<Alert icon={<IconAlertCircle size={16} />} title="Something went wrong!" color="red">
						The connection to the API failed. Please check your internet connection or the status of the server.
					</Alert>
				</div>
			</>
		)
	}

	if (data?.status == 401) {
		return (
			<>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<Alert icon={<IconAlertCircle size={16} />} title="Loging error!" color="red">
						It looks like you are not authentificated, please log in again.
					</Alert>
				</div>
			</>
		)
	}

	if (!data) {
		return (
			<>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<Loader />
				</div>
			</>
		)
	}

	return (
		<>
			<div style={{
				display: "flex", flexDirection: "column", alignItems: "center",
				width: "100%",
				justifyContent: "space-around"
			}}>
				<div style={{ width: "40%", textAlign: "center", margin: "auto", display: "flex", flexDirection: "column" }}>
					<h1>{data.data.name}</h1>
				</div>
				<Badge variant="outline" color={mapColor[data.data.status]}>{data.data.status}</Badge>
				<Metrics data={data.data}></Metrics>
				<Space h="xl"></Space>
			</div>
			<Participants data={data.data} />
			<Space h="xl" />
			<ChangeStatus experimentId={experimentId} />
		</>
	)
}

Manage.getInitialProps = async (ctx) => {

	const experimentId: string = ctx.query.id as string ?? '';

	return { experimentId }
}

export default Manage;