import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

interface Props {
  children: React.ReactChildren;
  user: { userId: "" };
}

//TODO Create private route for signed in users
const PrivateRoute: React.FC<Props> = ({ children, user, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.userId ? (
          children
        ) : (
          <Redirect
            {...rest}
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

// const mapStateToProps = (state) => {
//   return { user: state.user };
// };

export default PrivateRoute;
