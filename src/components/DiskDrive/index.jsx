import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import diskDrive from './disk-drive.svg';

const Wrapper = styled.div`
  width: 156px;
  height: 38px;
`;

export default function DiskDrive(props) {
  return (
    <Wrapper
      style={{ backgroundImage: `url(${diskDrive})` }}
      className={props.className}
    />
  );
}

DiskDrive.propTypes = {
  className: PropTypes.string
};

DiskDrive.defaultProps = {
  className: ''
};
