import Homepage from "../src/components/home/Homepage";
import { UserProvider } from "./components/context/UserContext";
import { Route, Routes } from "react-router-dom";
import { Presentation } from "./components/viewprincipal/Presentation";
import Dashboard from "./components/viewprincipal/Dashboard";
import { ActivitieProvider } from "./components/context/ActivitieProvider";
import { TaskProvider } from "./components/context/TaskProvider";
import ProtectedRoute from "./components/hooks/ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <ActivitieProvider>
        <TaskProvider>
          <div className="w-screen relative h-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-lime-500">
            <Routes>
              <Route index element={<Homepage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/preview" element={<Presentation />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </TaskProvider>
      </ActivitieProvider>
    </UserProvider>
  );
}

export default App;
