const express = require("express");
const EnCmsDB = require("./../db/EnCms");

const ordersRouter = express.Router();

// routes

ordersRouter.get("/", (req, res) => {
  let selectAllOrdersQuery = `SELECT Orders.id, Orders.date, Orders.hour, Orders.price, Orders.off, Orders.sale, Orders.popularity, Orders.count, Orders.sale_count, Orders.isActive, Users.firsname as userID, Products.title as productID FROM Orders INNER JOIN Users ON Users.id = Orders.userID INNER JOIN Products ON Products.id = Orders.productID`;

  EnCmsDB.query(selectAllOrdersQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

ordersRouter.delete("/:orderID", (req, res) => {
  let orderID = req.params.orderID;
  let deleteOrderQuery = `DELETE FROM Orders WHERE id = ${orderID}`;

  EnCmsDB.query(deleteOrderQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

ordersRouter.put("/active-order/:orderID/:isActive", (req, res) => {
  let orderID = req.params.orderID;
  let isActive = req.params.isActive;
  let activeOrderQuery = `UPDATE Orders SET isActive=${isActive} WHERE id = ${orderID}`;

  EnCmsDB.query(activeOrderQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = ordersRouter;
