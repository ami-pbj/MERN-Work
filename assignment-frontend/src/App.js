import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Header, Footer } from "./components";
import { Signin, Signup, Dashboard, Employees, Edit, NotFound } from "./pages";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Common Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={[<Signin />]} />
          <Route path="/create" element={[<Signup />]} />
          <Route path="/dashboard" element={[<Header />, <Dashboard />]} />

          <Route path="/employees" element={[<Header />, <Employees />]} />

          <Route path="/employees/edit" element={[<Header />, <Edit />]} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        {/* Common Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
