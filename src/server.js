const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '/../public');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`Server is started on PORT:${PORT}`));

// console.log(__dirname + "/../public");
// console.log(path.join(__dirname, '/../public'));