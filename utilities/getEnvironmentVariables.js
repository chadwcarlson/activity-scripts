function getEnvironmentVariables() {
    return activity.payload.deployment.variables.reduce(
      (vars, { name, value }) => ({
        ...vars,
        [name]: value,
      }),
      {}
    );
  }
