import { firebase, provider } from '../firebase/firebase';
import React, { useContext, createContext, useState } from "react";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

const useAuth = () => {
  return useContext(authContext);
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  
  const signin = cb => {
    return () => {
      return  firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          const credential = result.credential;
          const token = credential.accessToken;
          const user = result.user;
          setUser("user");
          cb();
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
      });
    };
  };
  
  const signout = cb => {
    return () => {
      return firebase.auth().signOut().then(() => {
        console.log('You are logged out')
        setUser(null);
        cb();
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    };
  };
  
  return {
    user,
    signin,
    signout
  };
}

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
