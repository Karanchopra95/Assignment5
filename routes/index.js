const express= require('express')
const router = express.Router();
router.get('/', (req,res,next) => {
    res.render('Project',{title:'These are My projects'})
})

//without this line the code wil not work and it also makes the code public
module.exports = router;
    