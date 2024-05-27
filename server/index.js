const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../api.json");

app.get("/schema", (req, res) => {
  res.json(swaggerDocument);
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
