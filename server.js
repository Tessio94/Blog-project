const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);
app.use(express.urlencoded({ extended: false }));

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
