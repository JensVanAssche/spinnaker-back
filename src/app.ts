import * as express from "express";
import * as treehouse from "tree-house";

const app: express.Application = express();

treehouse.setBodyParser(app, "*");
treehouse.setBasicSecurity(app, "*", {
  cors: {
    origin: (process.env.ALLOWED_CORS_DOMAINS || "*").split(","),
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    allowedHeaders: [
      "Cache-Control",
      "Pragma",
      "Origin",
      "Authorization",
      "Content-Type",
      "X-Requested-With",
      "Set-Cookie"
    ],
    credentials: true
  }
});

app.get("/", (_req, res) => res.send("server running"));

app.use(`/api`, require(`./routes/`).routes);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
