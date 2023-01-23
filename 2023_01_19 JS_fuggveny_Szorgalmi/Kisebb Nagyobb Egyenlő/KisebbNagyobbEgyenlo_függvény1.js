<script>
//Kisebb Nagyobb Egyenlő paraméter NÉLKÜL és visszatérési érték NÉLKÜL
let szamEgy=Math.round(Math.random()*10);
let szamKetto=Math.round(Math.random()*10);
function Nagyobb(){
	document.write(`A ${szamEgy} nagyobb mint ${szamKetto}<br>`);
}
function Kisebb(){
	document.write(`A ${szamEgy} kisebb mint ${szamKetto}<br>`);
}
function Egyenlo(){
	document.write(`A ${szamEgy} és a ${szamKetto} egyenlő<br>`);
}
if(szamEgy>szamKetto){
	document.write(Nagyobb());
}
else if(szamEgy<szamKetto){
	document.write(Kisebb());
}
else{
	document.write(Egyenlo());
}
</script>