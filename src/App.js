import React from "react";
import './css/App.sass';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
      <Router>
        <div className="wrapper">
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/posts/new" element={<CreatePostPage />} />
              <Route exact path="/posts/:id" element={<PostPage />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
