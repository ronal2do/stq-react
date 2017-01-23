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
    const { jobs } = this.props;

    return jobs.map((job, key) => {
      return <Section key={job._id} job={job} />;
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
