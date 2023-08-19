const express = require('express');
const path = require('path')
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(require('cors')())
const db = require('./models/db.js');
const { Employee } = db;
app.use(express.static(path.join(__dirname, 'public')));
app.post('/insert', async (req, res) => {
  const { body } = req;
  console.log({ body });
  try {
    await Employee.create(body).then(() => {
      res.send('ok')
    }).catch((err) => {
      console.log(err);
      res.send('Failed')
    })
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
app.post('/delete', async (req, res) => {
  const { body } = req;
  try {
    await Employee.destroy({
      where: {
        empId: body.empId
      },
      force: true
    }).then(() => {
      res.send('ok')
    })
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
app.post('/update', async (req, res) => {
  const { body } = req;
  const { empId } = body
  try {
    await Employee.update(body, {
      where: {
        empId,
      },
    }).then(() => {
      res.send('ok')
    })
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
app.get('/fetch', async (req, res) => {
  try {
    const users = await Employee.findAll();

    res.send(JSON.stringify(users));
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
app.post('/search', async (req, res) => {
  const { body } = req;
  const { value } = body
  try {
    let users = await Employee.findAll();
    if (value != '') {
      users = JSON.parse(JSON.stringify(users)).filter((val) => {
        for (const v in val) {
          if (val[v].toString().toLowerCase().includes(value.toLowerCase())) {
            return true
          }
        }
        return false
      })
      console.log(users);
    }
    res.send(JSON.stringify(users));
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

app.set("port", process.env.PORT || 5500);
app.set("host", process.env.HOST || "localhost");

db.sequelize.sync().then(function () {
  app.listen(app.get("port"), function () {
    console.log(
      "%s server listening at http://%s:%s",
      process.env.NODE_ENV,
      app.get("host"),
      app.get("port")
    );
  });
})

