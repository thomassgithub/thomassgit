<script>
//Kör kerületének és területének a kiszámítása paraméterrel és visszatérési értékkel
let radius=Number(prompt("Add meg a kör sugarát: "));
function KorKerulet(radius){	
	let kerulet=2*radius*Math.PI;
	return kerulet;
}
function KorTerulet(radius){
	let terulet=radius*radius*Math.PI;
	return terulet;
}
document.write(KorKerulet(radius));
document.write("<hr>");
document.write(KorTerulet(radius));
document.write("<hr>");
</script>