import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Head from '../../components/head/';
import Window from '../../components/window/';
import { Action, Box } from '../../components/common';

import styles from './style.css';

const Dl = ({ children }) => <dl className={styles.dl}>{children}</dl>;

Dl.propTypes = {
  children: PropTypes.node,
};

Dl.defaultProps = {
  children: '',
};

const Dt = ({ children }) => <dt className={styles.dt}>{children}</dt>;

Dt.propTypes = {
  children: PropTypes.node,
};

Dt.defaultProps = {
  children: '',
};

const Dd = ({ children }) => (
  <dd className={`${styles.dd}`}>
    <Box>{children}</Box>
  </dd>
);

Dd.propTypes = {
  children: PropTypes.node,
};

Dd.defaultProps = {
  children: '',
};

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

    const standards = data.standards.map((item) => (
      <li key={item.id}>{item.name}</li>
    ));

    const components = data.components.map((item) => (
      <li key={item.id}>{item.name}</li>
    ));

    return (
      <div
        className={styles.work}
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <Head data={data} />

        <Window close={data.parent} name={data.name}>
          <div className="">
            <div className="u-p2 u-flex-md">
              <div className="u-mb2 u-col-4-md u-pr2-md">
                <Box>
                  <img
                    src={data.image.url}
                    alt=""
                    className="u-block u-mx-auto"
                  />
                </Box>
              </div>

              <div className="u-col-8-md">
                <Dl>
                  <Dt>Name:</Dt>
                  <Dd itemprop="name">{data.name}</Dd>
                </Dl>

                <Dl>
                  <Dt>URL:</Dt>
                  <Dd>{data.website}</Dd>
                </Dl>

                <Dl>
                  <Dt>Standards:</Dt>
                  <Dd>
                    <ul className="u-list-reset">{standards}</ul>
                  </Dd>
                </Dl>

                <Dl>
                  <Dt>Components:</Dt>
                  <Dd>
                    <ul className="u-list-reset">{components}</ul>
                  </Dd>
                </Dl>
              </div>
            </div>

            <div className="u-p2 u-flex u-items-center u-justify-between u-bg-gray">
              <Link to={data.parent} className="c-btn">
                Cancel
              </Link>
              <Action name="Launch" url={data.website} />
            </div>
          </div>
        </Window>
      </div>
    );
  }
}
