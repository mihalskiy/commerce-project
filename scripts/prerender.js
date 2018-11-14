const { run } = require("react-snap");

run({
  include: [
    "/projects/smart-sparrow",
    "/projects/slice"
  ],
  crawl: false,
  skipThirdPartyRequests: true,
  headless: false
});
