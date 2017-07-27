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

    if (index === 0) {
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
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
};

const size = (linklist) => {
  let node = linkedList.head;
  let counter = 0;
  while (node.next !== null){
    node = node.next;
    counter++;
  }
  return counter;
};

const isEmpty = (link) => {
  if(link.head === null) return true;
  return false;
};

const findPrevious = (link, value) => {
  let node = link.head;
  while(node.next !== null){
    if(node.next.value === value) return node;
    node = node.next;
  }
};

const findLast = (link) => {
  let node = link.head;
  while(node.next !== null){
    node = node.next;
  }
  return node;
};

const linkedList = new LinkedList;

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

const findMiddleOf = (link, ptr1=link.head, ptr2=findLast(link), boolean) => {
  if(ptr1.value === ptr2.value) return ptr1.value;
  //if true, move ptr1
  if(boolean){
    ptr1 = ptr1.next;
  }
  //if false move ptr2
  else{
    ptr2 = findPrevious(link, ptr2.value);
  }
  return findMiddleOf(link, ptr1, ptr2, !boolean);
};

// console.log(findMiddleOf(linkedList));

const getNode = (link, value) => {
  let node = link.head;
  while(node.value !== value){
    node = node.next;
  }
  return node;
};

//Write an algorithm to find the third element from the end of a linked list without using the .length property
const findThirdFromEnd = (link) => {
  let node = link.head;
  while(node.next.next.next !== null) {
    node = node.next;
  }
  return node;
};

//console.log(findThirdFromEnd(linkedList));

//no more getNode, we only have to go through this once
//

// const reverse = (link, node=link.head, nextNode=getNode(link, node.next.value)) => {
//   if(nextNode.next === null){
//     return link;
//   }
//   nextNode.next = node;
//   return reverse(link, getNode(link, nextNode.next.next.value), getNode(link, nextNode.next.value));
// };
// console.log(reverse(linkedList));

const reverse = (node) => {
  if(node.next === null) return node;
  const oldNode = node.next;
  node.next = null;
  const x = reverse(oldNode);
  oldNode.next = node;
  return x;
};
