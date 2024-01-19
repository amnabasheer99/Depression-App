import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY =
  "pk_test_c2luZ3VsYXItdG9ydG9pc2UtMTguY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <NavBar />
        <SignedIn>
          <Dashboard />
        </SignedIn>
        <SignedOut>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </SignedOut>
      </ClerkProvider>
    </Router>
  );
}

export default App;
