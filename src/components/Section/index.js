import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../Container';
import Title from './Components/Title';
import Tabs from './Components/Tabs';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    iconUrl: PropTypes.string,
  }
  static defaultProps = {
    title: '',
    titleId: '',

  }
  render() {
    return (
      <Container>
        <Title title={this.props.title} titleId={this.props.titleId} />
        <Tabs />
      </Container>
    )
  }
}

export default Section;