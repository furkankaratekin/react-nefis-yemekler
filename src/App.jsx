import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import CategoriesPage from "./pages/CategoriesPage"
import ListCategoryPage from "./pages/ListCategoryPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import MenusPage from "./pages/MenusPage"
import WhatToCookPage from "./pages/WhatToCookPage"
import MısırlıPilavPage from "./pages/InMenuForWhatToCook/MısırlıPilavPage"
import SezarSalataPage from "./pages/InMenuForWhatToCook/SezarSalataPage"
import TarhanaPage from "./pages/InMenuForWhatToCook/TarhanaPage"
import YaprakSarmaPage from "./pages/InMenuForWhatToCook/YaprakSarmaPage"
import ListRecipePage from "./pages/ListRecipePage";
import ListMenuPage from "./pages/ListMenuPage"
import ProfilePage from "./pages/ProfilePage"
import CreateRecipePage from "./pages/CreateRecipePage"


import PageNotFoundPage from "./pages/PageNotFoundPage"

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
        <Route path="/list-recipe/:recipeId" element={<ListRecipePage />} />
        <Route path="/list-menu/:menuId" element={<ListMenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/what-to-cook" element={<WhatToCookPage />} />
        <Route path="/tarhana" element={<TarhanaPage />} />
        <Route path="/sarma" element={<YaprakSarmaPage />} />
        <Route path="/pilav" element={<MısırlıPilavPage />} />
        <Route path="/salata" element={<SezarSalataPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="*" element={<PageNotFoundPage />} />
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
