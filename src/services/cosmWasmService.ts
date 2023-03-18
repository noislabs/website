import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

const rpcEndpoint = 'https://nois.rpc.bccnodes.com/'
const contract = 'nois1a4g7duyu45m0y2ex7s0u8kad87w6ee70v3nz45mh89mjr7zae4pqffrtcz'
const client = await CosmWasmClient.connect(rpcEndpoint)
const query = { beacons_desc: { start_after: null, limit: 1 } }

export default {
  getRandomness() {
      return client.queryContractSmart(contract, query)
  }
}
