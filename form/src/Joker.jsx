import React, { useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    try {
      let response = await fetch(URL);
      let jsonResponse = await response.json();

      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    } catch (error) {
      console.error("Error fetching the joke:", error);
    }
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);

  const [joke, setJoke] = useState({});
  return (
    <div>
      <h1>Joker</h1>
      {joke.setup && <h2>{joke.setup}</h2>}
      {joke.punchline && <h3>{joke.punchline}</h3>}
      <button onClick={getNewJoke}>Get a new joke</button>
    </div>
  );
}
