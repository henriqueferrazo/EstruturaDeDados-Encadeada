// import defaultEquals from "../defaultEquals";
import Node from "./Node.js"

class LinkedList {
    constructor(){
        this.count = 0; //Contador dos elementos da list.
        this.head = undefined;//head iniciando a aplicação como valor undefined(vazio ou não definido)
    }

    push(element){
        let node = new Node(element)// object criado em outro arquivo com atributos node(nó) e next(proxima) onde o next recebe o valor null sendo o responsavel por apontar para o proximo elemento da list
        let curre;
    //comparar a head da list com uma lit vazia, compare com null e caso seja o resultado seja true retorne introduzindo o elemento como cabeça da list
        if(this.head == null){
            this.head = node;

    //caso a list não esteja vazia, a variavel curre anteriormente sem valor atribuido recebe o valor de head, assim percorremos
    // a list com while com a condição que encontre um espaço que seja null e quando encontrar saia do loop e atribua uma node para ele e seu 
    //ponteiro para o vazio novamente.
        }else {
            curre = this.head;
            while(curre.next != null){
                curre = curre.next
            }
            curre.next = node;
        }
        this.count++;
    }

    // Remover um elemento de um local especifico da lista
    removeAt(index){
        if(index >= 0 && index < this.count){
            let curre = this.head;
            if(index === 0){
                this.head = curre.next;
            }else {
                let previous;
                for(let i = 0; i < index; i++){
                    previous = curre;
                    curre = curre.next;
                }
                previous.next = curre.next;
            }
            this.count--;
            return curre.element;
        }
        return undefined;
    }
}

const list = new LinkedList();
list.push(12);
list.push(11);
list.push(6);
list.push(3);
list.push(8);
console.log(list);