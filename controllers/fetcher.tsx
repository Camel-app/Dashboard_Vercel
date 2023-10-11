export default async function fetcher({ link, jwt }) {
    let info = {
        method: 'POST',
        body: JSON.stringify({
            jwt: jwt
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(link, info)
    const data = await response.json();
    return { status: response.status, data };
}