/*MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato
 viene letto e utilizzato per creare un nuovo todo,
  che quindi viene aggiunto alla lista dei todo esistenti.*/

//creo l'array
const app = new Vue(
    {
        el:'#root',
        data: {
            todos: [
                {
                    text: 'Fare esercizio pomeridiano',
                    done: false
                },
                {
                    text: 'Recap con Loris e Adriano',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Andare a prendere Ilaria alla stazione',
                    done: false
                }
            ],
            newTodo: '',
            
        },
        methods: {
            toggleDone: function(index) {
                const clickedTodo = this.todos[index];
                clickedTodo.done = !clickedTodo.done;
                    
                },
            addTodo: function() {
                const newObj = {
                    text: this.newTodo,
                    done : false
                 }
                if(this.newTodo.length > 2) {
                this.todos.push(newObj);
                this.newTodo = '';
                }
            },
            removeTodo: function(index) {
                console.log('remove',index);
                this.todos.splice(index, 1)
            },
            
            }
    
    }
    
)