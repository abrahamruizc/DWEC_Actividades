function SignoEgipcio(){
    let ano= prompt("introduce tu año de nacimiento ");
    let mes = prompt("introduce tu mes de nacimiento ");
    let dia = prompt("introduce el dia de tu nacimiento ");
    
    let signo;
    
    let fechanacimiento = new Date(ano, mes, dia);


    let mesver = fechanacimiento.getMonth();
    let diaver = fechanacimiento.getDate();
    
    if (mesver == 0 && diaver >=16){
        signo = "anubis";
    } else if(mesver == 1 && diaver <=15){
        signo = "anubis";
    } 
    if (mesver == 1 && diaver >=16){
        signo ="bastet";
    }  else if (mesver == 2 && diaver <=15){
        signo = "bastet";
    } 
    if (mesver == 2 && diaver >=16){
        signo ="selket";
    }  else if (mesver == 3 && diaver <=15){
        signo = "selket";
    } 
    if (mesver == 3 && diaver >=16){
        signo ="apep";
    }  else if (mesver == 4 && diaver <=15){
        signo = "apep";
    } 
    if (mesver == 4 && diaver >=16){
        signo ="ptah";
    }  else if (mesver == 5 && diaver <=15){
        signo = "ptah";
    } 
    if (mesver == 5 && diaver >=16){
        signo ="atum";
    }  else if (mesver == 6 && diaver <=15){
        signo = "atum";
    } 
    if (mesver == 6 && diaver >=16){
        signo ="isis";
    }  else if (mesver == 7 && diaver <=15){
        signo = "isis";
    } 
    if (mesver == 7 && diaver >=16){
        signo ="ra";
    }  else if (mesver == 8 && diaver <=15){
        signo = "ra";
    } 
    if (mesver == 8 && diaver >=16){
        signo ="horus";
    }  else if (mesver == 9 && diaver <=15){
        signo = "horus";
    } 
    if (mesver == 9 && diaver >=16){
        signo ="maat";
    }  else if (mesver == 10 && diaver <=15){
        signo = "maat";
    } 
    if (mesver == 10 && diaver >=16){
        signo ="osiris";
    }  else if (mesver == 11 && diaver <=15){
        signo = "osiris";
    } 
    if (mesver == 11 && diaver >=16){
        signo ="hato";
    }  else if (mesver == 0 && diaver <=15){
        signo = "hato";
    } 
    
    
    
    console.log(signo);
    console.log(fechanacimiento);
    console.log(mesver);
    console.log(diaver);
    
    switch(signo){
         case  "bastet":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Bastet'></iframe>");
         break;
         case  "selket":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Serket'></iframe>");
         break;
         case  "apep":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Apofis_(mitología)'></iframe>");
         break;
         case  "ptah":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Ptah'></iframe>");
         break;
         case  "atum":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Atum'></iframe>");
         break;
         case  "isis":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Isis'></iframe>");
         break;
         case  "ra":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Ra_(mitología)'></iframe>");
         break;
         case  "horus":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Horus'></iframe>");
         break;
         case  "maat":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Maat'></iframe>");
         break;
         case  "osiris":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Osiris'></iframe>");
         break;
         case  "hato":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Hathor'></iframe>");
         break;
         case  "anubis":
            document.write("<iframe id='inlineFrameExample' title='Inline Frame Example' width='1200' height='600' src='https://es.wikipedia.org/wiki/Anubis'>frame</iframe>");
         break;
    }


}
