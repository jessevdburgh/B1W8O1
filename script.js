
function myfunction(){
	

		for(i=1; i<=8; i++){
		var order = prompt("Welke bestelling wilt u toevoegen bier, fris, wijn ,snack of type stop in om de rekening te krijgen?");
		if (order == "bier"){
			var bier = prompt("hoeveel bier wilt u?")
			document.write("bier:" + bier + '<br>')
			
		}//if bier
		if (order == "fris"){
			var fris = prompt("hoeveel fris wilt u?")
			document.write("fris:" + fris +'<br>')
			
		}//if fris

		if (order == "wijn"){
			var wijn = prompt("hoeveel glazen wijn wilt u?")
			document.write("wijn:" + wijn +'<br>')
			
		}// if wijn

		if (order =="snack"){
			var bitterbal =prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)")
				if (bitterbal =="8"){
					var kleinballen = prompt("hoevaak wilt u deze keuze?")
					document.write("8x bitterballen:"+kleinballen+"<br>")

			}
			else if(bitterbal=="16"){
				var grootballen = prompt("hoevaak wilt u deze keuze?")
				document.write("16x bitterballen:"+grootballen+"<br>")
			}

			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16")
			}
		}//if snack
			

		else if (order =="stop"){
			
			return false;

		}
	}//for loop
	
	}//myfunction

