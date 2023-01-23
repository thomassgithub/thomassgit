<script>
//Kisebb Nagyobb Egyenlő paraméter NÉLKÜL és visszatérési értékkel
let szamEgy=Math.round(Math.random()*10);
let szamKetto=Math.round(Math.random()*10);
function Nagyobb(){
    if(szamEgy>szamKetto){
		document.write(`A ${szamEgy} nagyobb mint ${szamKetto}<br>`);
    }
    else{
    	return Kisebb();
    }
}
function Kisebb(){
	if(szamEgy<szamKetto){
		document.write(`A ${szamEgy} kisebb mint ${szamKetto}<br>`);
    }
    else{
    	return Egyenlo();
    }
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