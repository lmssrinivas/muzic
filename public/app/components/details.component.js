import React from "react";
var PropTypes = React.PropTypes;

var DetailsComponent = React.createClass({

    render: function() {
        return (
            <div className="details">
                <h3>{this.props.title}</h3>
             </div>
        );
    }

});

export default DetailsComponent;
