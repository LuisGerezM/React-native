module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: [
    true,
    {
      singleline: 'never',
      multiline: {
        objects: 'always',
        arrays: 'always',
        functions: 'never',
        tyypeliterals: 'ignore'
      }
    }
  ]
};
