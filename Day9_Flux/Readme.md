# What is Flux 
  - Design pattern
  - unidirectional data flow
  Data Flow will be
  - Action-> dispatcher ->Store ->View
  - Redux

# What is Action:-
- Plain JS Object
- Ex
  export const addUser=(user:string) =>({
    type:'ADD_USER',
    payload:user
  });

# Dispatcher:-
- Central hub that sends actions to stores
- Ex 
   dispatcher.dipatch({
    type:'Add_TODO'
    Playload:"Learning Flux"
   })
# Store 
 - Holds the application state and BL
 - update itself based on the action
 - Enit changes to view
# View
- UI Layer
- Listen to store.

- Need to install Flux in the react app :- Npm install flux

