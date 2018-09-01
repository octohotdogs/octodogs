import React from 'react';

var ItenenaryEntry = (props) => {
  var onClick = (event) => {
  //  props.updateCurrentItenenary(props.itenenary);
  };

  return (
    <div className="itenenary-entry media">
      <div className="media-body">
        <div className="itenenary-entry-title" onClick={onClick}>{props.itenenary.id}</div>
        <div className="itenenary-entry-detail">{props.itenenary.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ItenenaryEntry.propTypes = {
  itenenary: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//window.VideoListEntry = VideoListEntry;

export default ItenenaryEntry;
