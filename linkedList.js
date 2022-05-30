// import defaultEquals from "../defaultEquals";
import Node from "./Node.js"

class LinkedList {
    constructor(){
        this.count = 0;
        this.head = undefined;
        // this.equals = equals;
    }

    push(element){
        let node = new Node(element)
        let curre;
        
        if(this.head == null){
            this.head = node;

        }else {
            curre = this.head;
            while(curre.next != null){
                curre= curre.next
            }
            curre.next = node;
        }
        this.count++;
    }

    removeAt(index){
        if(index >= 0 && index < this.count){
            let curre = this.head;
            if(index === 0){
                this.head = curre.next;
            }
        }
    }
}

const list = new LinkedList();
list.push(12);
list.push(11);
list.push(6);
list.push(3);
list.push(8);
console.log(list);