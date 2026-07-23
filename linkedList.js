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

    toString() {
        
        if (this.head === null) return "";

        let currentNode = this.head;
        let arrayOfValues = [];

        while (currentNode !== null) {

            let stringValue = currentNode.value.toString();
            arrayOfValues.push(`( ${stringValue} )`);
            currentNode = currentNode.nextNode;
            
        }
        
        
        arrayOfValues.push("null");

        return arrayOfValues.join(" -> ");



    }

    insertAt(index, ...values) {


        if (index < 0 || this.head === null) {
            throw new RangeError('Index value must be between 0 and list size');
        }

        // create new nodes based on values,

        if (this.head !== null) {

            let prevNode = Node(values[0]);
            let newNodeChain = [prevNode];

            // create array with reference to new nodes
            for (let i = 1; i < values.length; i++) {
                let newNode = Node(values[i]);
                prevNode.nextNode = newNode;
                prevNode = newNode;
                newNodeChain.push(newNode);

            }

            // base case for index being 0

            if (index === 0) {
                newNodeChain.at(-1).nextNode = this.head;
                this.head = newNodeChain[0];
            }

            // inserting
                

            if (index > 0) {
                let current = this.head;

                for (let i = 0; i < index - 1; i++) {
                    current = current.nextNode;
                }

                let afterNode = current.nextNode;
                current.nextnode = newNodeChain[0];
                newNodeChain.at(-1).nextNode = afterNode;
            }


            

            



            



        }




    }





}

export default LinkedList;