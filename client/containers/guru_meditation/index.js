import React from 'react';
import CSSModules from 'react-css-modules';

import Head from '../../components/head/';
import Alert from '../../components/alert/';

import styles from './style.css';

const alert = {
  name: 'Software Failure. Press left mouse button to continue.',
  description: 'Guru Meditation #00004040.00004040',
  url: '/',
  type: 'error',
};

class GuruMeditation extends React.Component {
  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div styleName="guru-meditation">
        <Head data={data} />
        <Alert alert={alert} />
      </div>
    );
  }
}

GuruMeditation.propTypes = {
  route: React.PropTypes.shape(),
};

export default CSSModules(GuruMeditation, styles, { allowMultiple: true });
