import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchJobs } from '../actions/index';

import Hero from '../components/header/Hero';
import Section from '../components/Section';
import '../components/Section.css';

// {job.pieces.map(pieces => {return (<li key={pieces.id}>{pieces.name}</li>)})}

class JobsList extends Component {
  componentWillMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  renderList() {
    return this.props.jobs.map((job) => {
      return (
        <Section
          key={job._id}
          id={job._id}
          bg={`http://stqpublicidade.com.br/images/site/` + job.slug + `.jpg`}
          slug={job.slug}>
          <h1 className="h1">{job.title}</h1>
          <h4 className="h4">{job.slogan}</h4>
        </Section>
        );
    });

  }

  render() {
    return (
      <section>
        <Hero />
        <div id="trabalhos"></div>
        { this.renderList() }
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs.all };
}

export default connect(mapStateToProps, { fetchJobs })(JobsList);
