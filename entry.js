/**
 * Created by py on 2016/5/17.
 */
import "bootstrap-webpack";
import React from "react";
import ReactDOM from "react-dom";
// const data = require("./src/data.json")

var List = React.createClass({
    render : function () {
        return (<ul className="list-group">
            {this.LiComponent()}
        </ul>)
    },
    LiComponent : function () {
        var data = [1,2,3,4,5,6,7,8].map(function(v) {
           return  (<li className="list-group-item" key={v}>
                <span className="badge">{v}sss</span>
                {new Date().toString()}
            </li>)
        })
        return data;
    }
});


ReactDOM.render(<List />,document.getElementById("appList"));
