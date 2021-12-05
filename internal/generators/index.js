module.exports = function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "Application logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "App logic name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/frontend/actions/{{lowerCase name}}.ts",
        templateFile: "./templates/actions.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/constants/{{lowerCase name}}.ts",
        templateFile: "./templates/constants.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/interceptors/{{lowerCase name}}.ts",
        templateFile: "./templates/interceptor.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/reducers/{{lowerCase name}}.ts",
        templateFile: "./templates/reducer.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/state/{{lowerCase name}}.ts",
        templateFile: "./templates/state.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/types/{{lowerCase name}}/state.d.ts",
        templateFile: "./templates/types/state.d.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/types/{{lowerCase name}}/interceptor.d.ts",
        templateFile: "./templates/types/interceptor.d.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/types/{{lowerCase name}}/actions.d.ts",
        templateFile: "./templates/types/actions.d.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../../src/frontend/types/{{lowerCase name}}/index.ts",
        templateFile: "./templates/types/index.ts.hbs",
        abortOnFail: true,
      },
    ],
  });
};
