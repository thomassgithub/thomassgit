<script>
//Kisebb Nagyobb Egyenlő paraméterrel és visszatérési érték NÉLKÜL
let szamEgy=Math.round(Math.random()*10);
let szamKetto=Math.round(Math.random()*10);
function Nagyobb(szamEgy, szamKetto){
	document.write(`A ${szamEgy} nagyobb mint ${szamKetto}<br>`);
}
function Kisebb(szamEgy, szamKetto){
	document.write(`A ${szamEgy} kisebb mint ${szamKetto}<br>`);
}
function Egyenlo(szamEgy, szamKetto){
	document.write(`A ${szamEgy} és a ${szamKetto} egyenlő<br>`);
}
if(szamEgy>szamKetto){
	document.write(Nagyobb(szamEgy, szamKetto));
}
else if(szamEgy<szamKetto){
	document.write(Kisebb(szamEgy, szamKetto));
}
else{
	document.write(Egyenlo(szamEgy, szamKetto));
}
</script>