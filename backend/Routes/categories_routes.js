const express = require("express");

const categoriesController = require("../controllers/categoriesController")
const { imageHandlingMW } = require('../middlewares/ImageHandlineMW');

const router = express.Router();
const FirebaseStorage = require('multer-firebase-storage')

const multer = require('multer');

// const upload = multer();

const upload = multer({
      storage:FirebaseStorage({
            bucketName:process.env.FB_BUCKET,
            credentials: {
                  clientEmail: 'hussein.alaa12@gmail.com',
                  privateKey: process.env.FB_APIKEY,
                  projectId: process.env.FB_PROJECTID,
                }
      })
})
const categoriesData = (req,res,next)=>{
      const {
        file
       } = req
  
       if(file){
        req.mypath = "./public/uploads/categories/"
        next()
       }else{
        next()
       }
       
    }

router.route('/api/categories')
      .get(categoriesController.getAllCategories)
      .post(upload.single("catimage"),categoriesData,imageHandlingMW,categoriesController.addCategory)


router.route('/api/categories/:catId')
      .delete(categoriesController.deleteCategory)
      .put(upload.single("catimage"),categoriesData,imageHandlingMW,categoriesController.updateCategory)
      .get(categoriesController.getCategory)


module.exports = router; 