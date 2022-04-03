//https://leetcode-cn.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//模拟
 var addTwoNumbers = function(l1, l2) {
    //之后直接操作copy,由于是引用类型,所以res和copy的值会保持一致,carry记录进位
    //这里直接处理了第一个数,省略后续判断
    let res=copy=new ListNode((l1.val+l2.val)%10),carry=~~((l1.val+l2.val)/10)
    l1=l1.next
    l2=l2.next

    //以最长的链表为循环条件
    while(l1||l2){
        let sum=(l1?.val||0)+(l2?.val||0)+carry
        carry=~~(sum/10)

        copy.next=new ListNode(sum%10)
        copy=copy.next

        l1=l1?.next
        l2=l2?.next
    }

    //处理最后一位进位
    if(carry>0) copy.next=new ListNode(carry)

    return res
};