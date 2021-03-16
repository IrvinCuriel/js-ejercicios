class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  };
};

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };

  addToHead(data) {
    const newNode = new Node(data, this.head, null);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    };
    this.size++;
  };

  addToTail(data){
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    };
    this.size++;
  };

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    };
    const newNode = new Node(data, null, null);
    let current = this.head;
    let previous;
    if (index === 0) {
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      };
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    };
    this.size++;
  };

  print() {
    let current = this.head;
    let result = '';
    while(current) {
      result += current.data + ' <-> ';
      current = current.next;
    };
    return result += ' X ';
  };

  reversePrint() {
    let current = this.tail;
    let result = '';
    while (current) {
      result += current.data + ' <-> ';
      current = current.prev;
    };
    return result += ' X ';
  };


};

const doubleLinkedList = new DoubleLinkedList();
console.log(doubleLinkedList);
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(2);
doubleLinkedList.addToTail(7);
doubleLinkedList.addToTail(8);
doubleLinkedList.insertAt(4, 2);
console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
