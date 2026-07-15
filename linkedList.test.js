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

    test('pop method returns head val', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.append(500);
        linkedList.pop();
        expect(linkedList.pop()).toBe(20);
    });

});     
