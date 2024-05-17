# React Internals

Explore the inner workings of React.js with `react-internals`. This repository is a deep dive into the architecture, design patterns, and advanced concepts that power React applications.

## About The Project

`react-internals` is an educational resource aimed at demystifying the complex mechanisms behind React.js. From the reconciliation algorithm to hooks and fiber architecture, this repository provides insights and code examples to help you understand what happens under the hood of one of the most popular JavaScript libraries.

# React Internal (Lecture)

## Lessons
### [Code](https://github.com/OpenRnD007/react-internals/tree/main/src/App.jsx)
```js
    <div id="main-wrapper-div">
      <h3 id="project-heading">{heading}</h3>
      <div id="random-number-id">Random Number: {random}</div>

      <button id="button-generate-random" onClick={() => {
        setRandom(new Date().getTime())
      }}>Generate</button>

      <button id="button-generate-heading" onClick={() => {
        setHeading("New Heading: "+new Date().getTime())
      }}>Generate Heading</button>
    </div>
```



### Run Code

```bash
  npm run dev
```



### Explaination
```bash
  Tree structure is as follows
  
  [div#root]
     [div#main-wrapper-div]
        [h3#project-heading]
          [text: {heading->state variable}]
        [div#random-number-id]
          [text: Random Number:] 
          [text: {random->state variable}]
        [button#button-generate-random]
          [text: Generate]
        [button#button-generate-heading]
           [text: Generate Heading]
  
  1. Updating the state variables 'heading' or 'random' triggers the beginWork() function in the react-dom library, targeting the current root and the work-in-progress root [div#root].
  2. The role of beginWork() is to recursively process each node in the tree.
  3. Subsequently, completeWork() is invoked for every node to assess and flag any changes for updates.
  4. For instance, clicking the [Generate Heading] button alters the header state, prompting an update flag for the text within [h3#project-heading].
  5. Once all nodes have been processed, commitRootImpl() initiates the commit phase, applying changes to the work-in-progress tree based on the update flags.
  6. Upon completion, the work-in-progress tree is switched to become the current tree.
  7. The diffing algorithm then determines which parts of the current tree need to be updated in the actual DOM.
 /
```

### Video
[video.mp4](https://github.com/OpenRnD007/react-internals/tree/main/video.mp4)

## Authors
- [@openrnd007](https://www.github.com/openrnd007)
