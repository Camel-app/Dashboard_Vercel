import type { NextPage } from 'next';
import HeaderSimple from '../../components/header/Header';
import Register from "../../components/register/Register";
import getNavbar from '../../controllers/headerFetcher';


const RegisterPage: NextPage = () => {
    return (
        <>
            <Register />
        </>
    )
}

export default RegisterPage;