import { Domanda } from "./interfaces/domanda";
// array di array (o matrice) che contiene tutte le domande
export const DOMANDE:Domanda[][] = [
    // primo livello
    [
        {
            testo: "quanto fa 1 + 1",
            risposte: [
                {testo:'11'},
                {testo:'2',corretto:true},
                {testo:'100'},
                {testo:'-5'}
            ]
        },
        {
            testo: "di che colore era il cavallo bianco di Napoleone",
            risposte: [
                {testo:'rosso'},
                {testo:'verde'},
                {testo:'nero'},
                {testo:'bianco',corretto:true},
            ]
        }
    ],
    //secondo livello
    [
        {
            testo: "quale è la capitale d'italia",
            risposte: [
                {testo:'Roma',corretto:true},
                {testo:'Milano'},
                {testo:'Firenze'},
                {testo:'Venezia'}
            ]
        },
        {
            testo: "quanti abitanti ha la terra",
            risposte: [
                {testo:'7'},
                {testo:'8 miliardi',corretto:true},
                {testo:'100.000'},
                {testo:'670 milioni'}
            ]
        }
    ]
]