<script>
//-10 és +10 közötti random egész szám generálása paraméterrel és visszatérési érték NÉLKÜL
let randomszam=Math.round((Math.random()*20)-10);
function NegativRandomSzam(randomszam){
	if(randomszam<0){
    	document.write(`A ${randomszam} negatív<br>`);
    }
    else{
    	document.write(`A ${randomszam} NEM negatív<br>`);
    }
}
function NullaRandomSzam(randomszam){
	if(randomszam==0){
    	document.write(`A ${randomszam} nulla<br>`);
    }
    else{
    	document.write(`A ${randomszam} NEM nulla<br>`);
    }
}
function PozitivRandomSzam(randomszam){
	if(randomszam>0){
    	document.write(`A ${randomszam} pozitív<br>`);
    }
    else{
    	document.write(`A ${randomszam} NEM potitív<br>`);
    }
}
NegativRandomSzam(randomszam);
PozitivRandomSzam(randomszam);
NullaRandomSzam(randomszam);
</script>