function HashTable(value) {
  this.buckets = Array(value);
  this.numBuckets = this.buckets.length;
}
function Nodes(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new Nodes(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new Nodes(key, value);
  }
};
HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  if (!this.buckets[index]) return null;
  else if (this.buckets[index]) {
    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key == key) {
        return currentNode.value;
        currentNode = currentNode.next;
      }
    }
    return null;
  }
};
HashTable.prototype.retrieveAll = function () {
  let bucketList = [];

  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      bucketList.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return bucketList;
};

let HT = new HashTable(30);
HT.insert("adrian", "40000000");
HT.insert("juma", "9200000000");
HT.insert("adrian", "10987650000000");
//console.log(HT.buckets);
//console.log(HT.get("adrian"));
console.log(HT.retrieveAll());
