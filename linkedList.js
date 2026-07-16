import Node from './node';

class LinkedList {

    // blue print for a node using constuctor

    constructor() {
        this.head = null; // empty
    }

    append(value) {
        let nodeFactoryRef = Node(value);

        if (this.head === null) {
            return this.head = nodeFactoryRef;
        } 

        // other if condition is unnecessary but using for readability

        if (this.head !== null) {

            let headRef = this.head;
            
            while (headRef.nextNode !== null) {
                headRef = headRef.nextNode;

            }

            return headRef.nextNode = nodeFactoryRef;
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

    tail() {


        if (this.head === null) {
            return undefined;
        }

        let currentNode = this.head;
        let allNodes = [];

        while (currentNode !== null) {

            allNodes.push(currentNode);
            currentNode = currentNode.nextNode;

        }

        return allNodes.at(-1);

            

    }

    at(index) {

        if (this.head === null) return undefined;

        let currentNode = this.head;
        let allNodes = [];
        
        while (currentNode !== null) {

            allNodes.push(currentNode);
            currentNode = currentNode.nextNode;

        }

        if (allNodes[index] !== undefined) {
            return allNodes[index].value;
        }
    




    }

    pop() {

        if (this.head === null) return undefined;


        let currentNode = this.head;
        let allNodes = [];
        
        while (currentNode !== null) {

            allNodes.push(currentNode);
            currentNode = currentNode.nextNode;

        }

        return allNodes[0].value;




    }

    contains(value) {

        let currentNode = this.head;

        while (currentNode !== null) {

            if (currentNode.value === value) return true;

            currentNode = currentNode.nextNode;
        }

        return false;





    }

    findIndex(value) {

        let currentNode = this.head;
        let allNodes = [];
        
        while (currentNode !== null) {

            allNodes.push(currentNode);
            currentNode = currentNode.nextNode;


        }

        for (let i = 0; i < allNodes.length; i++) {

            if (allNodes[i].value === value) {
                return i;
            }   
   
        }

        return -1;



    }





}

export default LinkedList;