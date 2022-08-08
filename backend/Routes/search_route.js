const express = require("express");

const searchController = require("../controllers/searchController")

const router = express.Router();



router.route('/search')
      .get(searchController.toSearch)


module.exports = router; 