import React, { Component } from 'react';

import { getCampaignsList } from '../utils/api';

import Hero from '../components/header/Hero';
import Section from '../components/Section';
import Clients from '../components/Clients';

class JobsList extends Component {
  state = {
    campaigns: []
  }

  componentDidMount = () => {
    console.log('opa');
    this.getCampaigns();
  };

  getCampaigns = async () => {
    console.log('pega =>');
    try {
      const { campaigns } = await getCampaignsList();

      console.log(campaigns);

      this.setState({
        campaigns,
      });
    } catch(err) {
      console.log('Jobs err:', err);
    }
  };

  render() {
    const { campaigns } = this.state;
    return (
      <section>
        <Hero />
        <div id="trabalhos"></div>
          { campaigns.map((campaign, key) => {
              return (
                <Section key={campaign._id} campaign={campaign}>
                  <h1 className="h1">{campaign.title}</h1>
                  <h4 className="h4">{campaign.slogan}</h4>
                </Section>
              );
            })
          }
        <Clients />
      </section>
    );
  }
}

export default JobsList;
