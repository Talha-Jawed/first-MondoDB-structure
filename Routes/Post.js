const express = require("express");
const router = express.Router();
const User = require('../model/User')
const hash = require('bcrypt')


// router.post('/register' , (req, res)=>{
//     const user = req.body;
//     const hash = hash()
// })

router.post("/add", (req, res) => {
    console.log("add request chal rahi hai");
    console.log(req.body);
    const user = new User(req.body)

    user.save()
        .then((success) => { res.send(success) })
        .catch(e => { res.send(500, { message: e.message }) })
})


module.exports = router;