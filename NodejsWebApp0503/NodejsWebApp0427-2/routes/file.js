var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var path = require("path");

function sanitizeFile(file, cb) {
    var fileExts = ['png', 'jpg', 'jpeg'];
    var isAllowedExt = fileExts.includes(
        file.originalname.split('.')[1].toLowerCase());
    var isAllowedMimeType = file.mimetype.startsWith("image/");
    if (isAllowedExt && isAllowedMimeType) {
        return cb(null, true);
    }
    else {
        cb('不允許的檔案');
    }
        }

var upload = multer({
    storage: multer.diskStorage({
        destination: 'uploads1/',
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }),
    limits: {
        fileSize:2048000
    },
    fileFilter: function (req, file, cb) {
        sanitizeFile(file, cb);
    }
}).array("file1", 10);

//===============================
router.route('/list').get(function (req, res) {
    // var FileArray = [];
    fs.readdir("uploads1", function (err, files) {
        console.log(files);
//        files.forEach(function (file) {
//            var filepath = path.join("uploads1", file);
//            console.log(filepath);
//            FileArray.push({ filename: file, filepath: filepath });
//        });
        res.render("pages/file/list", { files: files });
    });
});

router.route('/upload').get(function (req, res) {
    res.render("pages/file/upload");
}).post(function (req, res) {
    upload(req, res, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("檔案上傳成功!");
            res.redirect("/file/list");
        }
    });
});

router.get('/download/:filename', function (req, res) {
    var filename = req.params.filename;
    var fullname = path.resolve(path.join('uploads1', filename));
    console.log(`download:${fullname}`);
    res.download(fullname);
})

//===============================

module.exports = router;