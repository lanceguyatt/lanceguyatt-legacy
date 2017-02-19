import React from 'react';
import { Link } from 'react-router';
import Head from '../../components/head/';
import Titlebar from '../../components/titlebar/';
import Window from '../../components/window/';
import Directory from '../../components/directory/';

class Folder extends React.Component {
  componentDidMount() {
  }

  render() {
    const { data } = this.props.route;

    return (
      <section>
        <Head data={data} />
        <Titlebar>
          <Link to={data.parent}>Back</Link>
          <h2>{data.name}</h2>
        </Titlebar>
        <Window>
          <Directory data={data.items} />
          {this.props.children}
        </Window>
      </section>
    );
  }
}

Folder.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape({
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      url: React.PropTypes.string,
      image: React.PropTypes.string,
      items: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        url: React.PropTypes.string,
      })),
    }),
  }),
  children: React.PropTypes.element,
};

export default Folder;
