import system from 'system-components';
import styled from 'styled-components';

// creates a Box with default props tied to your theme
const Wrapper = system(
  'space',
  'width',
  'color',
  'borderWidth',
);

const Foo = styled(Wrapper)`
  background-color: red;
`;

export { Foo };
