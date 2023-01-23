<script>
//-10 és +10 közötti random egész szám generálása paraméter NÉLKÜL és visszatérési értékkel
let randomszam=Math.round((Math.random()*20)-10);
function NegativRandomSzam(){
	return randomszam;
}
function NullaRandomSzam(){
	return randomszam;
}
function PozitivRandomSzam(){
	return randomszam;
}
if(randomszam<0){
	document.write(`A ${NegativRandomSzam()} negatív`);
}
else if(randomszam>0){
	document.write(`A ${PozitivRandomSzam()} pozitív`);
}
else{
	document.write(`A ${NullaRandomSzam()} nulla`);
}
</script>