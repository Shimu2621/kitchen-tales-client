import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout/MainLayout.jsx";
import Home from "./pages/homePage/Home.jsx";
import AllRecipesPage from "./pages/allRecipesPage/AllRecipesPage.jsx";
import SingleRecipePage from "./pages/homePage/singleRecipePage/SingleRecipePage.jsx";
import ContactUsPage from "./pages/contactUsPage/ContactUsPage.jsx";
import { Toaster } from "react-hot-toast";
import AuthorsPage from "./pages/authorsPage/AuthorsPage.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import RecipesPageByAuthor from "./pages/recipesPageByAuthor/RecipesPageByAuthor.jsx";
import BlogPage from "./pages/blogPage/BlogPage.jsx";
import SingleBlogPage from "./pages/homePage/singleBlogPage/SingleBlogPage.jsx";
import TeamMemberPage from "./pages/aboutPage/TeamMemberPage.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import PrivateRoute from "./pages/privateRoute/PrivateRoute.jsx";
import AdminLayout from "./layout/adminLayout/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import RecipeManagement from "./pages/admin/RecipeManagement.jsx";
import BlogManagement from "./pages/admin/BlogManagement.jsx";
import UserManagement from "./pages/admin/UserManagement.jsx";
import AuthorManagement from "./pages/admin/AuthorManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allRecipesPage" element={<AllRecipesPage />} />
          <Route
            path="/recipes/:id"
            element={
              <PrivateRoute
                element={<SingleRecipePage />}
                allowedRole={["user", "admin"]}
              />
            }
          />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route
            path="/recipes/author/:authorId"
            element={
              <PrivateRoute
                element={<RecipesPageByAuthor />}
                allowedRole={["user", "admin"]}
              />
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/blogs/:id"
            element={
              <PrivateRoute
                element={<SingleBlogPage />}
                allowedRole={["user", "admin"]}
              />
            }
          />
          <Route path="/aboutUs" element={<TeamMemberPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/admin-home" element={<AdminHome />} />
          <Route
            path="/admin/recipe-management"
            element={<RecipeManagement />}
          />
          <Route path="/admin/blog-management" element={<BlogManagement />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route
            path="/admin/author-management"
            element={<AuthorManagement />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
