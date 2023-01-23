<script>
//Kör kerületének és területének a kiszámítása paraméter NÉLKÜL és visszatérési érték NÉLKÜL
let radius=4;
function KorKerulet(){
    let kerulet=2*radius*Math.PI;
    document.write(kerulet);
}
function KorTerulet(){
	let terulet=radius*radius*Math.PI;
    document.write(terulet);
}
KorKerulet();
document.write("<hr>");
KorTerulet();
document.write("<hr>");
</script>