import Express from 'express';

const app = new Express();
const PORT = 3000;

app.use('/', Express.static('./game'))
app.listen(PORT, () => console.log('Der Server ist gestartet'));