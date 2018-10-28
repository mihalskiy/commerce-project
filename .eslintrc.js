module.exports = {
  extends: 'airbnb',
  rules: {
    'max-len': [1, 120, 2, { ignoreComments: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    "react/jsx-closing-tag-location": 0,
    "react/jsx-curly-brace-presence": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
  ]
};
