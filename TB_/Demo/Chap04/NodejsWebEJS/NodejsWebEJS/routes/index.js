
var express = require("express")
var multer = require("multer")
var fs = require("fs")
var path = require("path")

function sanitizeFile(file, cb) {
    var fileExts = ["jpg", "jpeg", "png", "gif"];
    var isAllowedExt = fileExts.includes(file.originalname.split(".")[1].toLowerCase());
    var isAllowedMineType = file.mimetype.startsWith("image/");
    if (isAllowedExt && isAllowedMineType) {
        cb(null, true);
    }
    else {
        cb("Error occurred!");
    }
}

var upload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/',
        filename: function (req, file, callback) {
            callback(null, file.originalname);
        },
    }),    
    limits: {
        fileSize:2048000
    },
    fileFilter: function (req, file, cb) {
        sanitizeFile(file, cb);
    }
}).single("file1");

var router = express.Router();

router.get("/", function (req, res) {
    res.render('pages/index');
});

router.get("/login", function (req, res) {
    res.render('pages/login');
}).post("/login", function (req, res) {
    console.log(req.body.name);
    res.render('pages/index');
});

router.get("/upload", function (req, res) {
    res.render('pages/upload');
}).post("/upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("檔案上傳成功!");
            res.redirect("/downloadfiles");
        }
    });
});

router.get("/download/:filename", function (req, res) {
    var filename = req.params.filename;
    var fullname = path.resolve(path.join("uploads", filename));
    console.log(`download:${fullname}`);             // "download:" + fullname
    res.download(fullname);
});

function getFileSize(filename) {
    let stats = fs.statSync(filename);
    let { size } = stats;
    let i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
}

router.get('/downloadfiles', function (req, res) {
    fs.readdir("uploads", function (err, items) {
        console.log(items);
        var files = [];
        items.forEach(function (filename, index) {
            var fullname = path.resolve(path.join("uploads", filename));
            files.push({ filename: filename, filesize: getFileSize(fullname), filepath: filename });
        });
        res.render("pages/downloadfiles", {files:files})
    });
});

router.get("/:name", function (req, res) {
    console.log(req.params.name);
    res.render('pages/index');
});

router.get("*", function (req, res) {
    res.render('pages/error');
});

module.exports = router;
