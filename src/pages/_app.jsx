import {SessionProvider, useSession} from "next-auth/react";
import ThemeRegistry from "../app/ThemeRegistry";
import Container from "@mui/material/Container";

export default function App({Component, pageProps: { session, ...pageProps }}) {
    return (
        <ThemeRegistry options={{ key: 'mui' }}>
            <Container fixed>
                <SessionProvider session={session}>
                    {Component.auth ? (
                        <Auth>
                            <Component {...pageProps} />
                        </Auth>
                    ) : (
                        <Component {...pageProps} />
                    )}
                </SessionProvider>
            </Container>
        </ThemeRegistry>
    )
}

function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })

    if (status === "loading") {
        return <div>Loading...</div>
    }

    return children
}