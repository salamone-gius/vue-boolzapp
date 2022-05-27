// - Istanzio Vue
const app = new Vue ({
    el: "#app",
    data: {
        // imposto la variabile 'currentIndex' a 0 come elemento di 'data'
        currentIndex: 0,
        // imposto la variabile 'newMessageContent' a stringa vuota come elemento di 'data' che andrò a popolare attraverso v-model con il testo inserito nella text-input
        newMessageContent: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    // creo la sezione 'methods' dove inserirò le mie funzioni
    methods: {
        chatChange(index) {
            // l'indice corrente (currentIndex) diventa uguale all'indice dell'elemento (index)
            this.currentIndex = index;
        },
        addMessage(currentIndex) {
            // SE il campo input/newMessageContent è pieno (diverso da stringa vuota)...
            if (this.newMessageContent !== '') {
                // creo un nuovo oggetto 'now' che avrà i valori relativi a data e ora attuale come suoi elementi...
                const now = new Date();
                // creo la variabile 'month' come stringa vuota per poi popolarla con il valore del mese in formato italiano (con lo zero davanti)
                let month = "";
                // creo la variabile 'italianMonth' con valore now.getMonth()+1 poiché il getMonth() conta da 0 a 11         
                let italianMonth = now.getMonth()+1;
                // SE il mese corrente è minore di 10...
                if (italianMonth < 10) {
                    //... 'month' sarà uguale al valore di italianMonth con uno 0 stringato davanti...
                    month = "0"+ italianMonth;
                // ...ALTRIMENTI...
                }else{
                    //... 'month' sarà uguale al valore di italianMonth
                    month = italianMonth;
                }
                // ...creo un nuovo oggetto con newMessageContent come valore della chiave 'message' che andrò a pushare in inapp.incontacts[all'indice corrente quindi nella chat corrente].neimessages...
                this.contacts[currentIndex].messages.push(
                    {
                        date: `${now.getDate()}/${month}/${now.getFullYear()} ${now.toLocaleTimeString()}`,
                        message: this.newMessageContent,
                        status: 'sent',
                    }
                    );
                // ...svuoto il campo input/newMessageContent.
                this.newMessageContent = '';
                // imposto il setTimeout...
                setTimeout(() => {
                    // ...creo un nuovo oggetto che andrò a pushare in inapp.incontacts[all'indice corrente quindi nella chat corrente].neimessages...
                    this.contacts[currentIndex].messages.push(
                        {
                            date: `${now.getDate()}/${month}/${now.getFullYear()} ${now.toLocaleTimeString()}`,
                            message: "Ok!",
                            status: 'received',
                        }
                    // ...dopo 1 secondo
                )}, 1000)
            }
        }
    }
})
