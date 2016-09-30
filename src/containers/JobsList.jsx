import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectJob } from '../actions/index';
import { bindActionCreators } from 'redux';

import Hero from '../components/header/Hero';
import Section from '../components/Section';
import '../components/Section.css';

class JobsList extends Component {

  renderList() {
    return this.props.jobs.map((job)=> {
      return (
        <Section
          key={job.title}
          bg={'http://stqpublicidade.com.br/images/site/' + job.slug +'.jpg'}
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
        { this.renderList() }
      </section>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside booklist
  return {
    jobs: state.jobs
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all our reducers
  return bindActionCreators({
    selectJob: selectJob
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
