import React from 'react';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory';

import site from '../../../data/site/index.json';

class WorkBench extends React.Component {

  componentDidMount() {
  }

  render() {
    const { data } = this.props.route;

    return (
      <div className="c-workbench">
        <Head data={data} />
        <Titlebar>
          {site.name}.
          Copyright &copy; 2000-2017
          All Rights Reserved.
        </Titlebar>
        <Window name={data.name} parent="/kickstart" cssClasses="c-window--full">
          <Directory data={data.items} wrap={'true'} />
          {this.props.children}
        </Window>
      </div>
    );
  }
}

WorkBench.propTypes = {
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

export default WorkBench;
