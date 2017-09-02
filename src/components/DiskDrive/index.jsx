import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import diskDrive from './disk-drive.svg';

const Wrapper = styled.div`
  width: 156px;
  height: 38px;
  background-image: url(${diskDrive});
`;

const DiskDrive = props => (
  <Wrapper className={props.className} />
);

DiskDrive.propTypes = {
  className: PropTypes.string,
};

DiskDrive.defaultProps = {
  className: '',
};

export default DiskDrive;
