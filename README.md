# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

In the worst case, we have to visit every node, represented by V.
In the worst case, we have to travese every edge, represented by E.
The worst case is essentially the end node being placed in the last checked of the adjacent nodes. This can be represented by $\Theta (V+E)$


## Sources and Plagarism Statement
Talked to Lily Brongo and glanced at the repos of Collin Davis and Lily Brongo, which helped me realize I needed to use Depth or Bredth First Search. No code was taken from these repos, and all implementation and work is my own.

Used the slides and this video [Michael Sambol](https://www.youtube.com/watch?v=Urx87-NMm6c&ab_channel=MichaelSambol) to help me understand Depth-First Search. Used some of the video's guidance on poping from the stack, then comparing.
In debugging, found my arrays were not appending as I thought. This website helped me figure another way out [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
