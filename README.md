# EC-BookingBus
### To introduce an async action
Use method `thunkBodyCreator` and pass it an object under this format 
```
{
  dispatch: dispatch function,
  action: action name must be in capital case format (example: SearchTicket, Login, UserLogin, ...),
  route: route that this action will call to the API,
  data: the data to send to server for handling,
  type: 'post' | 'get'
}
```

### To introduce a reducer
Use method `reducerCreator` and pass it 2 params `actionName` and `reducerPath`.
`actionName` is the name of an action that this reducer takes care.
`reducerPath` path to the state in initial state.
 - Example: ```const userReducer = reducerCreator('GetUser', 'EcBooking/GET_USER')```
