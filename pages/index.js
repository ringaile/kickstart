import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';

class CampaignIndex extends Component{

	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();

		return {campaigns};
	}

	renderCampaigs() {
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: <a> View Campaign</a>,
				fluid: true
			}
		});

		return <Card.Group items={items}/>;
	}

	render() {
		return (
		<Layout>
			<div>
			<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
			<h3>Open Campaigns</h3>
			
		<Button floated="right"
			content="Create Campaign"
			icon="add circle"
			primary
		/>
		{this.renderCampaigs()}
		</div>
		</Layout>
		);
	}
}

export default CampaignIndex;