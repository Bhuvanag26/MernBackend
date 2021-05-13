const express = require("express");
const router = express.Router();

const{getCategoryById , createCategory ,getCategory , getAllCategory , updateCategory , removeCategory} = require("../controllers/category");
const{isSignedIn , isAdmin , isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
// params
router.param("userId" , getUserById);
router.param("categoryId" , getCategoryById);

// actual routes

// create routes
router.post("/category/create/:userId"  , isSignedIn , isAuthenticated , isAdmin , createCategory);
// read
router.get("/category/:categoryId" , getCategory);
router.get("/categories" , getAllCategory);
// update route
router.put("/category/:categoryId/:user:Id", isSignedIn , isAuthenticated , isAdmin , updateCategory);

// delte route
router.delete("/category/:categoryId/:user:Id", isSignedIn , isAuthenticated , isAdmin , removeCategory);





module.exports = router;