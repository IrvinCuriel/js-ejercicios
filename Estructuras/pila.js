class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  };

  push(data) {
    this.top++;
    this.items[this.top] = data;
  };

  pop() {
    let deletedData;
    if (this.top) {
      deletedData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deletedData;
    };
  };

  getSize() {
    return this.top;
  };

  isEmpty() {
    if (!this.getSize()) {
      return true;
    } else {
      return false;
    }
  };

  peek() {
    if (this.isEmpty()) {
      return null
    };
    return this.items[this.top];
  };

  print() {
    let result = '';
    for (let i = this.top; i > 0; i--) {
      result += this.items[i] + ' ';
    };
    return result;
  };

};

//Para pribar push()
/*
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack);
*/

//Para pribar pop()
/*
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack.pop());
console.log(stack);
*/

//Para pribar getSize()
/*
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack.pop());
console.log(stack.getSize());
console.log(stack);
*/

//Para pribar isEmpty()
/*
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack.pop());
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack);
*/

//Para pribar peek()
/*
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack);
*/

//Para pribar print()
const stack = new Stack();
stack.push('elemento 1');
stack.push('elemento 2');
stack.push('elemento 3');
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.peek());
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack);
