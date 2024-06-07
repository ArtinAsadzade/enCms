const express = require("express");
const EnCmsDB = require("./../db/EnCms");

const commentsRouter = express.Router();

// routes

commentsRouter.get("/", (req, res) => {
  let selectAllCommentsQuery = `SELECT Comments.id, Comments.isAccept , Comments.body, Comments.date, Comments.hour, Users.firsname as userID, Products.title as productID FROM Comments INNER JOIN Users ON Users.id = Comments.userID INNER JOIN Products ON Products.id = Comments.productID`;

  EnCmsDB.query(selectAllCommentsQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.delete("/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let deleteCommentQuery = `DELETE FROM Comments WHERE id = ${commentID}`;
  EnCmsDB.query(deleteCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.put("/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  let editCommentQuery = `UPDATE Comments SET body="${req.body.body}" WHERE id = ${commentID}`;

  EnCmsDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = commentsRouter;
