module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'new-cap': 0,
    'prettier/prettier': 'error',
    'react/require-extension': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
