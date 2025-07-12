const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

const dbPath = './users.json';

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  let users = [];
  if (fs.existsSync(dbPath)) {
    users = JSON.parse(fs.readFileSync(dbPath));
  }
  users.push({ username, email, password });
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
  res.send('تم التسجيل بنجاح');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (fs.existsSync(dbPath)) {
    const users = JSON.parse(fs.readFileSync(dbPath));
    const user = users.find(u => (u.email === email || u.username === email) && u.password === password);
    if (user) return res.send('تم تسجيل الدخول بنجاح');
  }
  res.send('بيانات الدخول غير صحيحة');
});

app.listen(PORT, () => console.log('الخادم يعمل على http://localhost:' + PORT));
