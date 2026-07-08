import Node from "./node"


export default class LinkedList {

    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = Node(value);
        if (this.head === null) {
            return (this.head = newNode);
        }

        let pointer = this.head;
        if (pointer !== null) {
             // pointer should point to the nextNode// 
             }
    }


    prepend(value) {
        if (this.head !== null) {

        }
    }

}

