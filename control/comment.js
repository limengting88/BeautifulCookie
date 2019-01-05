var comment = require('../model/comment');

module.exports = {
    commentRecipe: (req, res) => {   //用户评论
        var recipeComment = req.body.recipeComment;
        var username = req.body.username;
        var userIcon = req.body.userIcon;
        var status = req.body.status;
        var date1 = req.body.date1;
        var recipeName = req.body.recipeName;
        comment.commentRecipe(recipeComment, username, userIcon, status, date1, recipeName, err => {
            if (err == null) {
                res.json({
                    date: "评论成功"
                })
            }
        })
    },

    //管理员获取未审核的评论
    getComment: (req, res) => {
        const { limit, offset } = req.body;
        comment.getComment(limit, offset, err => {
            console.log(err);
            res.json({
                commentinfo: err
            })
        }
        );
    },

    //审核
    examineComment: (req, res) => {
        const recipeComment = req.body.recipeComment;
        comment.examineComment(recipeComment, err => {
            res.json({
                commentinfo: err
            })
        }
        );
    },

    //删除
    deleteComment: (req, res) => {
        const recipeComment1 = req.body.recipeComment;
        comment.deleteComment(recipeComment1, err => {
          res.json({
            commentinfo: err
          })
        }
        );
      },
  
    //发表
    releaseComment: (req, res) => {    
        var recipeName = req.body.recipeName;
        console.log(recipeName);
        comment.releaseComment(recipeName, err => {
            console.log(err);
            res.json({
                commentinfo: err
            })
        }
        );
    },



}

