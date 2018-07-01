import { composeAPI } from "@iota/core";

const iota = composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

iota.getNodeInfo()