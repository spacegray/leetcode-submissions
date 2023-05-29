class DoublyLinkedListNode {
  key: number;
  value: number;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  capacity: number;
  size: number;
  map: Map<number, DoublyLinkedListNode>;
  head: DoublyLinkedListNode;
  tail: DoublyLinkedListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map();
    this.head = new DoublyLinkedListNode(0, 0);
    this.tail = new DoublyLinkedListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      this.moveToFront(node); // Move the node to the front of the list
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value; // Update the value
      this.moveToFront(node); // Move the node to the front of the list
    } else {
      const newNode = new DoublyLinkedListNode(key, value);
      this.map.set(key, newNode); // Add the new node to the map
      this.addToFront(newNode); // Add the new node to the front of the list
      this.size++;

      if (this.size > this.capacity) {
        const removedNode = this.removeLast(); // Remove the least recently used node
        this.map.delete(removedNode.key); // Remove the node from the map
        this.size--;
      }
    }
  }

  private moveToFront(node: DoublyLinkedListNode): void {
    this.removeNode(node);
    this.addToFront(node);
  }

  private removeNode(node: DoublyLinkedListNode): void {
    const prevNode = node.prev!;
    const nextNode = node.next!;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  private addToFront(node: DoublyLinkedListNode): void {
    const nextNode = this.head.next!;
    node.next = nextNode;
    node.prev = this.head;
    this.head.next = node;
    nextNode.prev = node;
  }

  private removeLast(): DoublyLinkedListNode {
    const lastNode = this.tail.prev!;
    this.removeNode(lastNode);
    return lastNode;
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */