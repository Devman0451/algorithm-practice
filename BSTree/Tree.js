const Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const Tree = function () {
    this.root = null;
}


//ADD
Tree.prototype.add = function (node) {
    this.addRecursive(node, this.root);
}

Tree.prototype.addRecursive = function (newNode, node) {
    if (this.root === null) {
        this.root = newNode;
    } else if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        }
        this.addRecursive(newNode, node.left);
    } else if (newNode.data > node.data) {
        if (node.right === null) {
            node.right = newNode;
        }
        this.addRecursive(newNode, node.right);
    }
}


//PRINT DATA
Tree.prototype.printAll = function () {
    this.visit(this.root);
}

Tree.prototype.visit = function (node) {
    if (node.left != null) {
        this.visit(node.left);
    }
    console.log(node.data);
    if (node.right != null) {
        this.visit(node.right);
    }
}


//SEARCH
Tree.prototype.search = function (data) {
    return this.searchTree(data, this.root);
}

Tree.prototype.searchTree = function (data, node) {
    if (node === null)           return false;
    else if (data === node.data) return true;
    else if (data < node.data)   return this.searchTree(data, node.left);
    else if (data > node.data)   return this.searchTree(data, node.right);
}


//DELETE
Tree.prototype.delete = function (data) {
    const deleteNode = function (node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null)                        return node.right;
            if (node.right === null)                       return node.left;

            let tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = deleteNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = deleteNode(node.left, data);
            return node;
        } else {
            node.right = deleteNode(node.right, data);
            return node;
        }
    }
    this.root = deleteNode(this.root, data);
}


let bst = new Tree();

for (let i = 0; i < 10; i++) {
    let node = new Node((Math.floor(Math.random() * 100)) + 1);
    bst.add(node);
}

bst.printAll();

