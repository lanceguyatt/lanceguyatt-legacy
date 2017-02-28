/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';

import Head from '../../components/head/';
// import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
// import Directory from '../../components/directory';
import Checkbox from '../../gadgets/checkbox';
import Radio from '../../gadgets/radio';
import Text from '../../gadgets/text';
import Button from '../../gadgets/button';

import styles from './style.css';

import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

// const data1 = {
//   name: 'sdklskdls sdsldk kdlsdksl sdkl sasa aasas s',
//   memory: 'dsdsds',
// };

class WorkBench extends React.Component {

  componentDidMount() {}

  render() {
    const { data } = this.props.route;
    // const className = cx('c-workbench');

    return (
      <div className={styles.workbench}>
        <Head data={data} />
        <Titlebar>{site.name}. Copyright &copy; 2000-{copyrightYear}. All Rights Reserved</Titlebar>

        <form action="#" styleName="u-p4">
          <fieldset styleName="u-bg-blue">

            <div styleName="u-mb3">
              <Radio id="foo1" name="foo" value="Foo 1" label="Foo 1" />
            </div>

            <Radio id="foo2" name="foo" value="Foo 2" label="Foo 2" />

            <Checkbox id="agree1" name="agree_1" value="I agree 1" label="I agree 1" />

            <Text name="Text" value="Foo" id="id-1" placeholder="" />

            <div styleName="u-mb3">
              <Button name="Submit" url="#" type="submit" />
            </div>
          </fieldset>
        </form>

        { /*
        <Window data={data1} cssClasses="c-window--1">
        </Window>

        <Window data={data} cssClasses="c-window--2">
          <Directory data={data.items} cssClasses="c-directory--column" />
          <Button name="sdsd" url="/sdssd" />
        </Window>
        */
        }

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

export default CSSModules(WorkBench, styles);
