class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
