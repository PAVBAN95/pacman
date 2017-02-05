var y = 650;
var temp = screen.height/2;
var hack = -600;

// 	function moveCsec(){
// 		var x = document.getElementById('movingGang').offsetTop;
// 		x++;


// 		if(temp<20)
// 			return;
// 		document.getElementById('movingGang').style.display = "block";
// 		document.getElementById('movingGang').style.top = x+'px';
// 		if(temp<-30){
// 			return;
// 		}
// 			setTimeout(function () {
// 	        moveGang(--temp);
// 	    }, 1);
// 	}	

// 	function movePac(){
// 		var a = document.getElementById('rope').offsetTop;
// 		var b = document.getElementById('rope').offsetLeft;
// 		var x = document.getElementById('movingPac').offsetTop;
// 		var y = document.getElementById('movingGang').offsetTop;
// 		var z = document.getElementById('playQuit').offsetTop;
// 		x++;
// 		var h = document.getElementById('hangpac').offsetTop;
// 		if(a<0)
// 			a++;
// 		h++;
// 		if(temp<350){
// 			document.getElementById('playQuit').style.zIndex = "50";
// 			z--;
// 		}
// 		if(temp-100>0)
// 			y++;
// 		if(temp<0)
// 			x-=2;
// 		document.getElementById('movingPac').style.top = x+'px';
// 		document.getElementById('rope').style.top = a+'px';
// 		document.getElementById('movingGang').style.top = y+'px';
// 		document.getElementById('playQuit').style.top = z+'px';
// 		document.getElementById('hangpac').style.top = h+'px';
// 		console.log(temp);
// 		if(temp<30){
// 			// temp = screen.height/2;
// 			// moveGang();
// 			return;
// 		}
// 		// document.getElementById('movingPac').innerHTML = "<img src='images/pacman.png' width='700px' height='500px'>";
// 			setTimeout(function () {
// 	        movePac(--temp);
// 	    }, 1);

// }

	
	function move(i) {

	    setTimeout(function(){
	    document.getElementById("movingDiv").className = "final";
	},500);
	    document.getElementById("csec").className = "final";

	    document.getElementById("hackathon").className = "final";

	    setTimeout(function(){
	    	document.getElementById("movingPac").className = "final";
	    	document.getElementById("hangpac").className = "final";
	   		document.getElementById("playQuit").className = "final";

	    }, 2000);
	    setTimeout(function(){
	    	document.getElementById("rope").className = "final";

	    }, 3000);


	    

	}