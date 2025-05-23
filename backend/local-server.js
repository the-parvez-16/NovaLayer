const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '..'))); 

// API Route
app.post('/submit-form', (req, res) => {
  res.send('Form submission handled (local)');
});

// Page Routes
const pages = {
  '/home': 'src/service-pages/home.html',
  '/service/web-development': 'src/service-pages/service-webdev.html',
  '/service/logo-design': '../public/src/service-pages/service-logo.html',
  '/service/script-writing': '../public/src/service-pages/service-script.html',
  '/service/thumbnail-design': '../public/src/service-pages/service-thumb.html',
  '/service/video-production': '../public/src/service-pages/service-video.html',
  '/service/branding': '../public/src/service-pages/service-brand.html'
};

Object.entries(pages).forEach(([route, file]) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', file));
  });
});

// Root and fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});