"use server"

let jokes = [
    {
        content: "Why couldn't the JavaScript Dev die while crossing the road? Because he couldn't React time!"
    }
]

export async function getJokes() {
    return jokes
}

export async function addJoke(joke: string) {
    jokes.push({ content: joke })
    return true
}