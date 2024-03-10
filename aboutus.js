const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define your member objects
const members = [
  {
    name: 'John Doe',
    image: 'images/img1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis metus vel odio efficitur mollis a eu quam.'
  },
  {
    name: 'Jane Smith',
    image: 'images/img2.jpg',
    bio: 'Proin pharetra pulvinar est, vel congue libero. Fusce in lacus sed turpis volutpat semper. Nulla vitae convallis libero.'
  },
  {
    name: 'Bob Johnson',
    image: 'images/img3.jpg',
    bio: 'Integer bibendum nunc at nunc fermentum, vel dictum velit venenatis. Duis a nisi euismod, aliquam mauris eu, imperdiet nisi.'
  }
];

// Define a route that renders your page
app.get('/aboutus', (req, res) => {
  res.render('aboutus', { members });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
