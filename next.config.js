/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    // API: 'http://localhost:4000',
    API: "https://orbeem-api.onrender.com",
    // IPFS: 'https://gateway.pinata.cloud/ipfs',
    IPFS: ".ipfs.nftstorage.link",
    SUBGRAPH: "https://api.thegraph.com/subgraphs/name/vladknd/orbeem",
  },
  images: {
    domains: [
      "bafybeicwjamha3frl7stc4f4pt3jiocogwn5w3bwr7u4eaknrgytebsik4.ipfs.nftstorage.link",
    ],
  },
};

module.exports = nextConfig;
