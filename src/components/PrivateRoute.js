const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )