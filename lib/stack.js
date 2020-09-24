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
    constructor(){
        this.value = null;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.store = new Array();
        this.store.length;
        this.store.push();
    }

    size(){
        return this.store.length;
    }

    push(ele){
        this.store.push(ele);
        return true; // or return something else
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
