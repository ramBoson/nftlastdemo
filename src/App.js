import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import First from "./First";
import Second from "./Second";
import Nf from "./Nft";
import NewPage from "./Newpage";
import Sendpage from "./Sendpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";


function App() {
  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">

        <center>

          <br></br>
          <br></br>
          <br></br>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to page</div>
              <br></br><br></br><br></br>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Nft");
                }}
              >
                Nft Deploy Contract     
              </button>




              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Sendpage");
                }}
>
  Transfer NFT-Owner
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Tokencreate");
                }}
              >
                Mint-Token
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                PrintallImage Page
              </button>


            </Route>
            
            <Route path="/Nft">
              <Nf />
            </Route>
            <Route path="/Newpage">
              <NewPage />
            </Route>
            <Route path="/Sendpage">
              <Sendpage />
            </Route>
            <Route path="/Tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/Printallimage">
              <Printallimage />
            </Route>
          </Switch>
        </Router>
        </center>
      </div>
      
    </div>
  );
}

export default App;
