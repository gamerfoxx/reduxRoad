const initialWagonState ={
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const reducer = (state = initialWagonState, action) => {
   switch (action.type) {
     case 'gather': {
       return {
         ...state,
         supplies: state.supplies + 15,
         distance: state.distance,
         days: state.days + 1
       }
     }
     case 'travel': {
       if(state.supplies - (20 * action.payload) < 0){
         return{...state}
       }else
       {return {
         ...state,
         supplies: state.supplies - (20 * action.payload),
         distance: state.distance + (10 * action.payload),
         days: state.days + action.payload
       }}
     }
     case 'tippedWagon': {
       return {
         ...state,
         supplies: state.supplies - 30,
         distance: state.distance,
         days: state.days + 1
       }
     }
     case 'sell': {
       if(state.supplies - 20 < 0){
         return{...state}
       }else
       {
       return {
         ...state,
         supplies: state.supplies - 20,
         cash: state.cash + 5
       }}
     }
  
        case 'buy': {
       if(state.cash - 15 < 0){
         return{...state}
       }else
       {
       return {
         ...state,
         supplies: state.supplies + 25,
         cash: state.cash - 15
       }}
     }
  
     case 'theft': {
       return {
         ...state,
         cash: state.cash - (state.cash / 2)
       }}
     
     default: {
       return state;
     }
   }
  }
  const wagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  let testState = reducer(undefined, {});
  
  testState = reducer(initialWagonState, {type: 'travel', payload: 1});
  console.log(testState);
  testState = reducer(testState, {type: 'sell'});
  console.log(testState);
  testState = reducer(testState, {type: 'buy'});
  console.log(testState);
  testState = reducer(testState, {type: 'theft'});
  console.log(testState);
  testState = reducer(testState, {type: 'gather'});
  console.log(testState);
  testState = reducer(testState, {type: 'tippedWagon'});
  console.log(testState);
  testState = reducer(testState, {type: 'travel', payload: 3});
  console.log(testState);
  