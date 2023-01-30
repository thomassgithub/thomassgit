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
	let metszet=[];
    for(let i=0;i<aHalmaz.length;i++){
    	for(let j=0; j<bHalmaz.length;j++){
        	
        	if(aHalmaz[i]==bHalmaz[j]){
            let szerepelE=false;
            	for(let k=0;k<metszet.length;k++){
                	if(aHalmaz[i]==metszet[k]){
                    	szerepelE=true;
                    }
                }
                if(szerepelE==false){
                	metszet.push(aHalmaz[i]);
                }
            }
        }
    }
    return metszet;
}
Kiirato(SzerepelE(),"A két halmaz metszete: ");
</script>