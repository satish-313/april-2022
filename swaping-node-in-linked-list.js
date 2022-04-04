class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const swapNodes = (head, k) => {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  let temp = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = temp;

  let nhead = new ListNode(arr[0]);
  let res = nhead;
  for (let i = 1; i < arr.length; i++) {
    nhead.next = new ListNode(arr[i]);
    nhead = nhead.next;
  }

  return res;
};

const swapNodes1 = function (head, k) {
  let current = head;
  let right = head;
  let left = head;

  for (let i = 1; i < k; i++) {
    current = current.next;
  }

  left = current;

  while (current.next !== null) {
    right = right.next;
    current = current.next;
  }

  let temp = right.val;
  right.val = left.val;
  left.val = temp;

  return head;
};

// console.log(swapNodes(a, 2));
console.log(swapNodes1(a, 2));
