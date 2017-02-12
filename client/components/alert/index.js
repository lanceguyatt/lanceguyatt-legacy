import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';
import styles from './index.css';

const cx = classnames.bind(styles);

class Alert extends Component {

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const { name, description } = this.props;

    return (
      <div className={cx('c-alert')} role="dialog">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default Alert;
