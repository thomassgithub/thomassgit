<script>
function randomSzam(alsoHatar, felsoHatar){
	let also;
	let felso;    
	if(alsoHatar<felsoHatar){
		    also=alsoHatar;
            felso=felsoHatar;            
    }
    else{
		    also=felsoHatar;
            felso=alsoHatar;
    }
    let generaltSzam=(Math.round(Math.random()*(felso-also)))+also;  
    return generaltSzam;
}
function aHalmazGenerator(halmazMeret,legkisebbErtek,legnagyobbErtek){
	let generaltTomb=[];
    for(let i=0;i<halmazMeret;i++){
    	generaltTomb.push(randomSzam(legkisebbErtek,legnagyobbErtek));
    }
    return generaltTomb;
}
function bHalmazGenerator(halmazMeret,legkisebbErtek,legnagyobbErtek){
	let generaltTomb=[];
    for(let i=0;i<halmazMeret;i++){
    	generaltTomb.push(randomSzam(legkisebbErtek,legnagyobbErtek));
    }
    return generaltTomb;
}
function Kiirato(kiirando, elnevezes){
	document.write(`<br>${elnevezes} elemei: `);
	for(let i=0;i<kiirando.length;i++){
    	document.write(kiirando[i]+",");
    }
}
let aHalmaz=aHalmazGenerator(10,1,20);
let bHalmaz=bHalmazGenerator(10,1,20);
Kiirato(aHalmaz,"A halmaz");
Kiirato(bHalmaz,"B halmaz");
function SzerepelE(){
	let BkulA=[];
    for(let i=0;i<bHalmaz.length;i++){
    	let szerepelE=false;
    	for(let j=0; j<aHalmaz.length;j++){
        	if(bHalmaz[i]==aHalmaz[j]){
            szerepelE=true;
            }
        }
        if(szerepelE==false){
        	BkulA.push(bHalmaz[i]);
        }
    }
    return BkulA
}
Kiirato(SzerepelE(),"B különbség A halmaz: ");
</script>