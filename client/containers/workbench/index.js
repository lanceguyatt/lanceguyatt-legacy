/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';

import Head from '../../components/head/';
import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
// import Directory from '../../components/directory';

import Checkbox from '../../gadgets/checkbox';
import Radio from '../../gadgets/radio';
import Text from '../../gadgets/text';
import Action from '../../gadgets/action';

import styles from './style.css';
// import image from '../../assets/logo.png';
import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

const data1 = {
  name: 'Workbench UI',
  memory: {},
};

class WorkBench extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;

    return (
      <div styleName="workbench flex flex-column">

        <Head data={data} />

        <Titlebar cssClasses="u-bg-black u-gray flex-none">{site.name}. Copyright &copy; 2000-{copyrightYear}. All Rights Reserved</Titlebar>

        <Window data={data1} cssClasses="window--1 flex-auto">
          <form action="#">
            <fieldset>
              <div styleName="u-mb3">
                <Radio id="foo1" name="foo" value="Foo 1" label="Radio Gadget" disabled />
              </div>

              <Radio id="foo2" name="foo" value="Foo 2" label="Radio Gadget" />

              <Checkbox id="agree1" name="agree_1" value="I agree 1" label="Checkbox Gadget" />

              <Text type="email" label="Text" name="Text" value="Text Gadget" id="id-1" placeholder="" />

              <div styleName="u-mb3">
                <Action name="Action Gadget" url="" type="submit" />
              </div>

            </fieldset>
          </form>
        </Window>

        { /*
        <Window data={data} cssClasses="window--2">
          <Directory data={data.items} cssClasses="c-directory--column" />
          <Action name="sdsd" url="/sdssd" />
        </Window>
        */ }
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

export default CSSModules(WorkBench, styles, { allowMultiple: true });
