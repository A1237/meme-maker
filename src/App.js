import React from "react";
import "./App.scss";
import Layout from "./components/layout-container/layout";
import Controls from "./components/controls/controls";
import Playground from "./components/playground/playground";

function App() {
  return (
    <div className="App">
      <Layout>
        <Controls />
        <Playground />
      </Layout>
    </div>
  );
}

export default App;
