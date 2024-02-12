class LinkedList {
  constructor() {}
  append(value) {
    if (!this.headNode) return;
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
    if (!this.headNode) return;
    return this.headNode;
  }
  tail() {
    if (!this.headNode) return;
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
  pop() {}
  contains(value) {}
  find(value) {}
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
