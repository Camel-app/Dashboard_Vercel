import type { NextPage } from "next";

import HeaderSimple from '../../components/header/Header';
import ApplyAccount from "../../components/apply/Apply";
import getNavbar from '../../controllers/headerFetcher';

const getInformation: NextPage = () => {

    return (
        <>
            <ApplyAccount />
        </>
    );
};

export default getInformation;

