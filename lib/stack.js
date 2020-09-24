// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(ele){
        this.value = ele;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    push(ele){
        const newNode = new Node(ele);
        if(!this.top){
            this.top = newNode;
            this.length ++
        }else {
            newNode.next = this.top
            this.top = newNode
            this.length ++
        }
    return  this.length

    }

    pop(){
        return this.store.pop();
    }

    peek(){
        this.store[this.store.length - 1];
    }
}

exports.Node = Node;
exports.Stack = Stack;
