
function myfunction(){
		const bierp=2.50;
		const frisp=2;
		const wijnp=3;
		const kleinballenp=5;
		const grootballenp=8;
		var prize=0;

		while(true){
		var order = prompt("Welke bestelling wilt u toevoegen bier, fris, wijn ,snack of type stop in om de rekening te krijgen?");
		if (order == "bier"){
			var bier = prompt("hoeveel bier wilt u?")
			var prijs = bier *bierp;
			document.write("bier:" + bier +":"+ "\u20AC"+bier*bierp +'<br>')
			prize+=prijs
			
		}//if bier
		if (order == "fris"){
			var fris = prompt("hoeveel fris wilt u?")
			var prijs = fris *frisp;
			document.write("fris:" + fris +":"+"\u20AC"+fris*frisp+'<br>')
			prize+=prijs
		}//if fris

		if (order == "wijn"){
			var wijn = prompt("hoeveel glazen wijn wilt u?")
			var prijs = wijn *wijnp;
			document.write("wijn:" + wijn+":"+ "\u20AC"+wijn*wijnp +'<br>')
			prize+=prijs
		}// if wijn
		
		if (order =="snack"){
			var bitterbal =prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)")
				if (bitterbal =="8"){
					var kleinballen = prompt("hoevaak wilt u deze keuze?")
					var prijs = kleinballen *kleinballenp;
					document.write("8x bitterballen:"+kleinballen+":"+ "\u20AC"+kleinballen*kleinballenp+"<br>")
					prize+=prijs
			}
			else if(bitterbal=="16"){
				var grootballen = prompt("hoevaak wilt u deze keuze?")
				var prijs = grootballen *grootballenp;
				document.write("16x bitterballen:"+grootballen+":"+ "\u20AC"+grootballen*grootballenp+"<br>")
				prize+=prijs
			}

			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16")
			}
		}//if snack
			

		else if (order =="stop"){
		document.write("totaalprijs:"+prize+"euro")
		return false;

		}
	}//for loop
	
	}//myfunction


myfunction();