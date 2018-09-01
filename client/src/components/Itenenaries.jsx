import React from 'react';
import ItenenaryEntry from './ItenenaryEntry.jsx';

var Itenenaries = (props) => (
  <div className="itenerary">
    {props.itenenaries.map(entry => <ItenenaryEntry itenenary={entry} key={entry.id} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Itenenaries.propTypes = {
  itenenaries: React.PropTypes.array.isRequired
};

// <div className="itenerary">
//     {props.itenenaries.map(entry => <ItenenaryEntry itenenary={entry} key={entry.id.itenenary.toString()} updatePlayingVideo={props.updatePlayingVideo} /> )}
//   </div>

export default Itenenaries;