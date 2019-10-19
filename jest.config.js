module.exports = {
  "verbose": true,
  "setupFilesAfterEnv": [`./src/config/jest.setup.js`],
  "moduleNameMapper": {
    "~(.*)$": `<rootDir>/src/$1`
  }
};
