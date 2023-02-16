//Javascript felmérő
<script>
//Fleck Tamás - Team11
//1. feladat
document.write("1. feladat<br>");
function hosszEllenor(szoveg){
	let karakterlanc=false;
  	if(szoveg.length<8){
    	karakterlanc=false
        document.write(karakterlanc);
    }
    else{
    	karakterlanc=true;
        document.write(karakterlanc);
    }
}

hosszEllenor("teszt")
document.write("<hr>");

//3. feladat
document.write("3. feladat<br>");
let vizsgaltTomb=[3,5,10,16,9];
function tombTerjedelme(vizsgaltTomb){
	let minErtek=vizsgaltTomb[0];
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i]<minErtek){
        	minErtek=vizsgaltTomb[i];
        }
    }
    document.write(`A tömb legkisebb értéke ${minErtek}<br>`);
    let maxErtek=vizsgaltTomb[0];
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i]>maxErtek){
        	maxErtek=vizsgaltTomb[i];
        }
    }
    document.write(`A tömb legnagyobb értéke ${maxErtek}<br>`);
    let tombTerjedelme=maxErtek-minErtek;
    document.write(`A tömb terjedelme ${tombTerjedelme}`);
}
tombTerjedelme(vizsgaltTomb);
document.write("<hr>");

//4. feladat
document.write("4. feladat");
const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]
function legidosebbDolgozo(Dolgozok){
	let maxIndex=0;
	for(let i=0;i<Dolgozok.length;i++){
    	if(Dolgozok[i].kor>Dolgozok[maxIndex].kor){
        	maxIndex=i;
        }
    }
    document.write(`<br>A legidősebb objektum elem indexe: ${maxIndex}`);
}
legidosebbDolgozo(Dolgozok)
document.write("<hr>");
//5. feladat
document.write("<br>5. feladat");
function fizetesEmeles(Dolgozok){
	let osszeg=0;
	for(let i=0;i<Dolgozok.length;i++){
    	osszeg=+Number(Dolgozok[i].fizetes);
    }
    let atlag=osszeg/Dolgozok.length;
    let alulFizetett=0;
    for(let i=0;i<Dolgozok.length;i++){
    	if(Dolgozok[i].fizetes<atlag){
    		alulFizetett=(Dolgozok[i].fizetes+(((Dolgozok[i].fizetes)*0.1)));
    	}
    }
    document.write("<br>"+alulFizetett);
}
fizetesEmeles(Dolgozok)
</script>