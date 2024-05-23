import fetch from 'node-fetch';

fetch("https://base-sepolia.infura.io/v3/a62215a4616c4c28a35e07b9ef11a6c9", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 1
  })
})
.then(response =>
  response.json()
)
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});