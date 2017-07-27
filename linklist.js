'use strict';

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Index error');
    }

    const newNode = {
      value
    };

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      // Find the node which we want to insert after
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }

    this.length++;
  }

  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    return this._find(index).value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (index == 0) {
      this.head = this.head.next;
    }
    else {
      // Find the node before the one we want to remove
      const node = this._find(index - 1);
      node.next = node.next.next;
    }

    this.length--;
  }
}

const display = (linklist) => {
  let node = linklist.head;
  for (let i = 0; i < linklist.length; i++) {
    console.log(node.value);
    node = node.next;
  }
};

const size = (linklist) => {
  console.log(linklist.length);
};

const isEmpty = (link) => {
  if(!link.length) return true;
  return false;
};

const findPrevious = (link, index) => {
  console.log(link.get(index - 1));
};

const findLast = (link) => {
  console.log(link.get(link.length - 1));
};

const linkedList = new LinkedList ;

linkedList.insert(0, 1);
linkedList.insert(1, 2);
// display(linkedList);

linkedList.insert(2, 3);
linkedList.insert(3, 4);
linkedList.insert(4, 5);
//size(linkedList);
// display(linkedList);
// console.log(isEmpty(linkedList));
// findPrevious(linkedList, 3);
// findLast(linkedList);



//Write an algorithm to find the middle element of a linked list without using the .length property.

const findLengthOf = (link, node=link.head, length=1) => {
  if(node.next === null){
    return length;
  }
  return findLengthOf(link, node=node.next, length+1);
};

const findMiddleOf = (link) => {
  return link.get(Math.floor(findLengthOf(link)/2));
};
console.log(findMiddleOf(linkedList));