const express = require('express');
const plantsRouter = require('./routes/plants.router');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('build'));
app.use('/api/plants', plantsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
