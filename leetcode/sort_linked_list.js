
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// SortList
// param: head - {ListNode}
// return {ListNode}

var sortList = function(head) {
    
    // check for list being 0 or 1 length
    if (head == null || head.next == null) {
        return head
    }
    let temp = head
    let slow = head
    let fast = head
    
    // We will split the list into two portions recursively, until only single items remain

    while (fast != null && fast.next != null) {
        temp = slow
        slow = slow.next
        fast = fast.next.next
    }

    // Set end of left list
    temp.next = null

    // Recursively split the list until only single elements remain
    let left = sortList(head)
    let right = sortList(slow)

    return merge(left, right)

};

var merge = function(L1, L2){

    let sorted_temp = new ListNode(0)
    let current_node = sorted_temp

    while (L1 != null && L2 != null){
        if (L1.val < L2.val){
            current_node.next = L1
            L1 = L1.next
        }
        else {
            current_node.next = L2
            L2 = L2.next
        }

        current_node = current_node.next

    }

    if (L1 != null){
        current_node.next = L1
        // L1 = L1.next
    }
    if (L2 != null){
        current_node.next = L2
        // L2 = L2.next
    }

    return sorted_temp.next
}

var makeLists = function(Numstring){
    let stringArray = Numstring.split('')
    let current = new ListNode(0);
    let result = current;

    stringArray.forEach(item => {
        current.next = new ListNode(parseInt(item))
        current = current.next
    })

    return result.next
}

let List1 = makeLists("4213")
let List2 = makeLists("81472381")

console.log(sortList(List1))
console.log(sortList(List2))