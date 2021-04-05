import React from "react";
import { Card } from "components/Card";
import redis from "redis";

const App = (): JSX.Element => {
  const redisClient = redis.createClient();
  const pokeThree = redisClient.get("pokemon_3", function (err, reply) {
    return JSON.parse(reply);
  });

  return (
    <>
      <h1>Pokemon List</h1>
      <Card pokemon={pokeThree.valueOf} />
    </>
  );
};

export default App;
