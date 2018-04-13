const breakpoints = [
  480, 768,
];

const colors = {
  primary: '#6687ba',
  secondary: '#aaa',
  danger: '#ed1c24',
  dark: '#000',
  light: '#fff',
  tumbleWeed: '#e0a080',
  gray: [
    '#939393',
    '#f6f6f6',
    '#acacac',
    'rgba(175, 173, 173, 0.25)',
    'rgba(255, 255, 255, 0.75)',
  ],
};

const space = [
  0, 5, 10, 20, 40, 80, 160,
];

const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 72,
];

const lineHeights = [
  1, '1.125', '1.25', '1.5',
];

const fontWeights = {
  medium: 500,
  heavy: 600,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  small: '-0.042833333em',
};

const radii = [
  0, 1, 2, 4,
];

const borders = [
  0, '1px solid', '2px solid', '4px solid',
];

const shadows = [
  `0 1px 2px 0 ${colors.dark}`,
  `0 1px 4px 0 ${colors.dark}`,
];

const maxWidth = [
  '1220px', '400px',
];

const zIndex = [
  0, 1, 2, 3, 4,
];

const textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
};

const colorStyles = {
  alert: {
    primary: {
      borderColor: `${colors.primary}`,
      color: `${colors.primary}`,
    },
    danger: {
      borderColor: `${colors.danger}`,
      color: `${colors.danger}`,
    },
  },
};

const buttons = {
  primary: {
    color: 'dark',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'primary',
    },
  },
};

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
  zIndex,
  maxWidth,
  textStyles,
  colorStyles,
  buttons,
};


export { theme };
