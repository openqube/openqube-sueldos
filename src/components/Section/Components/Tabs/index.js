import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Tab from './Components/Tab';
import './styles.css';

// recharts components
import Barh from '../../Components/Barh';


class Tabs extends Component {
  static displayName = "Tabs";

  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {
    data: ['title1', 'title2', 'title3'],
  }

  state = {
    activeTab: this.props.data[0].title,
    activeTabIndex: 0
  };

  onClickTabItem = (tab, tabIndex) => {
    this.setState({ activeTab: tab, activeTabIndex: tabIndex });
  }

  getComponent(tabItem) {
    if (!tabItem.props || !tabItem.props.data) {
      console.error('Invalid component props, missing data.', tabItem);
      return null;
    }
    
    switch (tabItem.component) {
      case 'Barh':
        console.log(tabItem.props);
        return <Barh {...tabItem.props} />;
      default: 
        return null;
    }
  }

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className='tabs-wrapper'>
          {data.length > 1 &&
            <ul className='tabs-list'>
              {data.map((item, index) => (
                <Tab key={item.title + index} label={item.title} labelIndex={index} activeTab={this.state.activeTab} onClick={this.onClickTabItem}></Tab>
              ))}
            </ul>
          }
          {data.map((item, index) => (
            index === this.state.activeTabIndex &&
            <div className='tab-content' key={item + index}>
              {this.getComponent(item)}
              <p>{item.description}</p>
            </div>
          ))
          }

        </div>
      </React.Fragment>
    )
  }
}

export default Tabs;