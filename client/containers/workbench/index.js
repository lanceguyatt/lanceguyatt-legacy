/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import classnames from 'classnames/bind';
import moment from 'moment';

import Head from '../../components/head/';
// import Window from '../../components/window/';
import Titlebar from '../../components/titlebar';
// import Directory from '../../components/directory';

import Button from '../../gadgets/button';
import Checkbox from '../../gadgets/checkbox';
import Radio from '../../gadgets/radio';
import Text from '../../gadgets/text';

import styles from './style.css';

import site from '../../../data/site/index.json';

const copyrightYear = moment().format('YYYY');

// const cx = classnames.bind(styles);

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

        <Button name="Button" url="#" />
        <Button name="Button" url="#" />
        <Button name="Button" url="#" />

        <fieldset>
          <Radio id="foo1" name="foo" value="Foo 1" label="Foo 1" />
          <Radio id="foo2" name="foo" value="Foo 2" label="Foo 2" />
        </fieldset>

        <Checkbox id="agree1" name="agree_1" value="I agree 1" label="I agree 1" />
        <Checkbox id="agree2" name="agree_2" value="I agree 2" label="I agree 2" checked={true} />

        <Text name="Text" value="Foo" id="id-1" placeholder="" />

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

export default WorkBench;
