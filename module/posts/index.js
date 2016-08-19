'use strict';

var fs = require('story-fs');
var util = require('../util/');

/**
 * scan dirs and return file/dir list
 *
 * @param {string} rootDir
 * @param {array} excludeList
 * @returns {Promise}
 */
function scanDirs(rootDir, excludeList) {
  var result = [];
  return new Promise(function(resolve, reject) {
    fs
        .walk(rootDir)
        .on('data', function(item) {
          if (!util.excludeFileByPath(item.path, excludeList)) {
            result.push(item.path);
          }
        })
        .on('end', function() {
          resolve(result);
        })
        .on('error', function(err) {
          reject(err);
        });
  });
}

/**
 * Sortout file/dir path list
 *
 * @param {array} pathList
 * @returns {Promise}
 */
function sortOutPath(pathList) {
  return new Promise(function(resolve, reject) {
    try {
      var postFiles = [];
      var dirs = [];
      var metaFiles = [];

      pathList.map(function(path) {
        if (util.matchFileByExt(path, '.md')) {
          return postFiles.push(path);
        }
        if (util.matchFileByExt(path, '.json')) {
          return metaFiles.push(path);
        }
        return dirs.push(path);
      });
      resolve({
            'post': postFiles,
            'meta': metaFiles,
            'dir': dirs
          }
      );
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  scanDir: scanDirs,
  sortOutPath: sortOutPath,
  fs: fs
};
