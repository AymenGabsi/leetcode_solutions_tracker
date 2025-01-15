/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 !== null ? l1.val : 0; // Get the value from l1 or 0 if null
        const val2 = l2 !== null ? l2.val : 0; // Get the value from l2 or 0 if null
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10); // Update the carry
        current.next = new ListNode(sum % 10); // Create a new node with the current digit
        current = current.next;

        if (l1 !== null) l1 = l1.next; // Move to the next node in l1
        if (l2 !== null) l2 = l2.next; // Move to the next node in l2
    }

    return dummy.next; // Return the result list starting from the next node
};