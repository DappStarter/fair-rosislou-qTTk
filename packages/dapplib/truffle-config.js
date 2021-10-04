require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot cheap rifle place horn hunt praise army genius'; 
let testAccounts = [
"0xe19dc871e91ab1d89aa36147a26b17b2b8c3d33c4c23529f359f5bd5f10444ab",
"0x658bd4707cdd69bed0c78896b795bec92c61ef81bbb5416a9f56b84dd857ac9f",
"0xb490d1913530ff23e1a4c5ff760b68036eafe20305d5d116b2f229392e91bf6c",
"0x1a2697467273a398c5ea164a1dbd16d97abec2b2472afd4e127a22290f0cb5c6",
"0xaa91fe300d3b3fd6960ce68eea31eb0c7a4416f6ae4f97fb5e063afc09e9a4a7",
"0xd0b4a3faac57199dfdd383365f1553b17a3be1f7afe931c35c702dd52fc3deb0",
"0x9d7762a6c3062c96ce3f706d1c99466172d202460bb0cd1078ab77ba55fc3841",
"0xee2d14f32a9211469fc3e65a31e73f8d94f5f8eafd91a4f8d3775daae7b7e9b2",
"0xd7ebb8aef57f5e2a1f1109166eb9f4d2dd6735b9164f87591ac032d54a27eb30",
"0x4083deaff6cd90a8b1df2513413a66ba52b1edf2e9ac4bc99b99241eb3cb4981"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

