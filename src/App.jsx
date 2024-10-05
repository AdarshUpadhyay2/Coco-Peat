import {
  BrowserRouter as Router,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ApplicationPage from "./ApplicationPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route
          path="/application/:applicationId"
          element={<ApplicationPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
