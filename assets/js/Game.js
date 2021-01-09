export class Game {
	constructor(selector, offsetleft, screenWidth) {
		let stop = false;
		let i = offsetleft;
		this.toLeft = function() {
			if(i <= 10) return;
			stop = false;
		    const myInterval = setInterval(function() {
				if(stop == true || i <= 10) clearInterval(myInterval);
        		selector.style.left = i + "px";
	    		i--;
		    },1);		
		}
		this.toRight = function() {
			if(i >= screenWidth) return;
			stop = false;
		    const myInterval = setInterval(function() {
				if(stop == true || i >= screenWidth) clearInterval(myInterval);
        		selector.style.left = i + "px";
	    		i++;
		    },1);		
		}
		this.stop = function() {
		    stop = true;
	    };
	}
}