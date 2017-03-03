import React from 'react';
import { Link } from 'react-router';

import styles from './style.css';

class Directory extends React.Component {

  renderItems() {
    return this.props.directory.map((item) => {
      return (
        <li className={styles.directoryItem} key={item.id}>
          <Link to={item.url} className={styles.directoryLink}>
            <span className={item.type === 'drive' ? styles.drive : styles.disk} />
            <span className={styles.directoryName}>{item.name}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={this.props.wrap ? styles.directoryFlex : styles.directory}>
        {this.props.directory ? this.renderItems() : '' }
      </ul>
    );
  }
}

Directory.propTypes = {
  directory: React.PropTypes.node,
  wrap: React.PropTypes.bool,
};

Directory.defaultProps = {
  directory: [],
  wrap: false,
};

export default Directory;
