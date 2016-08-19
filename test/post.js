'use strict';

var postApi = require('../module/posts/');

var path = require('path');

/** BLOG POSTS DIR **/
const postsRootDir = './test/content/posts';
postApi.scanDir(postsRootDir, ['.DS_Store', '/posts', 'posts/README.md'])
    .then(postApi.sortOutPath)
    .then(function(pathData) {
      return pathData;
    });
