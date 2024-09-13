const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article 2",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Test article",
      createdAt: new Date(),
      description: "test description 2",
    },
  ];
  res.render("articles/index", { articles });
});

app.listen(5000);
