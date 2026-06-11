# Day 8
4. Using refs (Uncontrolled Components)
5. PropTypes
6. Component Life Cycle
7. CSS Styling, Bootstrap in React
8. Composable Components (Multiple Components)
React application interfacing with backend server for data (json-server)
9. React Router
10. Routing Transition Concepts (Transition into and Transition from)
11. Higher Order Components, Render Props
12. Form handling using Formik, Yup
13. Flux Pattern (Action, Dispatcher, Stores)
Dependancy Injection
Component Life cycle and basic building blocks of SPA Framework

# LifeCycle of the Coimponent:-
- Mounting
    - in class componets :- componentDidMount()
    - in functional componets :- useEffect()
- Updating
    - in class componets :- componentDidUpdate()
    - in functional componets :- useEffect()
- Unmounting
    - in class componets :- componentWillUnmount()
    - in functional componets :- useEffect() -> return()

# Fetch Data from JSON(addProduct Page)
    - Same as did in Js just need to add the fetch in useEffect.

# routers(Login Page):-
  - install routers using 
      npm install react-router-dom
  - add BrowserRouter in main.jsx
     import { BrowserRouter } from 'react-router-dom'
 - add Route and routes in my app.js
 - add Link in header
 - use navigate to load the route -> useNavigate hook
# Form validation(Login Page)
  - create validate method
  - put the logic 
  - create an array of errors
  - add Error and helptext in UI textboxs
# Ref :-
  - use DOM element directly

# prop-type:-
 - used to validate the props passed to comp.
 - catch the errors
 - improve the readabality
 - Validate data types
# Homework :- Update and delete product.

