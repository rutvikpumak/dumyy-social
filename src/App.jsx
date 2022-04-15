import "./App.css";
import { FollowBar, MainContainer, MenuBar, NavBar } from "./component";
import { Home, Modal, Profile, ProfileModal, Notification, Login } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container relative mx-auto">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <Home />
              </MainContainer>
            }
          />
          <Route
            path="/profile"
            element={
              <MainContainer>
                <Profile />
              </MainContainer>
            }
          />
          <Route
            path="/notification"
            element={
              <MainContainer>
                <Notification />
              </MainContainer>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Modal />
        <ProfileModal />
      </Router>
    </div>
  );
}

export default App;
