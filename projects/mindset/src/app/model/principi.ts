export interface Principio {
   id: number,
   name: string,
   nameEng: string,
   a: string,
   b?: string,
   c?: string,
   d?: string,
   e?: string,
   esempi: string,
}

export const PRINCIPI: Principio[] = [
   {
      id: 1,
      name: "Segmentazione",
      nameEng: "Segmentation",
      a: "Dividere un oggetto in 2 o più parti indipendenti.",
      b: "Rendere modulare un oggetto.",
      c: "Aumentare il grado di frammentazione di un oggetto.",
      esempi: "Arredamenti componibili, componenti di computer modulari, righelli di legno ripiegabili. Tubi di gomma da giardino di piccole dimensioni che possono essere unite per ottenere qualsiasi lunghezza sia necessaria."
   },
   {
      id: 2,
      name: "Rimozione / Estrazione",
      nameEng: "Extraction (Extracting, Retrieving, Removing)",
      a: "Rimuovere da un sistema una parte o proprietà 'indesiderata'.",
      b: "Isolare l'unica parte (o proprietà) necessaria di un oggetto.",
      esempi: "Utilizzare una musicassetta che riproduce il richiamo di uccelli temuti dai piccioni in modo da scacciarli dagli aeroporti. (Il suono è separato dagli uccelli)."
   },
   {
      id: 3,
      name: "Condizioni locali",
      nameEng: "Local Quality",
      a: "Cambiare la struttura di un oggetto o dell'ambiente esterno (un'azione esterna) da omogenea ad eterogenea.",
      b: "Far svolgere a diverse parti dell oggetto funzioni differenti.",
      c: "Porre ogni parte dell oggetto nelle migliori condizioni per la realizzazione del suo compito.",
      esempi: "Per ridurre la polvere nelle miniere di carbone, nelle zone di trivellazione e carico del materiale viene spruzzato un cono di minuscole gocce di acqua. Tanto più le gocce sono piccole, tanto maggiore è l'effetto di abbattimento della polvere, ma gocce troppo piccole vengono facilmente spostate dall'aria. La soluzione è quella di generare uno strato di gocce grandi intorno al cono di gocce piccolissime. Una penna ed una matita insieme in un unico oggetto."
   },
   {
      id: 4,
      name: "Asimmetria",
      nameEng: "Asymmetry",
      a: "Cambiare la forma di un oggetto da simmetrico ad asimmetrico.",
      b: "Se un oggetto è asimmetrico, aumentare il suo grado di asimmetria.",
      esempi: "Un lato del pneumatico è più robusto dell altro per sopportare l impatto con il bordo strada. Quando si scarica sabbia bagnata attraverso un ugello simmetrico, la sabbia forma un arco al di sopra dell apertura causando un flusso irregolare. Un ugello di forma asimmetrica elimina completamente questo problema."
   },
   {
      id: 5,
      name: "Combinazione (integrazione)",
      nameEng: "Consolidation",
      a: "Combinare nello spazio oggetti omogenei o oggetti destinati ad operazioni contigue.",
      b: "Combinare nel tempo operazioni omogenee o contigue.",
      esempi: "L elemento rotante di una scavatrice ha speciali beccucci da cui fuoriesce vapore in modo da scongelare e ammorbidire il terreno ghiacciato."
   },
   {
      id: 6,
      name: "Multifunzionalità",
      nameEng: "Universality",
      a: "Far svolgere ad una parte o oggetto funzioni multiple, eliminando la necessità di altre parti.",
      esempi: "Divano – letto. I sedili dei minivan possono essere regolati in modo da permettere di sedersi, dormire, oppure di caricare oggetti."
   },
   {
      id: 7,
      name: "Principio della 'Matrioska'",
      nameEng: "Nesting (Matrioshka)",
      a: "Porre un oggetto dentro all altro; porre ogni oggetto, a turno, dentro all altro.",
      b: "Far passare una parte nella cavità di un altra.",
      esempi: "Antenne telescopiche. Sedie impilate una sull'altra per ridurre lo spazio di immagazzinamento. Matite con vari mine immagazzinate all'interno. Bambole russe (matrioske)."
   },
   {
      id: 8,
      name: "Compensazione di peso",
      nameEng: "Counterweight",
      a: "Compensare il peso di un oggetto unendolo con altri oggetti che hanno una forza di sollevamento.",
      b: "Compensare il peso di un oggetto sfruttando forze aerodinamiche o idrodinamiche.",
      esempi: "Aliscafi. Le macchine da corsa hanno l alettone di coda per generare deportanza."
   },
   {
      id: 9,
      name: "Anti-azione preliminare",
      nameEng: "Prior Counteraction",
      a: "Se è necessario eseguire un azione, è possibile realizzare una controazione preliminare.",
      b: "Se un oggetto deve essere messo in tensione, provocare una 'anti-tensione' preliminarmente.",
      esempi: "Pavimenti o colonne in cemento armato. Per rendere un albero di trasmissione più resistente, viene realizzato con diversi tubi, precedentemente torti ad un angolo calcolato."
   },
   {
      id: 10,
      name: "Azione preliminare",
      nameEng: "Prior Action",
      a: "Effettuare in anticipo le operazioni richieste, in tutto o in parte.",
      b: "Sistemare preventivamente gli oggetti in modo opportuno, affinché possano essere utilizzati nel miglior modo possibile e senza determinare perdite di tempo.",
      esempi: "Cutter realizzato con una lama unica ma con dei pre-tagli, in modo da poter rimuovere facilmente la parte di lama usurata e ripristinare l affilatura. La gomma-cemento (un adesivo ottenuto dissolvendo gomma non vulcanizzata in solventi come il benzene) in bottiglia è difficile da applicare in modo uniforme. Per questo motivo viene fornita anche in nastri, in modo tale da poter applicare facilmente la quantità corretta."
   },
   {
      id: 11,
      name: "Compensare in anticipo",
      nameEng: "Cushon in Advance",
      a: "Predisporre in anticipo contromisure tali da compensare la bassa affidabilità di un oggetto.",
      esempi: "Per prevenire il taccheggiamento i negozi appongono uno speciale dispositivo contenente una piccola piastra magnetizzata. La piastra deve essere smagnetizzata dal cassiere prima che il cliente possa portare la merce al di fuori del negozio."
   },
   {
      id: 12,
      name: "Equipotenzialità",
      nameEng: "Equipotentiality", a: "Cambiare le condizioni dl sistema in modo tale da evitare la necessità di sollevare o abbassare un oggetto.",
      esempi: "La buca nel pavimento, in un'officina meccanica di riparazione auto, elimina la necessità di sollevare l'auto."
   },
   {
      id: 13,
      name: "Inversione",
      nameEng: "Do It in Reverse", a: "Invece di fare l'azione dettata naturalmente dalle specifiche del problema, cercare di fare esattamente l'opposto.",
      b: "Rendere mobili le parti dell'oggetto, o renderne mobili le parti immobili e immobile l'ambiente esterno.",
      c: "Girare l oggetto sotto sopra.",
      esempi: "Pulire per abrasione degli oggetti facendo vibrare gli oggetti al posto della parte abrasiva."
   },
   {
      id: 14,
      name: "Sfericità o curvatura",
      nameEng: "Spheroidality", a: "Sostituire parti lineari o superfici piatte con parti curvate, sostituire forme cubiche con forme sferiche",
      b: "Utilizzare rulli, palle, spirali.",
      c: "Passare da un movimento lineare a uno rotatorio, utilizzare forze centrifughe",
      esempi: "Il mouse di un computer utilizza una sfera per trasformare un movimento lineare su un piano in un vettore."
   },
   {
      id: 15,
      name: "Dinamicità",
      nameEng: "Dynamicity", a: "Rendere un oggetto o l ambiente in cui si trova in grado di adattarsi in modo da fornire la performance migliore in ogni momento.",
      b: "Dividere un oggetto in elementi in grado di muoversi rispetto agli altri.",
      c: "Se un oggetto è mobile, renderlo mobile o intercambiabile.",
      esempi: "Una lampada portatile può avere un raccordo flessibile fra il corpo e la lampada."
   },
   {
      id: 16,
      name: "Azioni parziali o eccessive",
      nameEng: "Partial or Excessive Action", a: "Se è difficile raggiungere il 100% di un effetto, ottenere qualcosa di più o qualcosa di meno del 100% potrebbe semplificare il problema",
      esempi: "Un cilindro è dipinto per immersione nella vernice, ma il risultato è che viene ricoperto da più vernice di quanta ne vorremmo. L'eccesso di vernice può essere rimosso con una rapida rotazione del cilindro."
   },
   {
      id: 17,
      name: "Cambio di dimensione",
      nameEng: "Transition Into a New Dimension", a: "Risolvere il problema di muovere un oggetto lungo una linea permettendo un movimento bidimensionale (in un piano). In modo similare, problemi relativi a movimenti di un oggetto in un piano possono essere risolti se l'oggetto può essere modificato in modo tale da permettergli un movimento nelle tre dimensioni.",
      b: "Utilizzare una disposizione di oggetti a più piani anziché a piano singolo.",
      c: "Inclinare un oggetto, posizionarlo su un lato diverso o un altra superficie.",
      d: "Proiettare immagini nelle zone vicine o sulla parte opposta dell'oggetto",
      esempi: "Alcune serre hanno un riflettore concavo nella zona nord della serra stessa. In questo modo viene migliorata l illuminazione durante il giorno riflettendo la luce solare in quella parte della costruzione."
   },
   {
      id: 18,
      name: "Vibrazioni meccaniche",
      nameEng: "Mechanical Vibration", a: "Fare oscillare o vibrare un oggetto.",
      b: "Se esiste già una vibrazione, aumentarne la frequenza anche sino all'ultrasonico.",
      c: "Utilizzare la frequenza di risonanza di un oggetto.",
      d: "Utilizzare vibratori piezoelettrici anziché meccanici.",
      e: "Utilizzare vibrazioni ultrasoniche in unione con campi elettromagnetici",
      esempi: "Per rimuovere il gesso dal corpo senza danneggiare la pelle, la tradizionale sega a mano è rimpiazzata da un coltello a vibrazione."
   },
   {
      id: 19,
      name: "Azione periodica",
      nameEng: "Periodic Action", a: "Invece di un azione continua utilizzare azioni periodiche o pulsanti.",
      b: "Se un azione è già periodica, cambiare la frequenza.",
      c: "Utilizzare pause tra impulsi per eseguire altre azioni.",
      esempi: "L'uso di una pistola pneumatica permette di svitare più facilmente bulloni bloccati rispetto ad una normale chiave inglese, usando impulsi invece che una forza continua."
   },
   {
      id: 20,
      name: "Continuità di azioni utili",
      nameEng: "Continuity of Useful Action", a: "Effettuare operazioni senza sosta; far lavorare tutte le parti di un oggetto a pieno regime per tutto il tempo.",
      b: "Eliminare tutte le azioni inutili o intermediarie.",
      esempi: "Una trivella può avere punte che consentono la foratura in avanti e all indietro."
   },
   {
      id: 21,
      name: "Accelerare i tempi",
      nameEng: "Rushing Through", a: "Compiere un'operazione negativa o pericolosa ad alta velocità.",
      esempi: "Un cutter per tubi di plastica con pareti molto sottili agisce ad alta velocità in modo da prevenire la deformazione dei tubi (taglia prima che i tubi abbiano la possibilità di deformarsi)."
   },
   {
      id: 22,
      name: "Convertire le azioni negative in positive",
      nameEng: "Convert Harm Into Benefit", a: "Utilizzare fattori o effetti negativi di un sistema per ottenere un effetto positivo.",
      b: "Eliminare l azione nociva combinandola con un altra azione nociva.",
      c: "Amplificare un fattore nocivo ad un livello tale che non sia più nocivo.",
      esempi: "La sabbia e la ghiaia congelano in un blocco unico quando sono trasportate in posti freddi. Il congelamento estremo (usando azoto liquido) rende molto fragile il ghiaccio, permettendo quindi lo scarico del materiale."
   },
   {
      id: 23,
      name: "Feedback",
      nameEng: "Feedback", a: "Introdurre un feedback.",
      b: "Se il feedback è già utilizzato, invertitelo.",
      esempi: "La pressione dell acqua di un acquedotto è mantenuta costante misurando la pressione in uscita e accendendo una pompa in caso di bassa pressione."
   },
   {
      id: 24,
      name: "Intermediario",
      nameEng: "Mediator", a: "Utilizzare un oggetto che faccia da intermediario per trasferire o realizzare un'azione.",
      b: "Unire temporaneamente un oggetto con un altro che può essere poi facilmente rimosso.",
      esempi: "Per ridurre le perdite di energia quando si applica corrente al metallo liquido, utilizzare elettrodi raffreddati e metalli liquidi, con una temperatura di fusione inferiore, come intermediari."
   },
   {
      id: 25,
      name: "Self-service",
      nameEng: "Self-service", a: "Rendere un oggetto auto-sufficiente, auto-riparante, facendogli svolgere anche azioni utili ausiliarie.",
      b: "Utilizzare risorse, energia o sostanze di scarto.",
      esempi: "Per distribuire un abrasivo in modo uniforme sulla superficie di rulli e per prevenire l'usura dell'alimentatore di materiale abrasivo, la superficie dell'alimentatore è realizzata con lo stesso materiale dell'abrasivo. In una pistola per saldatura elettrica, l elettrodo viene fatto avanzare da uno speciale meccanismo. Per semplificare il sistema, l elettrodo viene fatto avanzare da un solenoide alimentato dalla stessa corrente di saldatura."
   },
   {
      id: 26,
      name: "Uso di copie",
      nameEng: "Copying", a: "Utilizzare copie semplici o poco costose al posto di oggetti complessi, costosi, fragili o non facili da utilizzare.",
      b: "Rimpiazzare un oggetto, o un processo con copie ottiche o immagini (eventualmente in scala per ridurre o ingrandire l'immagine).",
      c: "Se state già utilizzando copie ottiche visibili, utilizzate copie a infrarossi o ultravioletti.",
      esempi: "L altezza di oggetti alti può essere determinata misurando la loro ombra."
   },
   {
      id: 27,
      name: "Oggetti economici, a vita corta",
      nameEng: "Dispose", a: "Rimpiazzare un oggetto costoso con diversi oggetti a basso costo, accettando compromessi in taluni aspetti (come la vita operativa per esempio).",
      esempi: "Pannolini usa e getta. Una trappola per topi consiste di un tubo di plastica contenente un'esca. Il topo entra nella trappola attraverso un'apertura conica. Le pareti curvate non consentono al topo di uscire."
   },
   {
      id: 28,
      name: "Sostituzione di sistemi meccanici",
      nameEng: "Replacement of Mechanical System", a: "Sostituire un sistema meccanico con uno ottico, acustico, basato sugli odori.",
      b: "Utilizzare un campo elettrico, magnetico o elettromagnetico per interagire con l oggetto.",
      c: "Cambiare i campi.",
      d: "Utilizzare un campo insieme a particelle ferromagnetiche.",
      esempi: "Campi stazionari sostituiti con campi mobili. Campi fissi diventano campi che cambiano con il tempo. Campi non strutturati diventano strutturati. Per rafforzare l unione di uno strato di metallo ad un materiale termoplastico, il processo è svolto all interno di un campo elettromagnetico in modo da applicare forza al metallo."
   },
   {
      id: 29,
      name: "Uso di gas e di liquidi",
      nameEng: "Pneumatic or Hydraulic Constructions", a: "Utilizzare gas e parti liquide di un oggetto invece di parti solide. Queste parti possono utilizzare aria o acqua per essere gonfiate o utilizzare ammortizzatori ad aria o a liquido.",
      esempi: "Per aumentare il tiraggio di una ciminiera industriale, viene installato un tubo a spirale con degli ugelli. Quando l'aria fuoriesce dagli ugelli, si crea una sorta di muro d'aria che riduce la resistenza. Per spedire prodotti fragili, vengono usati contenitori con bolle d aria o materiali simil-schiuma."
   },
   {
      id: 30,
      name: "Membrane e pellicole",
      nameEng: "Flexible Membranes or Thin Films", a: "Sostituire le normali strutture con membrane flessibili e film sottili.",
      b: "Isolare l oggetto dall ambiente esterno utilizzando involucri flessibili e film sottili.",
      esempi: "Per prevenire la perdita d acqua data dall evaporazione dalle foglie delle piante, viene applicato uno spray di polietilene. Il polietilene si indurisce e la crescita delle piante migliora perché il film di polietilene permette più facilmente il passaggio di ossigeno rispetto a quello del vapore acqueo."
   },
   {
      id: 31,
      name: "Materiali porosi",
      nameEng: "Porous Material", a: "Rendere un materiale poroso o aggiungere elementi porosi (inserti, coperture, etc.)",
      b: "Se un oggetto è già poroso, utilizzare i pori per introdurre preventivamente delle sostanze.",
      esempi: "Per evitare di dover pompare del liquido di raffreddamento, alcune parti della macchina sono dotate di materiale poroso inzuppato di liquido di raffreddamento che evapora durante l attività della macchina, fornendo un raffreddamento uniforme."
   },
   {
      id: 32,
      name: "Cambiamento delle proprietà ottiche",
      nameEng: "Changing the Color", a: "Cambiare il colore di un oggetto o dell ambiente circostante.",
      b: "Cambiare la trasparenza di un oggetto o dell ambiente circostante.",
      c: "Usare additivi colorati per osservare oggetti o processi altrimenti difficili da vedere.",
      d: "Se tali additivi sono già in uso, utilizzare segnalatori luminescenti o elementi di segnalazione.",
      esempi: "Una benda trasparente consente di controllare lo stato di una ferita senza dover rimuovere il bendaggio. In una acciaieria, un velo di acqua è utilizzato per proteggere i lavoratori dal sovrariscaldamento. Ma questo velo protegge solo dai raggi infrarossi, lasciando passare la luce intensa dell acciaio fuso. Un colorante viene aggiunto all acqua per creare un effetto filtro, lasciando comunque trasparente il velo d acqua."
   },
   {
      id: 33,
      name: "Omogeneità",
      nameEng: "Homogeneity", a: "Fare interagire gli oggetti con altri oggetti del medesimo materiale, o con un materiale con proprietà simili.",
      esempi: "La superficie per un alimentatore per materiale abrasivo è fatta dello stesso materiale che scorre nell'alimentatore, consentendo una continua reintegrazione della superficie senza doverla rimuovere."
   },
   {
      id: 34,
      name: "Consumare e rigenerare",
      nameEng: "Rejecting and Regenerating Parts", a: "Dopo che hanno compiuto la loro funzione o sono diventate inutili, rimuovere le parti di un oggetto (attraverso dissoluzione, evaporazione,…)",
      b: "Ripristinare direttamente ogni elemento consumato di un oggetto.",
      esempi: "I bossoli sono automaticamente espulsi dopo che l'arma ha sparato. Razzi orbitali che si separano dopo che hanno compiuto la loro funzione."
   },
   {
      id: 35,
      name: "Cambiamento di parametri",
      nameEng: "Transformation of Properties", a: "Cambiare lo stato di aggregazione di un oggetto, la densità, il grado di flessibilità o la temperatura.",
      esempi: "In un sistema per materiali fragili, la superficie della coclea di alimentazione è realizzata in un materiale elastico con due eliche. Per controllare il processo, il passo della vite può essere cambiato anche da remoto."
   },
   {
      id: 36,
      name: "Cambiamento di stato",
      nameEng: "Phase Transition", a: "Utilizzare i fenomeni che si riscontrano durante la transizione di fase. Ad esempio il cambiamento di volume, il rilascio o l'assorbimento di calore.",
      esempi: "Per realizzare tubazioni nervate o con forme complesse, vengono riempite con acqua e raffreddate fino alla temperatura di congelamento."
   },
   {
      id: 37,
      name: "Dilatazione termica",
      nameEng: "Thermal Expansion", a: "Utilizzare la dilatazione o la contrazione termica dei materiali.",
      b: "Utilizzare diversi materiali con diversi coefficienti di dilatazione termica.",
      esempi: "Per controllare l apertura delle finestre sul tetto di una serra, vengono connesse alle finestre delle lamine bi-metalliche. Con un cambio di temperatura, le lamine si piegano facendo aprire o chiudere le finestre."
   },
   {
      id: 38,
      name: "Forti ossidanti",
      nameEng: "Accelerated Oxidation", a: "Rimpiazzare l aria comune con aria arricchita di ossigeno.",
      b: "Rimpiazzare aria arricchita di ossigeno con ossigeno puro.",
      c: "In ossigeno o in aria, trattare il materiale con radiazioni ionizzanti.",
      d: "Utilizzare ossigeno ionizzato.",
      esempi: "Per ottenere più calore da una torcia, viene fornito ossigeno alla torcia stessa invece di aria presente nell atmosfera."
   },
   {
      id: 39,
      name: "Atmosfera inerte",
      nameEng: "Inert Environment", a: "Rimpiazzare un ambiente normale con uno inerte.",
      b: "Realizzare un processo sotto vuoto.",
      esempi: "Per prevenire l incendio del cotone nei magazzini, esso viene trattato con gas inerte durante il trasporto all area di deposito."
   },
   {
      id: 40,
      name: "Materiali compositi",
      nameEng: "Composite Materials", a: "Sostituire un materiale omogeneo con un materiale composito.",
      esempi: "Le ali degli aerei militari sono realizzate in materiali compositi per avere un peso ridotto e un'elevata robustezza."
   }




]