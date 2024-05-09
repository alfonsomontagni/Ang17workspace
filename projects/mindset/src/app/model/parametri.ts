export interface Parametro{
    id: number,
    name: string,
    nameEng?:string,
    definition:string
}
export const PARAMETRI : Parametro[]= [
    {
        id: 1,
        name: "Peso di un oggetto mobile",
        nameEng: "Weight of moving object",
        definition: "La forza misurabile, risultante dalla gravità, che un corpo in movimento esercita su una superficie di appoggio. Un oggetto si definisce in movimento quando la sua posizione cambia spontaneamente o per effetto di forze esterne."
    },
    {
        id: 2,
        name: "Peso di un oggetto stazionario",
        nameEng: "Weight of stationary object",
        definition: "La forza misurabile, risultante dalla gravità, che un corpo stazionario esercita su una superficie sulla quale è appoggiato e fermo. Un oggetto si definisce stazionario quando la sua posizione non cambia spontaneamente o per effetto di forze esterne."
      },
      {
        id: 3,
        name: "Lunghezza di un oggetto mobile",
        nameEng: "Length of moving object",
        definition: "La misura lineare di una dimensione (lunghezza, larghezza, profondità) di un corpo, misurata rispetto alla direzione del movimento del corpo stesso. Il movimento può essere causato da forze interne o esterne."
      },
      {
        id: 4,
        name: "Lunghezza di un oggetto stazionario",
        nameEng: "Length of stationary object",
        definition: "La misura lineare di una dimensione (lunghezza, larghezza, profondità) di un corpo, misurata rispetto alla direzione nella quale non viene rilevato nessun movimento."
      },
      {
        id: 5,
        name: "Area di un oggetto mobile",
        nameEng: "Area of moving object",
        definition: "La misura quadratica di ogni piano o porzione di piano di un oggetto che può cambiare la sua posizione nello spazio in risposta a forze interne o esterne."
      },
      {
        id: 6,
        name: "Area di un oggetto stazionario",
        nameEng: "Area of stationary object",
        definition: "La misura quadratica di ogni piano o porzione di piano di un oggetto che non può cambiare la sua posizione nello spazio in risposta a forze interne o esterne."
      },
      {
        id: 7,
        name: "Volume di un oggetto mobile",
        nameEng: "Volume of  moving object",
        definition: "La misura cubica di un corpo che può cambiare la sua posizione nello spazio in risposta a forze interne o esterne."
      },
      {
        id: 8,
        name: "Volume di un oggetto stazionario",
        nameEng: "Volume of stationary object",
        definition: "La misura cubica di un corpo che non può cambiare la sua posizione nello spazio in risposta a forze interne o esterne."
      },
      {
        id: 9,
        name: "Velocità",
        nameEng: "Speed",
        definition: "Il ritmo al quale un'azione o un processo viene completato nel tempo."
      },
      {
        id: 10,
        name: "Forza",
        nameEng: "Force (Intensity)",
        definition: "La capacità di causare cambiamenti fisici ad un sistema o ad un oggetto. Il cambiamento può essere completo o parziale, permanente o temporaneo."
      },
      {
        id: 11,
        name: "Sforzo/Pressione",
        nameEng: "Stress or pressure",
        definition: "L intensità di forze agenti su un oggetto o sistema, misurata come forza di compressione o tensione per unità di area."
      },
      {
        id: 12,
        name: "Forma",
        nameEng: "Shape",
        definition: "L apparenza esterna o il profilo di un oggetto o sistema. La forma può essere cambiata totalmente o parzialmente, permanentemente o temporaneamente in seguito a forze agenti sull oggetto o sul sistema."
      },
      {
        id: 13,
        name: "Stabilità integrità di un oggetto",
        nameEng: "Stability of  the objects composition",
        definition: "La resistenza offerta da un oggetto o sistema rispetto al cambiamento generato dall interazione con altri oggetti o sistemi associati."
      },
      {
        id: 14,
        name: "Robustezza/Resistenza",
        nameEng: "Strength",
        definition: "Entro limiti e condizioni definite, l abilità di un oggetto o sistema di assorbire gli effetti di una forza, della velocità, dello stress, etc. senza rompersi."
      },
      {
        id: 15,
        name: "Durata dell azione di un oggetto mobile",
        nameEng: "Duration of action of moving object",
        definition: "La quantità di tempo durante la quale un oggetto che cambia posizione nello spazio è in grado di svolgere in modo appropriato la propria funzione."
      },
      {
        id: 16,
        name: "Durata dell azione di un oggetto stazionario",
        nameEng: "Duration of action by stationary object",
        definition: "La quantità di tempo durante la quale un oggetto che non cambia posizione nello spazio è in grado di svolgere in modo appropriato la propria funzione."
      },
      {
        id: 17,
        name: "Temperatura",
        nameEng: "Temperature",
        definition: "La sottrazione o l aggiunta di calore ad un oggetto o sistema durante la realizzazione dell azione richiesta, che potrebbe causare cambiamenti potenzialmente non desiderabili all oggetto, sistema o prodotto."
      },
      {
        id: 18,
        name: "Luminosità",
        nameEng: "Illumination intensity",
        definition: "La percentuale di energia luminosa rispetto all area che viene illuminata dal o nel sistema. Il parametro luminosità include anche la qualità della luce, il grado di illuminazione e altre eventuali caratteristiche della luce."
      },
      {
        id: 19,
        name: "Energia utilizzata da un oggetto mobile",
        nameEng: "Use of energy by moving object",
        definition: "Il dispendio energetico di un oggetto o sistema che cambia posizione nello spazio con mezzi propri del sistema stesso o sotto l azione di forze esterne."
      },
      {
        id: 20,
        name: "Energia utilizzata da un oggetto stazionario",
        nameEng: "Use of energy by stationary object",
        definition: "Il dispendio energetico di un oggetto o sistema che non cambia posizione nello spazio con mezzi propri del sistema stesso o sotto l azione di forze esterne."
      },
      {
        id: 21,
        name: "Potenza",
        nameEng: "Power",
        definition: "La percentuale di lavoro rispetto al tempo richiesta per realizzare l obiettivo. Utilizzato per misurare il cambiamento di potenza richiesto ma potenzialmente non desiderabile in un oggetto o un sistema in determinate condizioni."
      },
      {
        id: 22,
        name: "Spreco di energia",
        nameEng: "Loss of Energy",
        definition: "Aumento dell incapacità di un oggetto o sistema di utilizzare delle forze, in particolar modo quando non viene prodotto nessun lavoro o risultato utile."
      },
      {
        id: 23,
        name: "Spreco di materia",
        nameEng: "Loss of substance",
        definition: "Diminuzione o eliminazione di materia da un oggetto o sistema, in particolar modo quando non viene prodotto nessun lavoro o risultato utile."
      },
      {
        id: 24,
        name: "Perdita di informazione",
        nameEng: "Loss of Information",
        definition: "Perdita totale o parziale di dati o input da un sistema."
      },
      {
        id: 25,
        name: "Spreco di tempo",
        nameEng: "Loss of Time",
        definition: "Aumento del tempo richiesto per completare una determinata azione."
      },
      {
        id: 26,
        name: "Quantità di materia",
        nameEng: "Quantity of substance/the matter",
        definition: "Il numero di elementi o la quantità di un elemento utilizzato per creare un oggetto o un sistema."
      },
      {
        id: 27,
        name: "Affidabilità",
        nameEng: "Reliability",
        definition: "L abilità di un oggetto o sistema di svolgere adeguatamente le funzioni richieste durante un certo periodo o per un certo numero di cicli."
      },
      {
        id: 28,
        name: "Accuratezza della misura",
        nameEng: "Measurement accuracy",
        definition: "Il grado di prossimità fra la misura ed il valore reale di ciò che viene misurato."
      },
      {
        id: 29,
        name: "Precisione di lavorazione",
        nameEng: "Manufacturing precision",
        definition: "Il grado di corrispondenza fra le specifiche di progetto e gli elementi di un oggetto o sistema."
      },
      {
        id: 30,
        name: "Fattori negativi esterni che agiscono sull oggetto",
        nameEng: "Object-affected harmful factors",
        definition: "Influenze provenienti dall esterno che agiscono su un oggetto o sistema, riducendone l efficienza o la qualità."
      },
      {
        id: 31,
        name: "Effetti nocivi derivati",
        nameEng: "Object-generated harmful factors",
        definition: "Influenze generate dall oggetto o dal sistema stesso che ne riducono l efficienza o la qualità."
      },
      {
        id: 32,
        name: "Facilità di fabbricazione",
        nameEng: "Ease of manufacture",
        definition: "La facilità con la quale un oggetto o sistema viene realizzato."
      },
      {
        id: 33,
        name: "Facilità d uso",
        nameEng: "Ease of operation",
        definition: "La facilità con la quale un oggetto o sistema viene utilizzato."
      },
      {
        id: 34,
        name: "Facilità di riparazione",
        nameEng: "Ease of repair",
        definition: "La facilità con la quale un oggetto o sistema viene riportato in condizione di funzionamento dopo un guasto o un prolungato uso."
      },
      {
        id: 35,
        name: "Adattabilità",
        nameEng: "Adaptability or versatility",
        definition: "L abilità di un oggetto o sistema di riorganizzarsi per adattarsi a condizioni esterne in cambiamento (condizioni ambientali, cambiamento di funzioni, etc.)"
      },
      {
        id: 36,
        name: "Complessità del congegno",
        nameEng: "Device complexity",
        definition: "La quantità e la diversità degli elementi che formano un oggetto o sistema. Sono da includere anche le relazioni esistenti tra gli elementi. La complessità può inoltre includere la difficoltà incontrata nel padroneggiare l uso di un oggetto o sistema."
      },
      {
        id: 37,
        name: "Complessità del controllo",
        nameEng: "Difficulty of detecting and measuring",
        definition: "La quantità e la diversità degli elementi utilizzati per misurare o monitorare un oggetto o sistema; il costo della misurazione nel rispetto dell errore accettabile."
      },
      {
        id: 38,
        name: "Livello di automazione",
        nameEng: "Extent of automation",
        definition: "La capacità di un oggetto o sistema di realizzare delle operazioni senza necessità di intervento umano."
      },
      {
        id: 39,
        name: "Produttività",
        nameEng: "Productivity",
        definition: "La relazione fra il numero di volte che un operazione viene conclusa rispetto al tempo richiesto per farlo."
      }

]

