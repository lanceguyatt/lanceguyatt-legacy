import React from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';

import Action from '../../gadgets/action/';

import styles from './style.css';

class Work extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    return (
      <div className={styles.work}>
        <Head data={data} />
        <Window close={data.parent} zoom depth name={data.name}>
          <Action name="Launch" url="http://awin.com" />
        </Window>
      </div>
    );
  }
}

Work.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape(),
  }),
};

Work.defaultProps = {
  route: {
    data: {},
  },
};

export default Work;
