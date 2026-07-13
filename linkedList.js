import Node from './node';

class LinkedList {

    // blue print for a node using constuctor

    constructor() {
        this.head = null; // empty
    }

    append(value) {
        let newNode = Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
    }

    prepend(value) {
        let newNode = Node(value);
       
        let oldNode = this.head;
        this.head = newNode;
        newNode.nextNode = oldNode;
        
    }

    size() {

        // return total number of nodes in the list

        let count = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            
            count++
            currentNode = currentNode.nextNode;

        }

        return count

    

        
    }

    heads() {

        let current = this.head;

        if (current !== null) {
            return current;
        } else {
            return undefined;
        }





    }





}

export default LinkedList;