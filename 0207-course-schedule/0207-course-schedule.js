/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/* 
Strategy:
1. Create a graph with numCourses nodes.

2. For each pair [ai, bi] in prerequisites, add a directed edge from bi to ai in the graph.

3. Initialize an array called inDegrees with numCourses zeros. For each node in the graph, count the number of incoming edges (i.e., prerequisites) and store the count in inDegrees.

4. Initialize a queue with all nodes in the graph that have no incoming edges (i.e., inDegrees[i] == 0).

5. While the queue is not empty, remove a node from the queue and reduce the in-degree of its neighbors by 1. If the in-degree of a neighbor becomes 0, add it to the queue.

6. Repeat step 5 until the queue is empty.

7. If all nodes have been visited in step 5, return true. Otherwise, return false (which means there is a cycle in the graph).

*/

var canFinish = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill().map(() => []);
    const inDegrees = Array(numCourses).fill(0);

    for (const [u, v] of prerequisites) {
        graph[v].push(u);
        inDegrees[u]++;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    while (queue.length > 0) {
        const u = queue.shift();
        count++;

        for (const v of graph[u]) {
            inDegrees[v]--;

            if (inDegrees[v] === 0) {
                queue.push(v);
            }
        }
    }

    return count === numCourses;
};
