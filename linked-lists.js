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
    if (index === 1) return this.headNode;
    else {
      let current = this.headNode;
      let n = 1;
      while (n < index) {
        n++;
        current = current.nextNode;
      }
      return current;
    }
  }
  pop() {
    if (!this.headNode) return null;
    let current = this.headNode;
    let prev;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    if (current === this.headNode) this.headNode = null;
    else prev.nextNode = null;
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
    else if (this.headNode.value === value) return 1;
    else {
      let current = this.headNode;
      let n = 1;
      while (current.nextNode) {
        n++;
        current = current.nextNode;
        if (current.value === value) return n;
      }
      return null;
    }
  }
  toString() {}
  insertAt(value, index) {}
  removeAt(index) {}
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
let test = new LinkedList();
// console.log(test);
test.prepend(10);
// console.log(test);
test.append(20);
// console.log(test);
test.append(30);
test.append(40);
test.append(50);
test.append(60);
// console.dir(test, { depth: null });
// console.log(test.size());
// console.log(test.head());
// console.log(test.tail());
// console.log(test.at(4));
test.pop();
test.pop();
test.pop();
// console.dir(test, { depth: null });
// console.log(test.contains(20), test.contains(40));
console.log(test.find(20), test.find(40));
