function augmentingPath(graph, start, end) {
    let path = [];
    if(start === end) {
        return start;
    }
    let toCheck = [];
    let nodeCount = 0;

    for(let i = 0; i < graph.length; i++){
        toCheck[0] = graph[i][0];
        nodeCount++;
    }
    
    path[0] = start;
    let currentNode = start;
    let nextNode = null;
    let nextNodeVal = 0;
    
    while(nodeCount > 0){
        if(currentNode === end){
            return path;
        }
        for(connected[0] in graph[currentNode][connected][0]){
            if (connected[1] > nextNodeVal){
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
