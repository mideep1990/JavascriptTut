const arrayLangs = [
    {lang:"Java",people:40,level:7},
    {lang:"Javascript",people:74,level:9},
    {lang:"C#",people:35,level:7},
    {lang:"php",people:18,level:4},
    {lang:"python",people:24,level:3},
    {lang:"R",people:10,level:4},
    {lang:"typescript",people:30,level:8},
    {lang:"VB",people:20,level:6}
]

let sm = "Deepankar,Mishra,SomeMore,Else"
console.log(sm.split(','))

/*var addTwoNumbers = function(l1, l2) {
    
    var res = [];
    let carry = 0;
    let temp = 0;
    for(let i=l1.length-1;i>=0;i--)
    {
        temp = l1[i]+l2[i]
        temp = temp + carry;
        carry = temp>=10?Number(String(temp).charAt(0)):0
        temp = temp>=10?(10 - temp):temp
        res.push(temp)
    }
    
    console.log("Result : ",res)
};*/

function ListNode(val, next) {
        
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

var addTwoNumbers = function(l1, l2) {
    console.log("===>>> ",l1.val," / ",l2.val);
        let sum = 0;
        let current = new ListNode(0);
        let result = current;
        
        while(l1 || l2) {
            
            if(l1) {
                sum += l1.val;
                l1 = l1.next;
            }
            
            if(l2) {
                sum += l2.val;
                l2 = l2.next;
            }
            
            current.next = new ListNode(sum % 10);
            current = current.next;
            
            sum = sum > 9 ? 1 : 0;
        }
        
        if(sum) {
            current.next = new ListNode(sum);
        }
        
        return result.next;
    };

console.log("ret - ",addTwoNumbers([2,4,3],new ListNode(5,4,2)))

