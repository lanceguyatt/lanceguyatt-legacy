import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';

import { Icon, Box, Flex } from '../common';

const WrapperList = styled(Flex)`
  list-style: none;

  li {
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: center;
    max-width: 100px;

    a {
      display: block;
      max-width: 100px;
    }

    svg {
      margin: 0 auto 5px;
    }
  }
`;

const Container = children => (
  <Box is={'nav'}>
    {children}
  </Box>
);

const List = children => (
  <WrapperList>
    {children}
  </WrapperList>
);

const Item = ({ id, name, url }) => (
  <li key={id}>
    <Link to={url}>
      <Icon name={'drawer'} width={65} height={38} />
      {name}
    </Link>
  </li>
);

// <Wrapper is={'nav'} bg={props.bg} mb={props.mb}>
//   <WrapperList direction={props.direction}>
//     {item.items.map(navItem => (
//       <li key={navItem.id}>
//         <Link to={navItem.url}>
//           <Icon name={'drawer'} width={65} height={38} />
//           {navItem.name}
//         </Link>
//       </li>
//     ))}
//   </WrapperList>
// </Wrapper>

// const Directory = (props) => {
//   const { item } = props;
//   return (
//     <Wrapper is={'nav'} bg={props.bg} mb={props.mb}>
//       <WrapperList direction={props.direction}>
//         {item.items.map(navItem => (
//           <li key={navItem.id}>
//             <Link to={navItem.url}>
//               <Icon name={'drawer'} width={65} height={38} />
//               {navItem.name}
//             </Link>
//           </li>
//         ))}
//       </WrapperList>
//     </Wrapper>
//   );
// };

const Directory = R.compose(Container, List, R.map(Item), R.prop('items'));

// Directory.propTypes = {
//   items: PropTypes.array,
// };
//
// Directory.defaultProps = {
//   items: '',
// };

export default Directory;
