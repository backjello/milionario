import { Risposta } from "./risposta"

export interface Domanda {
    testo:string // testo della domanda "quanto fa 1+1"
    risposte:Risposta[] // array delle 4 risposte
}
