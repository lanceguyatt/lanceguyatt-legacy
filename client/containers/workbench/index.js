/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
import Directory from '../../components/directory';

import Checkbox from '../../gadgets/checkbox';
import Radio from '../../gadgets/radio';
import Text from '../../gadgets/text';
import Requester from '../../gadgets/requester';
import Action from '../../gadgets/action';

import styles from './style.css';
// import image from '../../assets/logo.png';
import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

const data1 = {
  name: 'Workbench',
  memory: {},
};

class WorkBench extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div className={styles.workbench}>

        <Head data={data} />

        <Titlebar cssClasses="flex-none">{site.name}. Copyright &copy; 2000-{copyrightYear}. All Rights Reserved</Titlebar>

        <Window data={data1} cssClasses="window-flex window--1">

          <Requester name="Test">
            <Action name="Go" url="#" />
          </Requester>

          <form action="#">
            <fieldset>
              <Radio id="foo1" name="foo" value="Foo 1" label="Radio Gadget" disabled />
              <Radio id="foo2" name="foo" value="Foo 2" label="Radio Gadget" />
              <Checkbox id="agree1" name="agree_1" value="I agree 1" label="Checkbox Gadget" />
              <Text
                type="email" label="Text" name="Text" value="Text Gadget" id="id-1" placeholder=""
              />
              <Action name="Action Gadget" url="" type="submit" />
            </fieldset>
          </form>
          <Directory directory={data.items} />

        </Window>

        { /* <Window data={data} cssClasses="flex-auto window--2" /> */ }
        {this.props.children}
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
