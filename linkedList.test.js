import LinkedList from "./linkedList";

// describe because these are all tests for the linked list class

describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });


    // check head and new list must be empty, append create node at front, prepend insert new node in front of old nod
    test('should create an empty linked list', () => {
        expect(linkedList.head).toBeNull();
    });

    test('append adds a value when the list is empty', () => {
        linkedList.append(10);
        expect(linkedList.head.value).toBe(10);
        expect(linkedList.head.nextNode).toBeNull();
    });

    test('prepend adds a value to the beginning of the list', () => {
        linkedList.append(20);
        linkedList.prepend(10);
        expect(linkedList.head.value).toBe(10);
        expect(linkedList.head.nextNode.value).toBe(20);
    });

    test('head checks if there is a head node otherwise return undefined', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        expect(linkedList.head.value).toBe(20);
    });

    test('tail returns last node', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);

        expect(linkedList.tail().value).toBe(500);
    });

    test('tail returns undefined if empty', () => {
        expect(linkedList.tail()).toBe(undefined);    
    }); 

    test('at method returns something', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);
        linkedList.at(2); 
        expect(linkedList.at(2)).toBe(500);
    });

    test('at method returns undefined without list', () => {
        linkedList.prepend();
        expect(linkedList.prepend()).toBe(undefined);
    })

    test('pop method returns head val', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);
        linkedList.pop();
        expect(linkedList.pop()).toBe(20);
    });

    test('pop without list returns undefined', () => {
        linkedList.pop();

        expect(linkedList.pop()).toBe(undefined);
    })

    test('contains method return true', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);

        expect(linkedList.contains(500)).toBe(true);
        
    });

    test('return index when value matches', () => {
        linkedList.prepend(1);
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.prepend(1);

        expect(linkedList.findIndex(1)).toBe(0);
    });

    test('return -1 when index value is not found', () => {
        linkedList.prepend(1);
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.prepend(1);

        expect(linkedList.findIndex(40)).toBe(-1);
    });

    test('return stringified array with expected formatting', () => {
        linkedList.append(1);
        linkedList.append(10);
        linkedList.append(20);
        linkedList.append(500);
        linkedList.append(600);

        expect(linkedList.toString()).toBe("( 1 ) -> ( 10 ) -> ( 20 ) -> ( 500 ) -> ( 600 ) -> null");
    });

    test ('empty string if toString is called on nothing', () => {
        expect(linkedList.toString()).toBe("");
    });

    test('handles index being 0', () => {
        let numbers = [2, 4, 6];
        linkedList.append(1);
        linkedList.append(10);
        linkedList.append(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.insertAt(0, ...numbers);

        expect(linkedList.toString()).toBe('( 2 ) -> ( 4 ) -> ( 6 ) -> ( 1 ) -> ( 10 ) -> ( 20 ) -> ( 500 ) -> ( 600 ) -> null');
    });


    test('insert multiple nodes at index 0', () => {
        linkedList.append(1);
        linkedList.append(10);
        linkedList.append(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.insertAt(0, 2, 4, 6);
        expect(linkedList.toString()).toBe('( 2 ) -> ( 4 ) -> ( 6 ) -> ( 1 ) -> ( 10 ) -> ( 20 ) -> ( 500 ) -> ( 600 ) -> null');
    });

    test('inserts multiple nodes in middle', () => {
        linkedList.append(1);
        linkedList.append(10);
        linkedList.append(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.insertAt(2, 2, 4, 6);
        expect(linkedList.toString()).toBe('( 1 ) -> ( 10 ) -> ( 2 ) -> ( 4 ) -> ( 6 ) -> ( 20 ) -> ( 500 ) -> ( 600 ) -> null');

    });


    test('insert single node', () => {
        linkedList.append(1);
        linkedList.append(10);
        linkedList.append(20);
        linkedList.append(500);
        linkedList.append(600);
        linkedList.insertAt(3, 99);
        expect(linkedList.toString()).toBe('( 1 ) -> ( 10 ) -> ( 20 ) -> ( 99 ) -> ( 500 ) -> ( 600 ) -> null');
        
    });

    test('negative index rejected', () => {
        expect(() => linkedList.insertAt(-1, 99)).toThrow(RangeError);
    })
    

});     
