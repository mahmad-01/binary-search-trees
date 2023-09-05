const Node = require('.Node');
class Tree{
    constructor(array){
        this.root = buildTree(array);
    }
    buildTree(array){
        array = sortArr(array);
        let mid = (length(array)/2);
        let root = new Node(mid, this.buildTree(array.slice(0,mid)), this.buildTree(array.slice(mid+1)));
        return root;
    }

    sortArr(array){
        array.sort(function(a,b) {
            return a-b;
        });
        return array;
    }

    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}

export default Tree;