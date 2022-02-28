const fs = require('fs')
const zlib = require('zlib')
class FileUtil{
    createFile(fileName, content){
        fs.writeFile(fileName, content, (err) => {
            console.log(err);
        })
    }
    compressFile(sourceFile, destinationFile){
        const gzip = zlib.createGzip();
        const readStream = fs.createReadStream(sourceFile);
        const writeStream = fs.createWriteStream(destinationFile);
        readStream.pipe(gzip).pipe(writeStream);
    }
    decompressFile(sourceFile, destinationFile){
        const gunzip = zlib.createGunzip();
        const readStream = fs.createReadStream(sourceFile);
        const writeStream = fs.createWriteStream(destinationFile);
        readStream.pipe(gunzip).pipe(writeStream);
    }
}

module.exports = FileUtil