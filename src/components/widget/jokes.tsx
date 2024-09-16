import { addJoke, getJokes } from "./jokes-actions";
import JokesContent from "./jokes-content";


export default async function Jokes() {
    const jokes = await getJokes();

    return (
        <>
            <JokesContent jokes={jokes} />
        </>
    )
}