import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import FamilyPage from "./pages/FamilyPage";
import HomePage from "./pages/HomePage";
import MemoriesPage from "./pages/MemoriesPage";
import MessagePage from "./pages/MessagePage";
import PoemPage from "./pages/PoemPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Shell>
            <HomePage />
          </Shell>
        }
      />
      <Route
        path="/poem"
        element={
          <Shell>
            <PoemPage />
          </Shell>
        }
      />
      <Route
        path="/message"
        element={
          <Shell>
            <MessagePage />
          </Shell>
        }
      />
      <Route
        path="/memories"
        element={
          <Shell>
            <MemoriesPage />
          </Shell>
        }
      />
      <Route
        path="/family"
        element={
          <Shell denseSnow special>
            <FamilyPage />
          </Shell>
        }
      />
    </Routes>
  );
}
