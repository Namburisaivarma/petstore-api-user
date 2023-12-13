const express = require('express');
const connection = require('../db');
const router = express.Router();

router.post('/user', (req, res) => {
  let myuser = req.body;
  var query =
    'INSERT INTO user (username,firstname,lastname,email,phone,password) VALUES(?,?,?,?,?,?)';
  connection.query(
    query,
    [
      myuser.username,
      myuser.firstname,
      myuser.lastname,
      myuser.email,
      myuser.phone,
      myuser.password,
    ],
    (err, results) => {
      if (!err) {
        return res.status(200).json({ message: 'User Added Successfully' });
      } else {
        return res.status(500).json(err);
      }
    }
  );
});

router.get('/user/login', (req, res) => {
  var query = 'select * from user';
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get('/user/username', (req, res) => {
  var query = 'select username from user';
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.put('/user/:id', (req, res) => {
  const id = req.params.id;
  let myuser = req.body;
  var query =
    'UPDATE user SET username=?,firstname=?,lastname=?,email=?,phone=?,password=? WHERE id=?';
  connection.query(
    query,
    [
      myuser.username,
      myuser.firstname,
      myuser.lastname,
      myuser.email,
      myuser.phone,
      myuser.password,
      id,
    ],
    (err, results) => {
      if (!err) {
        if (results.affectedRows == 0) {
          return res.status(404).json({ message: 'User id does not found' });
        }
        return res.status(200).json({ message: 'User Updated Successfully' });
      } else {
        return res.status(500).json(err);
      }
    }
  );
});

router.delete('/user/:id', (req, res) => {
  const id = req.params.id;
  var query = 'DELETE from user where id=?';
  connection.query(query, [id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: 'User id does not found' });
      }
      return res.status(200).json({ message: 'User Deleted Successfully' });
    } else {
      return res.status(500).json(err);
    }
  });
});

module.exports = router;
