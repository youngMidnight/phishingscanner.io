const express = require('express');
var router = express.Router();
    const app =express();
    const path = require('path');
    const cors = require('cors')();
    const bodyParser = require('body-parser');
    const multer  = require('multer')
    const port =process.env.PORT || 9001;

    const storage = require('multer-gridfs-storage')({
        url: 'http://localhost:3000'
      });
    
    const upload = multer({ storage });
    router.post('/', upload, (req, res) => {

        const newreminder = new Reminders({
          category: req.body.category,
          name:req.body.name,
          type: req.body.type,
          exdate: req.body.exdate,
          location:req.body.location,
          notes:req.body.notes,
          fileID: req.file.id
        });
        newreminder.save(function(err){
          if(err){
            console.log(err);
            return;
          }
      
          res.json({ "success": "true"});
        });
      
      });

   module.exports = router;