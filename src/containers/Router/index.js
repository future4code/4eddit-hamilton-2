import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import FeedPage from "../FeedPage";
import SignUpPage from "../SignUpPage";
import PostDetailPage from "../PostDetailPage";



export const routes = {
  root: "/",
  signUp: "/signup",
  feed: "/feed",
  postDetail: "/feed/post",
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
        <Route exact path={routes.postDetail} component={PostDetailPage} />
        
      </Switch>
    </ConnectedRouter>
  );
}

// export default Router;
