import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import CategoriesPage from "./pages/CategoriesPage"
import ListCategoryPage from "./pages/ListCategoryPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import MenusPage from "./pages/MenusPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/list-category" element={<ListCategoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menus" element={<MenusPage />} />
      </Routes>
    </Router>
  );
}

export default App

//    <Router>
//      <Routes>
//        <Route path="/" element={<SearchInput />} />
//        <Route path="/websites" element={<WebsitesList />} />
//        <Route path="/websites/:id" element={<WebSitesContent />} />{" "}
//        <Route path="/sign-in" element={<SignIn />} />
//        <Route path="/sign-up" element={<SignUp />} />
//        <Route path="/videos" element={<VideosList />} />
//        <Route path="/maps" element={<MapSeatch />} />
//        <Route path="/pictures" element={<PictureList />} />
//        <Route element={<PrivateRoute />}>
//          <Route path="/profile" element={<Profile />} />
//        </Route>
//        {/* Add this line */}
//      </Routes>
//    </Router>
