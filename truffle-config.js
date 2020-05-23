require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food trap renew sad miss gesture light army genre'; 
let testAccounts = [
"0x8520d793c55147ac589d813bf05491dce69e63fb2f328d65e74a250a4c0f43df",
"0x0b87779a560994678cb71ec93668088aa720dfb28453b3523dd02ba34dcd2322",
"0x00e655b13c255fcad87e6e5a114ab3328cb0fba156934eb42cc5dd71168ee368",
"0x2d7033cad7e158fbf048d246ce6a47a141a63234784184e97996ae798872eba0",
"0xb590b4745547ad57a39b866294cfc38f1b1ad32b8cd16db2e0d05a7fcfc14343",
"0x8a4373cefc2f1df2858f4814f2008290436b5fecd6f192b6337e64ef7244ff6d",
"0x1613bdb242dc31f0f866160c658c2b033179f1791ad4f76e49e11fa0d3673290",
"0x4a1228b22a6bcc2acc87aa09a7758e59a0c07ea88c60c845aee3bc24b83253d4",
"0x030b5b403a8456a8f2ada59ed146464805ab238aeacd5ad30f3efdbb169b0a02",
"0x3fdd6450cbe8322ba1f16279dd92a55988b3be37d2030803042e24ad8be558e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
