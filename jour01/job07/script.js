
const date = new Date("28 Mar 2015");


const jourssemenaines = [ "Lundi", 
                          "Mardi", 
                          "Mercredi", 
                          "Jeudi", 
                          "Vendredi", 
                          "Samedi", 
                          "Dimanche"];

const moisannee = [ "Fevrier", 
                    "Mars", "Avril", 
                    "Mai", "Juin", 
                    "Juillet", "Aout", 
                    "Septembre", "Octobre", 
                    "Novembre", "Decembre" , "Janvier"];

    for (let i = 0; i < date.getDay(); i++) {
          
        for (let m = 0; m < date.getMonth(); m++) {

            let jour = jourssemenaines[i] + " " + date.getDate();
            let mois = moisannee[m];
            let annee = date.getFullYear();
            console.log(jour + " " + mois + " " + annee);  
            
            if ( jour = jourssemenaines[i] === "Samedi" + date.getDate() ) {
                console.log(jour + " " + mois + " " + annee + "est un week-end"); 
            }
        }
    } 

