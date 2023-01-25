<script>
let tomb1=[];
let tomb2=[];
let metszet=[];
for (let i=0;i<10;i++){
	tomb1.push(Math.round(Math.random()*100));
}
for (let i=0;i<10;i++){
	tomb2.push(Math.round(Math.random()*100));
}
document.write("A generált halmazok elemei:<br>" );
document.write("Első tömb: ");
for(let i=0;i<tomb1.length;i++){
	document.write(tomb1[i]+",");
}
document.write("<br>Második tömb: ");
for(let i=0;i<tomb2.length;i++){
	document.write(tomb2[i]+",");
}
for(i=0;i<tomb1.length;i++){
	for(j=0;j<tomb2.length;j++){
    	if(tomb1[i]==tomb2[j]){
        	metszet.push(tomb1[i]);
        }
        
    }
}
document.write("<br>Az alábbi számok mindkét halmazban megtalálhatóak: "+metszet);
</script>