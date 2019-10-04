import * as express from "express";
import * as treehouse from "tree-house";
import * as session from "express-session";
import * as dotenvSafe from "dotenv-safe";

const app: express.Application = express();

dotenvSafe.load({
  silent: true,
  allowEmptyValues: true
});

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

app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);

app.use(`/api`, require(`./routes/`).routes);

app.use(express.static("data/img"));
app.use(express.static("data/pdf"));

// treehouse.startServer(app, {
//   title: "node_server",
//   port: parseInt(process.env.PORT || "3000", 10),
//   pre: () => {},
//   post: () => {}
// });

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
