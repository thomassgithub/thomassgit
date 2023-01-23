<script>
//-10 és +10 közötti random egész szám generálása paraméter NÉLKÜL és visszatérési érték NÉLKÜL
let randomszam=Math.round((Math.random()*20)-10);
function NegativRandomSzam(){
    document.write(`A ${randomszam} negatív`);
}
function NullaRandomSzam(){
    document.write(`A ${randomszam} nulla`);
}
function PozitivRandomSzam(){
    document.write(`A ${randomszam} pozitív`);
}
if(randomszam<0){
	NegativRandomSzam()
}
else if(randomszam>0){
	PozitivRandomSzam();
}
else{
	NullaRandomSzam();
}
</script>