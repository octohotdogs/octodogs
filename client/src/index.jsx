import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Map from './components/Map.jsx';
import Header from './components/Header.jsx';
import Itineraries from './components/Itineraries.jsx';

// TODO: REPLACE THIS WITH THE ENDPOINT
import { itineraries } from '../../seed_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iteneraries: itineraries,
      currentItinerary: itineraries[0]
    }

    //this.search = this.search.bind(this);
    this.getItineraries = this.getItineraries.bind(this);
  }

  getItineraries() {
  }

  // search (term) {
  //   console.log(`${term} was searched`);

  //     $.ajax({
  //         type: "POST",
  //         url: "http://localhost:1128/repos",
  //         data: {username: term},
  //       //  success: this.receiveData(data),
  //         dataType: "json"
  //       }).then((repos) => {
  //        // this.receiveData();
  //         this.setState({repos: repos});
  //       });
  // }

  receiveData() {
  //   console.log("in receiveData");

  //   let self = this;
  //   fetch('http://localhost:1128/repos', {
  //         type: "GET",
  //         //url: "http://localhost:1128/repos",
  //         //data: {username: term},
  //       //  success: this.receiveData(data),
  //         dataType: "json"
  //       })
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log("now self:___:", self);
  //       self.setState({repos: myJson});
  //     });
  //     console.log("New state: ", this.state.repos);
  }

  // console.log("here");
 //    return (<div>
 //       <h1>Trip Planner<h1>
 //        <nav className="navbar">
 //          <div className="col-md-6 offset-md-3">
 //            <Iteneraries getItenerariesList={this.getIteneraries.bind(this)}/>
 //          </div>
 //        </nav>
 //        <div className="row">
 //          <div className="col-md-7">
 //            <Map location={this.state.currentLocation}/>
 //          </div>
 //          <div className="col-md-5">
 //            <RecentItenerary currentItenanary={this.state.currentItenerary}/>
 //          </div>
 //        </div>
 //      </div>)


  componentDidMount() {
    let self = this;
    this.receiveData();
  }

  updateCurrentItinerary() {
  }

  render () {
    return (
      <div>
       <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Header />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <Itineraries itineraries={this.state.iteneraries}/>
          </div>
          <div className="col-md-7">
            <Map currentItinerary={this.state.currentItinerary}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
