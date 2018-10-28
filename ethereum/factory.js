import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xD53cDA60Ec1ADf6F684DbF25C789577eE0b00807'
	);

export default instance;