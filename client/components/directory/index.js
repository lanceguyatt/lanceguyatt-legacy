import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import styles from './style.css';

class Directory extends React.Component {

  renderItems() {
    return this.props.directory.map((item) => {
      return (
        <li styleName="directory__item" key={item.id}>
          <Link to={item.url} styleName="directory__link">
            <span styleName={`directory__icon ${item.type}`} />
            <span styleName="directory__name">{item.name}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    const flex = this.props.wrap ? 'flex' : '';
    return (
      <ul styleName={`directory ${flex}`}>
        {this.props.directory ? this.renderItems() : '' }
      </ul>
    );
  }
}

Directory.propTypes = {
  directory: React.PropTypes.shape(),
  wrap: React.PropTypes.bool,
};

Directory.defaultProps = {
  directory: [],
  wrap: false,
};

export default CSSModules(Directory, styles, { allowMultiple: true });
