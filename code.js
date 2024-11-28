function augmentingPath(graph, start, end) {
    let path = [];
    if(start === end) {
        return start;
    }
    let nodeCount = graph.length;
    
    path[0] = start;
    let currentNode = start;
    let nextNode = null;
    let nextNodeVal = 0;
    
    while(nodeCount > 0){
        if(currentNode === end){
            return path;
        }
        if (graph)
        for(connected[0] in graph[currentNode][connected][0]){
            if (connected[1] < nextNodeVal){
                nextNode = connected;
                nextNodeVal = connected[1];
            }
        }
        path.push(nextNode);
        currentNode = nextNode;
        nextNodeVal = 0;
        nodeCount--;
    }
    return [];
}
