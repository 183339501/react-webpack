/**
 * Created by py on 2016/5/18.
 */
import React from "react";
import $ from "jquery";
import {CommentList,CommentForm} from "./ComentsForm";
const CommentBox = React.createClass({
    loadCommentServeice : function () {
        $.ajax({
            url:this.props.url,
            dataType : "json",
            success : function (data){
                this.setState({data:data});
            }.bind(this),
            error : function (err) {
                console.log(err)
            }
        });
    },
    handleCommentSubmit : function (comment) {
      $.ajax({
          url : this.props.url,
          type:"post",
          data : comment,
          dataType : "json",
          contentType:"application/json;charset=UTF-8",
          success : function (data) {
                this.setState({data:data});
          }.bind(this),
          error : function (e){
              alert("失败");
          }
      })
    },
    getInitialState : function () {
        return {
            data : []
        }
    },
    componentDidMount : function () {
       this.loadCommentServeice();
        // setInterval(this.loadCommentServeice,this.props.interVal)
    },
    render : function () {
        return (
            <div className="list-group">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
})
export default CommentBox;