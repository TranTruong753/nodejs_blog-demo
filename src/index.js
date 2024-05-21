import express from 'express';
import morgan from 'morgan';
import { engine  } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from "url";

// const express = require('express')
// const morgan = require('morgan')
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("PATH",__dirname);


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', engine ({
  extname: '.hbs' // đổi đuôi handlebars => hbs
}));
// handlebars theme
app.set("view engine", ".hbs");
app.set("views", path.resolve(__dirname, "./resources/views"));

// morgen hiện get post
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.render("home");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})