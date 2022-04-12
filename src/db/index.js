const { connect } = require("mongoose");

const uri = "mongodb+srv://karthik:6ja30zkKTeEWaXAm@cluster0.wqclx.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)