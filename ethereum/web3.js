import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//we are in the browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	//we are on the server or user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/d70fe3c263c84f79b2f3ee592e1e77d0'
	);
	web3 = new Web3(provider);
}

export default web3;