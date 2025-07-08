import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory } from "./did.js";

// ====== CONFIG ======
const canisterId = "uxrrr-q7777-77774-qaaaq-cai"; // твой ID backend

// ====== SETUP AGENT & ACTOR ======
const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });
const backend = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

// ====== DOM ELEMENTS ======
const getOwnerBtn = document.getElementById("getOwnerBtn");
const ownerSpan = document.getElementById("owner");

const proposalInput = document.getElementById("proposalInput");
const addProposalBtn = document.getElementById("addProposalBtn");

const getProposalsBtn = document.getElementById("getProposalsBtn");
const proposalsList = document.getElementById("proposalsList");

// ====== HANDLERS ======
getOwnerBtn.onclick = async () => {
  const owner = await backend.get_owner();
  ownerSpan.textContent = owner;
};

addProposalBtn.onclick = async () => {
  const text = proposalInput.value.trim();
  if (text) {
    await backend.add_proposal(text);
    proposalInput.value = "";
    alert("Proposal added!");
  }
};

getProposalsBtn.onclick = async () => {
  const proposals = await backend.get_proposals();
  proposalsList.innerHTML = "";
  proposals.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    proposalsList.appendChild(li);
  });
};
