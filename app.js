var express	=require('express'),
	http	=require('http'),
	app		=express(),
	server	=http.createServer(app),
	puerto	=3000;

	server.listen(puerto);
	var io	=require('socket.io').listen(server)

	io.sockets.on('connection',function(socket){
		//console.log('Śe detecto un cliente!');

		socket.on('login',function(dato){
			var response=':D -> '+dato;
			console.log('login: '+response);
			io.sockets.emit('response',response);
		});

		socket.on('logout',function(dato){
			var respose =':( -> '+dato;
			console.log('logout: '+response);
			io.sockets.emit('response',response);
		});
	});