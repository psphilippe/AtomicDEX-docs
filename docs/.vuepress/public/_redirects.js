var redirectAliases = {
  "/basic-docs/cryptoconditions/cc-tokens.html": "/basic-docs/antara/antara-api/tokens.html",
  "/basic-docs/cryptoconditions/cc-channels.html": "/basic-docs/antara/antara-api/channels.html",
  "/basic-docs/cryptoconditions/cc-momom.html": "/basic-docs/smart-chains/smart-chain-api/crosschain.html",
  "/basic-docs/cryptoconditions/cc-custom.html": "/basic-docs/antara/antara-tutorials/advanced-series-2.html",
  "/basic-docs/cryptoconditions/cc-sudoku.html": "/basic-docs/antara/antara-api/sudoku.html",
  "/basic-docs/cryptoconditions/cc-heir.html": "/basic-docs/antara/antara-api/heir.html",
  "/basic-docs/cryptoconditions/cc-musig.html": "/basic-docs/antara/antara-api/musig.html",
  "/basic-docs/cryptoconditions/cryptoconditions-tutorial.html": "/basic-docs/antara/antara-tutorials/introduction-to-antara-tutorials.html",
  "/basic-docs/cryptoconditions/cc-gateways.html": "/basic-docs/antara/antara-api/gateways.html",
  "/basic-docs/cryptoconditions/cc-rewards.html": "/basic-docs/antara/antara-api/rewards.html",
  "/basic-docs/cryptoconditions/cc-faucet.html": "/basic-docs/antara/antara-api/faucet.html",
  "/basic-docs/cryptoconditions/cc-dice.html": "/basic-docs/antara/antara-api/dice.html",
  "/basic-docs/cryptoconditions/cryptoconditions-instructions.html": "/basic-docs/antara/antara-tutorials/understanding-antara-addresses.html",
  "/basic-docs/cryptoconditions/dynamic-modules-instructions.html": "/basic-docs/antara/antara-tutorials/understanding-antara-addresses.html",
  "/basic-docs/cryptoconditions/cc-assets.html": "/basic-docs/antara/antara-api/assets.html",
  "/basic-docs/cryptoconditions/cc-oracles.html": "/basic-docs/antara/antara-api/oracles.html",
  "/basic-docs/cryptoconditions/cc-rogue.html": "/basic-docs/antara/antara-api/rogue.html",
  "/basic-docs/start-here/cc-overview.html": "/basic-docs/antara/introduction-to-antara.html",
  "/basic-docs/customconsensus/tokens.html": "/basic-docs/antara/antara-api/tokens.html",
  "/basic-docs/customconsensus/channels.html": "/basic-docs/antara/antara-api/channels.html",
  "/basic-docs/customconsensus/momom.html": "/basic-docs/smart-chains/smart-chain-api/crosschain.html",
  "/basic-docs/customconsensus/custom.html": "/basic-docs/antara/antara-tutorials/advanced-series-2.html",
  "/basic-docs/customconsensus/sudoku.html": "/basic-docs/antara/antara-api/sudoku.html",
  "/basic-docs/customconsensus/heir.html": "/basic-docs/antara/antara-api/heir.html",
  "/basic-docs/antara/antara-tutorials/heir-module-tutorial.html": "/basic-docs/antara/antara-tutorials/advanced-series-5.html",
  "/basic-docs/antara/antara-tutorials/overview-of-development-on-komodo-part-1.html": "/basic-docs/antara/antara-tutorials/overview-of-antara-modules-part-i.html",
  "/basic-docs/antara/antara-tutorials/overview-of-development-on-komodo-part-2.html": "/basic-docs/antara/antara-tutorials/understanding-antara-addresses.html",
  "/basic-docs/antara/antara-tutorials/pegs.html": "/basic-docs/antara/antara-api/pegs.html",
  "/basic-docs/customconsensus/musig.html": "/basic-docs/antara/antara-api/musig.html",
  "/basic-docs/customconsensus/custom-consensus-tutorial.html": "/basic-docs/antara/antara-tutorials/introduction-to-antara-tutorials.html",
  "/basic-docs/customconsensus/gateways.html": "/basic-docs/antara/antara-api/gateways.html",
  "/basic-docs/customconsensus/rewards.html": "/basic-docs/antara/antara-api/rewards.html",
  "/basic-docs/customconsensus/faucet.html": "/basic-docs/antara/antara-api/faucet.html",
  "/basic-docs/customconsensus/dice.html": "/basic-docs/antara/antara-api/dice.html",
  "/basic-docs/customconsensus/custom-consensus-instructions.html": "/basic-docs/antara/antara-tutorials/understanding-antara-addresses.html",
  "/basic-docs/customconsensus/dynamic-modules-instructions.html": "/basic-docs/antara/antara-tutorials/understanding-antara-addresses.html",
  "/basic-docs/customconsensus/assets.html": "/basic-docs/antara/antara-api/assets.html",
  "/basic-docs/customconsensus/oracles.html": "/basic-docs/antara/antara-api/oracles.html",
  "/basic-docs/customconsensus/rogue.html": "/basic-docs/antara/antara-api/rogue.html",
  "/basic-docs/antara/customconsensus/rogue.html": "/basic-docs/antara/antara-api/rogue.html",
  "/basic-docs/start-here/custom-consensus-overview.html": "/basic-docs/antara/introduction-to-antara.html",
  "/basic-docs/installations/asset-chain-parameters.html": "/basic-docs/antara/antara-setup/antara-customizations.html",
  "/basic-docs/komodo-api/address.html": "/basic-docs/smart-chains/smart-chain-api/address.html",
  "/basic-docs/komodo-api/blockchain.html": "/basic-docs/smart-chains/smart-chain-api/blockchain.html",
  "/basic-docs/basic-docs/smart-chains/smart-chain-api/blockchain.html": "/basic-docs/smart-chains/smart-chain-api/blockchain.html",
  "/basic-docs/komodo-api/cclib.html": "/basic-docs/smart-chains/smart-chain-api/cclib.html",
  "/basic-docs/komodo-api/control.html": "/basic-docs/smart-chains/smart-chain-api/control.html",
  "/basic-docs/komodo-api/crosschain.html": "/basic-docs/smart-chains/smart-chain-api/crosschain.html",
  "/basic-docs/komodo-api/disclosure.html": "/basic-docs/smart-chains/smart-chain-api/disclosure.html",
  "/basic-docs/komodo-api/generate.html": "/basic-docs/smart-chains/smart-chain-api/generate.html",
  "/basic-docs/komodo-api/jumblr.html": "/basic-docs/smart-chains/smart-chain-api/jumblr.html",
  "/basic-docs/komodo-api/mining.html": "/basic-docs/smart-chains/smart-chain-api/mining.html",
  "/basic-docs/komodo-api/network.html": "/basic-docs/smart-chains/smart-chain-api/network.html",
  "/basic-docs/komodo-api/wallet.html": "/basic-docs/smart-chains/smart-chain-api/wallet.html",
  "/basic-docs/komodo-api/rawtransactions.html": "/basic-docs/smart-chains/smart-chain-api/rawtransactions.html",
  "/basic-docs/antara/komodo-api/rawtransactions.html": "/basic-docs/smart-chains/smart-chain-api/rawtransactions.html",
  "/basic-docs/komodo-api/util.html": "/basic-docs/smart-chains/smart-chain-api/util.html",
  "/basic-docs/antara/komodo-api/wallet.html": "/basic-docs/smart-chains/smart-chain-api/wallet.html",
  "/basic-docs/installations/common-runtime-parameters.html": "/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html",
  "/basic-docs/installations/creating-asset-chains.html": "/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html",
  "/basic-docs/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html": "/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html",
  "/basic-docs/smart-chains/smart-chain-tutorials/create-a-": "/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html",
  "/basic-docs/installations/basic-instructions.html": "/basic-docs/smart-chains/smart-chain-setup/interacting-with-smart-chains.html",
  "/basic-docs/start-here/custom-consensus-overview.html": "/basic-docs/start-here/about-komodo-platform/product-introductions.html#smart-chains-antara",
  "/basic-docs/start-here/outline-for-new-developers.html": "/basic-docs/start-here/about-komodo-platform/orientation.html",
  "/basic-docs/basic-docs/start-here/about-komodo-platform/product-introductions.html": "/basic-docs/start-here/about-komodo-platform/product-introductions.html",
  "/basic-docs/atomicdex/atomicdex-beta/how-to-recover-seed-on-atomicdex-mobile.html": "/basic-docs/atomicdex/atomicdex-beta/recover-seed-on-atomicdex-mobile.html",
  "/basic-docs/atomicdex/atomicdex-beta/how-to-view-your-receiving-address-to-send-funds-for-trading.html": "/basic-docs/atomicdex/atomicdex-beta/view-your-receiving-address-to-send-funds-for-trading.html",
  "/basic-docs/atomicdex/atomicdex-beta/how-to-add-and-activate-coins-on-atomicdex-mobile.html": "/basic-docs/atomicdex/atomicdex-beta/add-and-activate-coins-on-atomicdex-mobile.html"
};
module.exports = redirectAliases;