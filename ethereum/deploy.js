const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'design sight cloth barely script mystery become effort require sick patrol energy',
	'https://rinkeby.infura.io/v3/d70fe3c263c84f79b2f3ee592e1e77d0'
	);
const web3 = new Web3(provider);

const deploy = async () => {
	// Get a list of all accounts
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account ', accounts[0]);

	//use one of the accouns to deploy a contract
	const result = await new web3.eth.Contract (JSON.parse(compiledFactory.interface))
	.deploy({data: compiledFactory.bytecode})
	.send({ from: accounts[0], gas: '1000000' });

	console.log('Contract deployed to ', result.options.address);
};
deploy();