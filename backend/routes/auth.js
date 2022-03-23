const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        sa: 'sdf',
        num: 55
    }
    res.json(obj);
})

module.exports = router