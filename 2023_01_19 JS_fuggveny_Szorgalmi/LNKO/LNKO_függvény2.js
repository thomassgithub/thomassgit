<script>
//LNKO paraméterrel, visszatérési értékkel
function LNKO(szamEgy, szamKetto){
	let lnko=1;
    for(let i=2;i<=szamEgy;i++){
    	if(szamEgy%i==0 && szamKetto%i==0){
    		lnko=i;
    	}
    }
    document.write(`A ${szamEgy} és ${szamKetto} legnagyobb közös osztója: ${lnko}`);
    return lnko;
}
LNKO(10,3);
</script>