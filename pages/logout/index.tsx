import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import type { NextPage } from "next";
import { useCookies } from "react-cookie";


const Logout: NextPage = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["auth"]);
    removeCookie("auth", { path: '/' })

    return <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Alert icon={<IconAlertCircle size={16} />} title="You are now disconnected" color="red">
            </Alert>
        </div>
    </>;
};

export default Logout;
