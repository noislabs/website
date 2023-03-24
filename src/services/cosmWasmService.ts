import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

const rpcEndpoint = 'https://nois-004.rpc.bccnodes.com/'
const contract = 'nois16peq3sftghumkja7nu32ztjy0ew4vsnshxfhcv6sxq573ta08gwsgldepm'
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
