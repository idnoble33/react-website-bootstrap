import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="images/standout.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <h3>Using Proxies with Redux Types</h3>
              <p>One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly.
                
              </p>
              In any application that I have built, most bugs that I have run into are simply due to typos. However, the solution to this particular problem is harder to spot because no errors are raised when the application is run. Take a look at the snippet below.
              <p>/ actionTypes.js

{/* export const FETCH_FILE_REQUEST = 'fetch_file_request';
export const FETCH_FILE_SUCCESS = 'fetch_file_success';
export const FETCH_FILE_FAIL = 'fetch_file_fail';

 */}
// filesReducer.js

i{/* mport {
  FETCH_FILE_REQUEST,
  FETCH_FILE_SUCESS,
  FETCH_FILE_FAIL
} from '../actions/actionTypes';

const filesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILE_SUCESS:
      return { ...state, file: action.payload };
    default:
      return state;
  }
}
 */}
export default filesReducer;</p>
              <p>Assuming we dispatched an action with type FETCH_FILE_SUCCESS, the filesReducer should catch the action before the default case is returned. But what if that is not happening? Where do we start the debugging process. There does not appear to be anything wrong with the code in the reducer; the action type was imported and matches the case in the switch statement. There are no errors in the browser. Where is the issue?</p>
              <p>You may have noticed that I misspelled SUCCESS in filesReducer.js, but the reason this can be hard to catch is because importing undefined types does not cause an error, so when we import FETCH_FILE_SUCESS, its value is actually undefined, so our reducer always hits the default case.

It would be nice if the existing import/export system could help us catch this. Unfortunately, since action types are just strings, validating their existence is challenging. Luckily, we have another option.</p>
              <h3>Enter Proxies</h3><p>
Proxies are a feature of ES2015 that allow us to customize operations on a object. They can be used in many different ways, and you can find some useful examples here and here. For our problem, this example from Mozilla looks promising:</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <p>First, we define a object containing all our action types. Then we define our validator handler typeValidator. The get method inside our handler is called a trap, and provides access to the properties of a object. If the property we are looking for, an action type, in this case, exists in the types object, return that prop, unmodified. Otherwise, throw an error because the prop does not exist.

Finally, export a new proxy, passing the types object as the target and the typeValidator as the handler. However, it is important to note that the ES2015 module system does not work well with proxies, so module.exports and require() must be used for exporting and importing the types.

Barely any code needs to change in the reducer and action creator files, but in order for the action types to be imported successfully, we just need couple lines of code in a new file:.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
