#! /usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const redis = require("redis");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const fetch = require("node-fetch");

const client = redis.createClient();

client.monitor(function (err, res) {
  console.log("Entering monitoring mode.");
});

client.set("foo", "bar");

client.on("monitor", function (time, args, rawReply) {
  console.log(time + ": " + args); // 1458910076.446514:['set', 'foo', 'bar']
});

console.log("Hello CLI");

for (let i = 0; i < 5; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((response) => response.json())
    .then((data) => client.set(`pokemon_${i}`, JSON.stringify(data)));
}
