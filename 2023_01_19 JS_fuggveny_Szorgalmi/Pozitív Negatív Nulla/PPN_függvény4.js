<script>
//-10 és +10 közötti random egész szám generálása paraméteres és visszatérési értékkel
let randomszam=Math.round((Math.random()*20)-10);
function NegativRandomSzam(randomszam){
	return randomszam;
}
function NullaRandomSzam(randomszam){
	return randomszam;
}
function PozitivRandomSzam(randomszam){
	return randomszam;
}
if(randomszam<0){
	document.write(`A ${NegativRandomSzam(randomszam)} negatív`);
}
else if(randomszam>0){
	document.write(`A ${PozitivRandomSzam(randomszam)} pozitív`);
}
else{
	document.write(`A ${NullaRandomSzam(randomszam)} nulla`);
}
</script>