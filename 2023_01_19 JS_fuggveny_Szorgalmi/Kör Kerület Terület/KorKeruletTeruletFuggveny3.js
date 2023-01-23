<script>
//Kör kerületének és területének a kiszámítása paraméter NÉLKÜL és visszatérési értékkel
let radius=4;
function KorKerulet(){
    let kerulet=2*radius*Math.PI;
    return kerulet;
}
function KorTerulet(){
	let terulet=radius*radius*Math.PI;
    return terulet;
}
document.write(KorKerulet());
document.write("<hr>");
document.write(KorTerulet());
document.write("<hr>");
</script>