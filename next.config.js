/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // API: 'http://localhost:4000',
    API: 'https://orbeem-api.herokuapp.com',
    IPFS: 'https://gateway.pinata.cloud/ipfs/',
    SUBGRAPH: 'https://api.thegraph.com/subgraphs/name/vladknd/orbeem'
  },
}

module.exports = nextConfig
