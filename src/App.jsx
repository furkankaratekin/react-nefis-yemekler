import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignUp from "./pages/SignUp"
import Categories from "./pages/Categories"
import ListCategory from "./pages/ListCategory"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list-category" element={<ListCategory />} />
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
