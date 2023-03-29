import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

const rpcEndpoint = 'https://nois-mainnet-rpc.bccnodes.com/'
const contract = 'nois19w26q6n44xqepduudfz2xls4pc5lltpn6rxu34g0jshxu3rdujzsj7dgu8'

let client: CosmWasmClient | null = null
const query = { beacons_desc: { start_after: null, limit: 1 } }

export default {
  async connect() {
    client = await CosmWasmClient.connect(rpcEndpoint)
  },
  getRandomness() {
    if (!client) return null

    return client.queryContractSmart(contract, query)
  }
}
