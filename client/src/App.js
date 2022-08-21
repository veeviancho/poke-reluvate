import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import ProtectedRoute from "./pages/ProtectedRoute"
import SharedLayout from "./pages/SharedLayout";
import Catch from "./pages/Catch";
import Collection from "./pages/Collection";

import PublicRoutes from "./pages/PublicRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Box sx={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'Poppins, Arial, Helvetica, sans-serif' 
    }}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
          <Route index element={<Catch />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
        <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
      </Routes>
    </Box>
  )
}

export default App;
