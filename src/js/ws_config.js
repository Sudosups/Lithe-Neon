var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Lithe';
config.appDescription = 'Neon GUI Wallet';
config.appSlogan = 'The Lithe Project';
config.appId = 'Lithe Neon';
config.appGitRepo = 'https://github.com/Sudosups/Lithe-Neon';

// default port number for your daemon (e.g. Lithed)
config.daemonDefaultRpcPort = 25501;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'lnw';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'lithe-service';

// version on the bundled service (lithe-service)
config.walletServiceBinaryVersion = "v1.0.0";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 25502;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash - NEED TO UPDATE WHEN EXPLORER IS LIVE FOR LITHE
config.blockExplorerUrl = 'TBC... ?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '127.0.0.1';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '127.0.0.1:25501',
    '127.0.0.1:25501',
    
];

// your currency name
config.assetName = 'Lithe';
// your currency ticker
config.assetTicker =  'Lithe';
// your currency address prefix, for address validation
config.addressPrefix =  'ethil';
// standard wallet address length, for address validation
config.addressLength = 99;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Example',
    address: 'ethiL7wVaadgxiNPvCtSAbEFqkBDpiiVKXY4VeD4m74pJNfJR9LjKxd1NS1rhVz63bZLpez2Y9Wsj7xXKnck2bVJ4VAuNiT5hbH',
      paymentId: 'DF794857BC4587ECEC911AF6A6AB02513FEA524EC5B98DA8702FAC92195A94B2', 
    
    }
];

module.exports = config;
