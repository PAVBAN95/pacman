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
		/*var x = document.getElementById('movingDiv').offsetLeft;
		var csec = document.getElementById('csec').offsetLeft;
		if(csec <=1050)
			csec+=10;
		hack+=10;
		x+=10;
		document.getElementById('movingDiv').style.left = x+'px';
		document.getElementById('csec').style.left = csec+'px';
		document.getElementById('hackathon').style.right = hack+'px';
		console.log("i "+i);
		if(Math.floor(i)==250){
			document.getElementById('pacDown').innerHTML = "<img src='images/pacmanDown.png'>";
		}
	    if (i < 0){
	    	document.getElementById('hackathon').style.zIndex = "25";
	    	movePac();
	    	return;
	    }

	    setTimeout(function () {
	        move(--i);
	    }, 40);*/
	    document.getElementById("movingDiv").className = "final";
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