const router = require('express').Router();
const File = require('../models/file');
const {v4: uuid4} = require('uuid');

router.get('/:uuid', async(req,res, next) => {
    
    const file = await File.findOne({uuid : req.params.uuid});
    if(!file){
        return res.render('download', {error: 'Link not found'});
    }
 
    return res.render('download', {
        uuid: file.uuid,
        filename : file.filename, 
        filesize: file.size,
        download: `${process.env.APP_BASED_URL}/files/download/${file.uuid}`
    });
    
});



module.exports = router;