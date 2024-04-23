module.exports = {
    hooks: {
      readPackage(packageJson) {
        if (packageJson.dependencies && packageJson.dependencies['graphql']) {
          packageJson.dependencies['graphql'] = '15.5.0';
        }
        return packageJson;
      },
    },
  };
  