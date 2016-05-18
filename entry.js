/**
 * Created by py on 2016/5/17.
 */
import "bootstrap-webpack";
import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./public/CommentBox";


var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(<CommentBox url="/api/comments" interVal = {2000}/>,document.getElementById("appList"));
