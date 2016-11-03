var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: '标题小爬虫'});

});

/* GET home page. */
router.get('/list1', function(req, res, next) {
	superagent
	.get('http://tech.ifeng.com/listpage/803/1/list.shtml')
	.end(function (err, sres) {
	 	var $ = cheerio.load(sres.text,{decodeEntities: false});
		var list='';
		var title=$('title').html();
      $('.zheng_list').each(function (idx, element) {
        var $element = $(element);
        if(idx==0){
        	list += '<li><h2>'+(idx+1)+$element.find('h1').html()+'</h2><p class="pcon">'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }else{
        	list += '<li><h2>'+(idx+1)+$element.find('h2').html()+'</h2><p class="pcon">'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }
        
      });

		res.render('list', { title: title, list: list });
	});
  
});


router.get('/list2', function(req, res, next) {
	superagent
	.get('http://tech.ifeng.com/listpage/803/1/list.shtml')
	.end(function (err, sres) {
	 	var $ = cheerio.load(sres.text,{decodeEntities: false});
		var list='';
		var title=$('title').html();
      $('.zheng_list').each(function (idx, element) {
        var $element = $(element);
        if(idx==0){
        	list += '<li><h2>'+(idx+1)+$element.find('h1').html()+'</h2><p>'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }else{
        	list += '<li><h2>'+(idx+1)+$element.find('h2').html()+'</h2><p>'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }
        
      });

		res.render('list', { title: title, list: list });
	});
  
});

router.get('/list3', function(req, res, next) {
	superagent
	.get('http://tech.ifeng.com/listpage/803/1/list.shtml')
	.end(function (err, sres) {
	 	var $ = cheerio.load(sres.text,{decodeEntities: false});
		var list='';
		var title=$('title').html();
      $('.zheng_list').each(function (idx, element) {
        var $element = $(element);
        if(idx==0){
        	list += '<li><h2>'+(idx+1)+$element.find('h1').html()+'</h2><p>'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }else{
        	list += '<li><h2>'+(idx+1)+$element.find('h2').html()+'</h2><p>'+$element.find('.zxbd').find('p').find('a').html()+'</p></li>';
        }
        
      });

		res.render('list', { title: title, list: list });
	});
  
});

module.exports = router;
