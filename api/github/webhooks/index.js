const { createNodeMiddleware, createProbot } = require("probot");

const app = require("../../../index");

module.exports = createNodeMiddleware(index, {
  probot: createProbot(),
  webhooksPath: "/api/github/webhooks",
});
