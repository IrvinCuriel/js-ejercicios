class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  add(data) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      };
      current.next = newNode;
    };
    this.size++;
  };

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null
    };

    const newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      };
      newNode.next = current;
      previous.next = newNode;
    };
    this.size++;
  };

};

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.insertAt(10,1);
linkedList.add(99);
console.log(linkedList);
