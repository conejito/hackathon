const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("../../serviceAccountKey.json");

class Database {
  constructor() {
    this.firebase = admin;
    this.firebase.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://conejito-si.firebaseio.com",
    });
  }

  select(ref, value) {
    return new Promise((resolve, reject) => {
      this.firebase.database().ref(ref).once(value, (snapshot) => {
        resolve(snapshot.val());
      });
    });
  }

  insert(ref, obj) {
    return new Promise((resolve, reject) => {
      this.firebase.database().ref(ref).set(obj, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }

  update(ref, obj) {
    return new Promise((resolve, reject) => {
      const toUpdate = {};
      toUpdate[ref] = obj;
      this.firebase.database().ref().update(toUpdate, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }

  delete(ref, obj) {
    return new Promise((resolve, reject) => {
      const toUpdate = {};
      toUpdate[ref] = null;
      this.firebase.database().ref().update(toUpdate, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
}

module.exports = new Database();