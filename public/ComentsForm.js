/**
 * Created by py on 2016/5/18.
 */
import React from "react";
import showdown from 'showdown';

const converter = new showdown.Converter();

const CommentList = React.createClass({
    render : function () {
        var commentNode = this.props.data.map(v=>{
             return (
                <Comment author={v.author} key={v.author}>
                    {v.text}
                </Comment>
             );
        })
        return (
            <div className="list-group-item">
                {commentNode}
            </div>
        )
    }
});

const CommentForm = React.createClass({
    handleSubmit : function (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if(!text || !author){
            return;
        }
        this.props.onCommentSubmit(JSON.stringify({author:author,text:text}));
        this.refs.author.value = "";
        this.refs.text.value = "";
        return;
    },
    render: function() {
        return (
           <form className="form-horizontal" onSubmit={this.handleSubmit}>
               <div className="form-group">
                   <label htmlFor="name" className="col-sm-2 control-label">name</label>
                   <div className="col-sm-4">
                       <input type="text" className="form-control" id="name" placeholder="your name" ref="author"/>
                   </div>
               </div>
               <div className="form-group">
                   <label htmlFor="comments" className="col-sm-2 control-label">comments</label>
                   <div className="col-sm-4">
                       <input type="text" className="form-control" id="comments" placeholder="your comments" ref="text"/>
                   </div>
               </div>
               <div className="form-group">
                   <div className="col-sm-offset-2 col-sm-10">
                       <button type="submit" className="btn btn-default">提交</button>
                   </div>
               </div>
           </form>
        );
    }
});

const Comment = React.createClass({
    render : function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {converter.makeHtml(this.props.children.toString())}
            </div>
        )
    }
})

export {CommentList,CommentForm};

