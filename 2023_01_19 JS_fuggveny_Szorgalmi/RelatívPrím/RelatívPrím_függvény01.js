<script>
//Relatív prím paraméterrel, visszatérési érték NÉLKÜL
function RelativPrim(szamEgy, szamKetto){
	let lnko=1;
    for(let i=2;i<=szamEgy;i++){
    	if(szamEgy%i==0 && szamKetto%i==0){
    		lnko=i;
    	}
    }

document.write("<hr>");
if(lnko==1){
    document.write(`A ${szamEgy} és ${szamKetto} Relatív prím`);
}
else{
    document.write(`A ${szamEgy} és ${szamKetto} NEM relatív prím, legnagyobb közös osztója: ${lnko}`);
    }
}
RelativPrim(5,8);
RelativPrim(5,10);
</script>