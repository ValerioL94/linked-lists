class LinkedList {
  constructor() {}
  append(value) {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }
  prepend(value) {
    this.headNode = new Node(value);
  }
  size() {
    if (!this.headNode) return 0;
    let current = this.headNode;
    let n = 1;
    while (current.nextNode) {
      current = current.nextNode;
      n++;
    }
    return n;
  }
  head() {
    if (!this.headNode) return null;
    return this.headNode;
  }
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    let n = 1;
    while (current.nextNode) {
      current = current.nextNode;
      n++;
    }
    return current;
  }
  at(index) {
    if (index < 0 || index > this.size()) return null;
    if (index === 0) return this.headNode;
    else {
      let current = this.headNode;
      let n = 0;
      while (n < index) {
        n++;
        current = current.nextNode;
      }
      return current;
    }
  }
  pop() {
    if (!this.headNode) return null;
    let previous;
    let current = this.headNode;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    if (current === this.headNode) this.headNode = null;
    else previous.nextNode = null;
  }
  contains(value) {
    if (!this.headNode) return null;
    else if (this.headNode.value === value) return true;
    else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
        if (current.value === value) return true;
      }
      return false;
    }
  }
  find(value) {
    if (!this.headNode) return null;
    else if (this.headNode.value === value) return 0;
    else {
      let current = this.headNode;
      let n = 0;
      while (current.nextNode) {
        n++;
        current = current.nextNode;
        if (current.value === value) return n;
      }
      return null;
    }
  }
  toString() {
    if (!this.headNode) return null;
    else {
      let current = this.headNode;
      let print = `(${current.value}) -> `;
      while (current.nextNode) {
        current = current.nextNode;
        print += `(${current.value}) -> `;
      }
      return (print += 'null');
    }
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size()) return null;
    else {
      let node = new Node(value);
      if (index === 0) {
        node.nextNode = this.headNode;
        this.headNode = node;
      } else {
        let previous;
        let current = this.headNode;
        let n = 0;
        while (n < index) {
          previous = current;
          current = current.nextNode;
          n++;
        }
        node.nextNode = current;
        previous.nextNode = node;
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;
    else {
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
      } else {
        let previous;
        let current = this.headNode;
        let n = 0;
        while (n < index) {
          previous = current;
          current = current.nextNode;
          n++;
        }
        previous.nextNode = current.nextNode;
      }
    }
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

let test = new LinkedList();
// console.log(test);
test.prepend(10);
// console.log(test);
test.append(20);
test.append(30);
test.append(40);
test.append(50);
// console.dir(test, { depth: null });
// console.log(test.size());
// console.log(test.head());
// console.log(test.tail());
// console.log(test.at(2), test.at(20));
test.pop();
test.pop();
test.pop();
// console.dir(test, { depth: null });
// console.log(test.contains(20), test.contains(40));
// console.log(test.find(20), test.find(40));
// console.log(test.toString());
test.insertAt(5, 0);
test.insertAt(15, 2);
test.insertAt(30, 4);
test.insertAt(25, 4);
// console.dir(test, { depth: null });
test.removeAt(0);
test.removeAt(1);
test.removeAt(2);
console.dir(test, { depth: null });
