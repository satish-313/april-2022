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

const reverseKgroup = (head, k) => {
  let current = head;
  let len = 0;

  while (current) {
    len += 1;
    current = current.next;
  }

  let c = Math.floor(len / k);
  let index = 0,
    prev = null,
    next;

  current = head;
  while (current) {
    if (index < c) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      index += 1;
    } else {
      
      // prev.next = next;
      current = current.next
      break;
    }
  }

  while (prev) {
    process.stdout.write(`${prev.val} `);
    prev = prev.next;
  }
  
  return head;
};

console.log(reverseKgroup(a, 2));
