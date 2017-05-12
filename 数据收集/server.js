var express = require('express');
var app = express();
app.use(express.static('www'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var fs = require('fs');

app.post('/api/regist',function(req,res){
	console.log(req.body);
	
	
	//判断存储用户资料的文件夹是否存在，如果不存在就创建
//	fs.exists('./allUsers/',function(ex){
//		if(!ex){
//			fs.mkdir('./allUsers/',function(err){
//				if(err){
//					console.log('创建失败')
//				}
//				//存储用户资料
//				saveUser()
//			})
//		}else{
//			//存储用户资料
//			saveUser()
//		}
//	})
	
	
	//保存用户资料
//	function saveUser(){
//		//先判断用户名是否被占用
//		var fileName = './allUsers/'+req.body.account+'.json'
//		fs.exists(fileName,function(ex){
//			if(ex){
//				res.send('该用户名已被占用')
//			}else{
//				req.body.psw = md5(req.body.psw)
//				var s = JSON.stringify(req.body);
//				
//				fs.writeFile(fileName,s,function(err){
//					if(!err){
//						res.send('注册成功')
//					}
//				})
//			}
//		})
//	}
//	res.send('提交成功')
})




app.listen(8000,function(){
	console.log('服务器已运行......')
});
