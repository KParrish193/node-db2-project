const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());




// function getById(id) {
//     return db("cars")
//         .where({ id })
//         .first();
// }

server.get("/", (req, res) => {
    db.select("*")
        .from("cars")
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "there was an error with this request" });
        });
});

// server.get("/:id", (req, res) =>{
//     getById(req.params.id)
//     .then(car => {
//         res.status(200).json(car);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({ error: "there was an error with this request" });
//     });
// });

server.post("/", (req, res) => {
    db("cars")
        .insert(req.body, "id")
        .then(ids => {      
            return getById(ids[0])
                .then(inserted => {
                res.status(201).json(inserted);
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "there was an error with this request" });
        });
})

module.exports = server;