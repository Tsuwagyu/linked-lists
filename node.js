
// Factory

function Node(value) {

    return {
        value: value || null,
        nextNode: null,
    }
}

export default Node;