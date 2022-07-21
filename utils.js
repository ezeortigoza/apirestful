import multer from 'multer';

//Pensar donde se almacenara

const storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,"public/img")
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const uploader = multer({storage:storage})

export default uploader;