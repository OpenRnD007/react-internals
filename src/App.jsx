import { useState } from 'react'
import './App.css'

function App() {
  const [heading, setHeading] = useState('React Internal Working (Manipulating react-dom library)')
  const [random, setRandom] = useState(0)

  return (
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
  )
}

export default App

/**
 * Tree sturcture is as follows
 * 
 * [div#root]
 *    [div#main-wrapper-div]
 *       [h3#project-heading]
 *         [text: {heading->state variable}]
 *       [div#random-number-id]
 *         [text: Random Number:] 
 *         [text: {random->state variable}]
 *       [button#button-generate-random]
 *         [text: Generate]
 *       [button#button-generate-heading]
 *          [text: Generate Heading]
 * 
 * Updating the state variables 'heading' or 'random' triggers the beginWork() function in the react-dom library, targeting the current root and the work-in-progress root [div#root].
 * The role of beginWork() is to recursively process each node in the tree.
 * Subsequently, completeWork() is invoked for every node to assess and flag any changes for updates.
 * For instance, clicking the [Generate Heading] button alters the header state, prompting an update flag for the text within [h3#project-heading].
 * Once all nodes have been processed, commitRootImpl() initiates the commit phase, applying changes to the work-in-progress tree based on the update flags.
 * Upon completion, the work-in-progress tree is switched to become the current tree.
 * The diffing algorithm then determines which parts of the current tree need to be updated in the actual DOM.
 */