module.exports = {
  info: {
    version: "1.0.0",
    title: "Ecclesiast API",
    description: "ecclesiast-api"
  },
  openapi: "3.0.0",
  servers: [
    {
      url: "http://localhost:3030"
    }
  ],
  apis: [ "src/bus/**/sw.yaml", "src/bus/**/index.**" ]
};
