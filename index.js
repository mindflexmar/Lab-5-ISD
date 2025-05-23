const express = require('express');
const app = express();
const port = 3000;

app.get('/info', (req, res) => {
  const moodleLogin = req.query.login || 'невідомий';
  res.send(`
    <!DOCTYPE html>
    <html lang="uk">
    <head>
      <meta charset="UTF-8">
      <title>Дані студента</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      <style>
        body { font-family: 'Roboto', sans-serif; margin: 20px; text-align: center; }
        h1 { color: #333; }
        p { font-size: 18px; }
      </style>
    </head>
    <body>
      <h1>Дані студента</h1>
      <p>Логін у Moodle: ${moodleLogin}</p>
      <p>Прізвище: Зозуля</p>
      <p>Ім'я: Марія</p>
      <p>Курс: 2</p>
      <p>Група: ІС-34</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});