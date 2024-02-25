// https://eth-sepolia.g.alchemy.com/v2/idM4xOknFyTV_OX2mVt93WJN0Gk5GBdv

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/idM4xOknFyTV_OX2mVt93WJN0Gk5GBdv",
      accounts: [
        "eb8a2bf168105cb5b95a848b37fe3455f835dcd76bf2eaebb2d9f85f9ee0c67e",
      ],
    },
  },
};
