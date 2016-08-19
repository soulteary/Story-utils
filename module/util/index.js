function excludeFileByPath(path, excludeList) {
  return excludeList.some(function(file) {
    return path.slice(file.length * -1) === file;
  });
}

function matchFileByExt(path, ext) {
  return path.slice(ext.length * -1) === ext;
}

module.exports = {
  matchFileByExt: matchFileByExt,
  excludeFileByPath: excludeFileByPath
};
