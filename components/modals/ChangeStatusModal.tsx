import { Button } from '@mantine/core';
import { useCookies } from "react-cookie";
import Router, { useRouter } from 'next/router'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const ChangeStatusModal = (props) => {
    const [cookie, setCookie] = useCookies(["auth"]);

    async function getData(status) {

        const res = await fetch(publicRuntimeConfig.DEV_URL + 'researchers/changeExperimentStatus',
            {
                body: JSON.stringify({ "id": props.experimentId, "status": status, "jwt": cookie.auth }),
                headers: {
                    'cookie': "cookie",
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
        const resData = await res.json();
        console.log("resData", props.experimentId);
        Router.reload();
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="submit" variant='outline' color="lime" onClick={() => { getData("active") }}>Set Active</Button>
            <Button type="submit" variant='outline' color="red" onClick={() => { getData("inactive") }}>Set Inactive</Button>
            <Button type="submit" variant='outline' color="pink" onClick={() => { getData("archived") }}>Set Archived</Button>
        </div>
    );
}



export default ChangeStatusModal;