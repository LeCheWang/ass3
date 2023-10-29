const express = require("express")
const router = express.Router()

const {
    renderAdminPage
} = require("../controllers/admin.controller")

router.route("/").get(renderAdminPage)

module.exports = router