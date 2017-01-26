var express = require('express'),
    app = express(),
    serv = require('http').Server(app);
    ;
    
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/public/index.html');
    });
    app.use('/client', express.static(__dirname + '/public'));
    
    serv.listen(4000);
    console.log('Server started');
      
    var SOCKET_LIST = {};
    var PLAYER_LIST = {};
    
	function Point() {
		this.x = 0;
		this.y = 0;
	}
    var Player = function(id){
        
		this.points = [];
		this.color = "";
		
		this.addPoint = function (_p) {
			this.points[] = ;
		}
		
    }
	
	function Game () {
		var max = 5;
		var players = [];
		var jeton = 0;
		
		var sumNbPoint = {
			_p1: 0,
			_p2: 0
		}
		
		this.init = function() {
			players = [new Players(), new Players()];
			
		}
		
		this.setJeton = function (_id)  {
			jeton = _id;
		};
		
		this.isPartieGagnant = function () {
			for(var player as players) {
								
				for(var point as player.points) {
					
				}
				
			}
		}
	}
    
    var io = require('socket.io')(serv,{});
    io.sockets.on('connection', function(socket){
        socket.id = Math.random();
        SOCKET_LIST[socket.id] = socket;
        
        var player = Player(socket.id);
        PLAYER_LIST[socket.id] = player;
        
        socket.on('disconnect', function(){
           
        });
        socket.on('keyPress', function(data){
            
        }); 
    });
    
    setInterval(function(){
        var pack = [];
        for(var i in PLAYER_LIST){
            var player = PLAYER_LIST[i]; 
            player.updatePosition();
            pack.push({
                x:player.x,
                y:player.y,
                number:player.number
            });
        }
        for(var i in SOCKET_LIST){
            var socket = SOCKET_LIST[i];
            socket.emit('newPosition',pack);  
        }
		
		var game = new Game();
		
		
      
    },1000/25);
    



    
    
  