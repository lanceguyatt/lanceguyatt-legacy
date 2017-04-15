import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Head from '../../components/head/';
import Window from '../../components/window/';

import Action from '../../gadgets/action/';

import styles from './style.css';

export default class Work extends Component {

  static propTypes = {
    route: PropTypes.shape({
      data: PropTypes.shape(),
    }),
  };

  static defaultProps = {
    route: {
      data: {},
    },
  };

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    const standards = data.standards.map(item => (
      <li>{item}</li>
    ));

    const components = data.components.map(item => (
      <li>{item}</li>
    ));

    return (
      <div
        className={styles.work}
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <Head data={data} />
        <Window close={data.parent} name={data.name} transition>

          <div className="">
            <div className="u-p2 u-flex-md">

              <div className="u-mb2 u-col-4-md u-pr2-md">
                <img src={data.image.url} alt="" className="c-border u-block u-mx-auto" />
              </div>

              <div className="u-col-8-md">

                <dl className="u-items-center u-mb2 u-flex-sm ">
                  <dt className="u-white u-col-3-sm u-pr2-sm">Name:</dt>
                  <dd className="c-border u-flex-auto" itemProp="name">{data.name}</dd>
                </dl>

                <dl className="u-items-center u-mb2 u-flex-sm">
                  <dt className="u-white u-col-3-sm u-pr2-sm">URL:</dt>
                  <dd className="c-border u-flex-auto" itemProp="url">{data.website}</dd>
                </dl>

                <dl className="u-items-center u-mb2 u-flex-sm">
                  <dt className="u-white u-col-3-sm u-pr2-sm">Standards:</dt>
                  <dd className="c-border u-flex-auto">
                    <ul className="u-list-reset">{standards}</ul>
                  </dd>
                </dl>

                <dl className="u-items-center u-mb2 u-flex-sm">
                  <dt className="u-white u-col-3-sm u-pr2-sm">Components:</dt>
                  <dd className="c-border u-flex-auto">
                    <ul className="u-list-reset">{components}</ul>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="u-p2 u-flex u-items-center u-justify-between u-bg-gray">
              <Link to={data.parent} className="c-btn">Cancel</Link>
              <Action name="Launch" url={data.website} />
            </div>

          </div>
        </Window>

      </div>
    );
  }
}
