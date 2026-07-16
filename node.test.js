import Node from "../linked-lists/node";

test("check for Node", () => {
    const n = Node(0)
    expect(n.value).toBe(null);
});