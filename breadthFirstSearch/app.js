//GRAPH SETUP
class Node {
    constructor(data) {
        this.data = data;
        this.edges = [];
        this.visited = false;
        this.parent = null;
    }
}


class Graph {
    constructor() {
        this.nodes = [];
    }
}

Graph.prototype.createGraph = function (data) {
    for (let i = 0; i < data.length; i++) {
        const movieNode = new Node(data[i].title);
        this.addNode(movieNode);
        for (let j = 0; j < data[i].cast.length; j++) {
            const castNode = new Node(data[i].cast[j]);
            this.addNode(castNode);
            this.addEdge(movieNode, castNode);
        }
    }
}

Graph.prototype.addNode = function (node) {
    for (let i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].data === node.data) return;
    }
    this.nodes.push(node);
}

Graph.prototype.addEdge = function (node, nodeAdd) {
    let getNode1 = null, getNode2 = null;

    for (let i = 0; i < this.nodes.length; i++) {
        if (node.data === this.nodes[i].data) getNode1 = this.nodes[i];
        if (nodeAdd.data === this.nodes[i].data) getNode2 = this.nodes[i];
    }

    if (getNode1 === null) getNode1 = node;
    if (getNode2 === null) getNode2 = nodeAdd;

    getNode1.edges.push(getNode2);
    getNode2.edges.push(getNode1);
}


//BFS
class BFS {
    constructor(graph) {
        this.graph = graph;
        this.found = null;
    }
}

BFS.prototype.run = function (searchTerm) {
    if (this.exec(searchTerm)) {
        this.printPath();
    } else {
        console.log("No Link")
        return false;
    }
}

BFS.prototype.exec = function (searchTerm) {
    const start = this.graph.nodes[1];  //Steve Guttenberg
    const queue = []

    if (start.data === searchTerm) return true;

    start.visited = true;
    queue.push(start);

    while (queue.length > 0) {
        const node = queue.shift();
        const edges = node.edges;

        for (let i = 0; i < edges.length; i++) {
            if (edges[i].visited === false) {
                edges[i].visited = true;
                edges[i].parent = node;
                queue.push(edges[i]);
            }
            if (edges[i].data === searchTerm) {
                found = edges[i];
                return true;
            } 
        }
    }

    return false;
}

BFS.prototype.printPath = function () {
    if (found) {
        while (found !== null) {
            console.log(found.data);
            found = found.parent;
        }
    }
}


//MAIN
let g1 = new Graph();

fetch('movies.json')
    .then(res => res.json())
    .then(data => {
        g1.createGraph(data.movies)
        let bfs = new BFS(g1);
        bfs.run('John Lithgow');
    });
