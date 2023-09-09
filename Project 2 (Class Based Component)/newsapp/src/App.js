import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"general"}
              pageSize={6}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/business"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"business"}
              pageSize={6}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"entertainment"}
              pageSize={6}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"health"}
              pageSize={6}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"science"}
              pageSize={6}
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"sports"}
              pageSize={6}
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              // @ts-ignore
              setProgress={setProgress}
              apiKey={apiKey}
              key={"technology"}
              pageSize={6}
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
