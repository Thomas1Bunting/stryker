module.exports = function (config) {
  config.set({
    mutate: ['src/*.js'],
    testFramework: 'jasmine',
    testRunner: 'karma',
    reporters: ['clear-text', 'html'],
    maxConcurrentTestRunners: 2,
    karma: {
      config: {
        files: ['src/*.js', 'test/*.js']
      }
    },
    mutator: 'javascript'
  });
};
