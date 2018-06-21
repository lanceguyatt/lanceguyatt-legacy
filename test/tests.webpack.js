// Create a Webpack require context so we can dynamically require our
// project's modules. Exclude test files in this context.
const projectContext = require.context('../client/', true, /index\.js$/);
// Extract the module ids that Webpack uses to track modules.
const projectModuleIds = projectContext
  .keys()
  .map((module) => String(projectContext.resolve(module)));
beforeEach(() => {
  // Remove our modules from the require cache before each test case.
  projectModuleIds.forEach((id) => delete require.cache[id]);
});
