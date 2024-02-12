class LinkedList {
  constructor() {}
  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }
  prepend(value) {
    if (!this.headNode) {
      return (this.headNode = new Node(value));
    }
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
  tail() {}
  at(index) {}
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
console.log(test);
test.append(20);
console.log(test);
test.append(30);
console.dir(test, { depth: null });
// // console.log(test.headNode);
