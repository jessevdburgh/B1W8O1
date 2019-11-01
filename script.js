
function myfunction(){
		const bierp=2.50;
		const frisp=2;
		const wijnp=3;
		const kleinballenp=5;
		const grootballenp=8;

		for(i=1; i<=8; i++){
		var order = prompt("Welke bestelling wilt u toevoegen bier, fris, wijn ,snack of type stop in om de rekening te krijgen?");
		if (order == "bier"){
			var bier = prompt("hoeveel bier wilt u?")
			document.write("bier:" + bier +":"+bier*bierp +'<br>')
			
		}//if bier
		if (order == "fris"){
			var fris = prompt("hoeveel fris wilt u?")
			document.write("fris:" + fris +":"+fris*frisp+'<br>')
			
		}//if fris

		if (order == "wijn"){
			var wijn = prompt("hoeveel glazen wijn wilt u?")
			document.write("wijn:" + wijn+":"+wijn*wijnp +'<br>')
			
		}// if wijn

		if (order =="snack"){
			var bitterbal =prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)")
				if (bitterbal =="8"){
					var kleinballen = prompt("hoevaak wilt u deze keuze?")
					document.write("8x bitterballen:"+kleinballen+":"+kleinballen*kleinballenp+"<br>")

			}
			else if(bitterbal=="16"){
				var grootballen = prompt("hoevaak wilt u deze keuze?")
				document.write("16x bitterballen:"+grootballen+":"+grootballen*grootballenp+"<br>")
			}

			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16")
			}
		}//if snack
			

		else if (order =="stop"){
		return bier, fris, wijn, kleinballen, grootballen;

		}
	}//for loop
	
	}//myfunction

var total= fris*2 + wijn*3 +bier*2.50 +kleinballen*5 +grootballen*8;
			document.write(total);