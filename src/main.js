import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory } from "./bhrigu_governance_backend.did.js";

const CANISTER_ID = "lqy7q-dh777-77777-aaaaq-cai";

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId: CANISTER_ID,
});

async function showStatus() {
  const status = await actor.status();
  document.getElementById("app").innerHTML += `<h1>Status: ${status}</h1>`;
}

async function showGreet() {
  const greet = await actor.greet("ORION");
  document.getElementById("app").innerHTML += `<h1>Greet: ${greet}</h1>`;
}

showStatus();
showGreet();
