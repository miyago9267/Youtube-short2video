const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/extension.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // 壓縮等級
});

output.on('close', function() {
  console.log(`打包完成，總計 ${archive.pointer()} Bytes`);
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// 添加文件和資料夾
archive.glob('**/*', {
  ignore: ['node_modules/**', 'src/**', '*.zip'] // 排除不需要打包的文件
});

// 完成檔案添加過程
archive.finalize();
