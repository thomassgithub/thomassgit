<script>
//Kör kerületének és területének a kiszámítása paraméterrel és visszatérési érték NÉLKÜL
function KorKerulet(radius){
    let kerulet=2*radius*Math.PI;
    document.write(kerulet);
}
function KorTerulet(radius){
	let terulet=radius*radius*Math.PI;
    document.write(terulet);
}
KorKerulet(4);
document.write("<hr>");
KorTerulet(4);
document.write("<hr>");
</script>