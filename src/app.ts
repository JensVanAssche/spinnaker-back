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
    origin: "https://www.spinnaker-sport.be,http://localhost:3000,http://localhost:3001".split(
      ","
    ),
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

app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);

app.use(`/api`, require(`./routes/`).routes);

app.get("*.js", function(req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", "text/javascript");
  next();
});

app.get("*.css", function(req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", "text/css");
  next();
});

app.use(express.static("build/data/img"));
app.use(express.static("build/data/pdf"));
app.use(express.static("build/data/site"));

app.get("*", function(_req, res) {
  res.sendFile("data/site/index.html", { root: __dirname });
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
