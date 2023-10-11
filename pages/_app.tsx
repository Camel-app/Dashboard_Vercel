import { CookiesProvider } from "react-cookie"
import { MantineProvider } from '@mantine/core';
import FooterCentered from "../components/footer/Footer";
import type { AppProps } from 'next/app'

import '../styles/globals.css';
import HeaderSimple from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {

    const data_footer = [
        { link: '/', label: 'Made by Julius Fenn and Florian Gouret (server administration supported by  Paul Hüttner; project supervised by Prof. Andrea Kiesel)' },
        { link: '/impressum', label: 'Impressum (Notice)' },
    ];

    return (
        <CookiesProvider>
            <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
                <HeaderSimple />
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{ width: "100%" }}>
                        <Component {...pageProps} />
                    </div>
                </div>
                <FooterCentered links={data_footer} />
            </MantineProvider>
        </CookiesProvider>
    )
}


export default MyApp
