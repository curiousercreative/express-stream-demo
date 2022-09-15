#! /usr/bin/env node
const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendStatus(204));
app.post('/', (req, res) => {
  console.info('upload request begin');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  let progress = 0;

  // stream file upload progress back to client
  req.on('data', chunk => {
    progress += chunk.length;
    res.write(`\n${progress}`);
  });

  req.on('end', () => {
    console.info(`upload request ended with size: ${progress}`);
    res.end();
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.info(`Express running → PORT ${server.address().port}`);
});
