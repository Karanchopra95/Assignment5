const express= require('express')
const router = express.Router();
router.get('/', (req,res,next) => {
    res.render('Project',{title:'These are My projects'})
})

//makes the code public,without this line the code won't work
module.exports = router;
    