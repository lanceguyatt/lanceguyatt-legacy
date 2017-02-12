import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class DirectoryList extends React.Component {

  static propTypes = {
    directory: PropTypes.obj,
  }

  renderNavItems() {
    this.props.directory.items.map((item) => {
      return (
        <li key={item.id}>
          <Link to={item.url}>
            {item.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <nav>
        <h3 className="u-hide">{this.props.directory.name}</h3>
        <ul className="u-list-reset">
          {this.props.directory.items ? this.renderNavItems() : null}
        </ul>
      </nav>
    );
  }
}

export default DirectoryList;
