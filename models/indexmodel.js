

const db = require("./connection");


function indexmodel() {
    this.register = (userdetail) => {
      return  new Promise((resolve, reject) => {
            
            db.collection("student").insertOne(userdetail, (err) => {
                if (err)
                    reject(err);
                else
                    resolve("true");
            }
            )
        });
    
    }



   


    this.update = (userdetail) => {
        us = userdetail.password.toString;
        console.log(us);
        px = userdetail.passu;
        console.log(us);
        nx = userdetail.nameu;
        console.log(us);
        return new Promise((resolve, reject) => {
            db.collection("student").updateOne({password:us},{ $set: { password: px,name :nx }}, (err, datas) => {
                if (err) {
                    reject(err)
                }
                else
                    resolve("true")
            })
        })
    }
}
module.exports = new indexmodel();