function augmentingPath(graph, start, end) {
    // if the start is the end, then we're done!
    if(start === end) {
        return [start];
    }

    // make a new set to hold visited elements
    let visited = new Set();
    // stack holds the node being checked, and the whole path to that node, in this case start and the path to that node
    let stack = [[start, [start]]];

    // until the stack is empty, checks the adjacent nodes. Once the stack is empty, there are no more adjacent nodes to check
    // uses a depth first implementation
    while(stack.length > 0){
        // takes the current top element of the stack, setting its node = currentNode and retrieving the path
        let [currentNode, path] = stack.pop();

        // if currentNode is the goal node, we have our whole path
        if(currentNode === end){
            return path;
        }

        // we add currentNode to the visited set
        visited.add(currentNode);
    
        // we loop through each node that our current node is connected to.
        for(let adjNode in graph[currentNode]) {
            // if the adjacent node has not yet been visited
            if(!visited.has(adjNode)){                    
                // push that node and its path onto the stack to check next
                stack.push([adjNode,[...path, adjNode]]);
            }
        }
        }
    return [];
}
