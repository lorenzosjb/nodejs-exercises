const express = require('express');
const jwt = require("jsonwebtoken");

// ingresar a una pagina reservada

const router = express.Router();

router.get("/admin/config", (req, res) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Not Authorized" });
    }
  
    // Bearer <token>>
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
  
    try {
      // Verify the token is valid
      const { user } = jwt.verify(token, JWT_SECRET);
      return res.status(200).json({
        message: `Congrats ${user}! You can now accesss the super secret resource`,
      });
    } catch (error) {
      return res.status(401).json({ error: "Not Authorized" });
    }
  });
  