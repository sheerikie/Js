function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}
LinkedList.prototype.addToHead = function (value) {
  let newnode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newnode;
  } else this.tail = newnode;

  this.head = newnode;
};
//remove
LinkedList.prototype.addToTail = function (value) {
  let newnode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newnode;
  } else this.head = newnode;

  this.tail = newnode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }
  let value = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  this.tail = this.tail.prev;
  let value = this.tail.value;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
};
LinkedList.prototype.searchValue = function (searchValue) {
  let currentValue = this.head;
  while (currentValue) {
    if (currentValue.value === searchValue) {
      return currentValue.value;
    }
    currentValue = currentValue.next;
  }
  return null;
};
LinkedList.prototype.indexOf = function (value) {
  let currentNode = this.head;
  let count = 0;
  let indexes = [];
  while (currentNode) {
    if (currentNode.value == value) {
      indexes.push(count);
    }
    currentNode = currentNode.next;
    count++;
  }
  return indexes;
};

let ll = new LinkedList();

ll.addToHead(200);
ll.addToHead(500);
ll.addToTail(600);

//ll.removeTail();
console.log(ll.indexOf(600));
