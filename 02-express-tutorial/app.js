const express = require('express');
const app = express();
const { products } = require('./data');

var text = 'Detta är en exempeltext';
var position = text.indexOf('exempel');

if (position !== -1) {
  console.log("Delsträngen 'exempel' hittades vid position " + position + '.');
  console.log(position !== -1);
} else {
  console.log("Delsträngen 'exempel' hittades inte i texten.");
}

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products/', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/1', (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});

app.listen(5000, (req, res) => {
  console.log('Server is listening to port 5000....');
});
