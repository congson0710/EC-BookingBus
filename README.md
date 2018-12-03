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
