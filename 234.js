/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = function (head) {
  if (head === null) return true;
  // 헤드 노드가 널이면 참

  let ll = head; // ll이 헤드와 같다고 하자
  const arr = [ll.val]; // arr 헤드의 밸류로 어레이를 만들자

  while (ll.next !== null) {
    ll = ll.next; //
    arr.push(ll.val);
  }
  let low = 0;
  let high = arr.lenght - 1;

  while (low < high) {
    if (arr[low] === arr[high]) {
      low++;
      high--;
    } else {
      return false;
    }
  }
  return true;
};
isPalindrome(head);
