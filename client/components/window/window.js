import React, { PropTypes, Component } from 'react';
import classnames from 'classnames/bind';

import styles from './window.css';

const cx = classnames.bind(styles);

class Window extends Component {

  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    const { name } = this.props;
    return (
      <div className={cx('c-window')}>
        <h2>{name}</h2>
        <div className={cx('c-window__main')}>
          <p>Items</p>
        </div>
      </div>
    );
  }
}

export default Window;
