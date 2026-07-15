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
        expect(linkedList.heads()).toBe(undefined);
    });

    test('head returns a value if we update it with something instead of undefined', () => {
        linkedList.prepend(10);
        linkedList.prepend(20);
        linkedList.prepend(30);
        linkedList.append(500);

        // head is going to be 30 bc we're moving hea
        expect(linkedList.head.value).toBe(30);
        expect(linkedList.tail().value).toBe(500);
    });

    test('tail returns final node', () => {
        
    })
});     
