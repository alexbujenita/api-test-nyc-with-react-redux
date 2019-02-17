import React, { Component } from 'react';

import ny from './images/nyc.jpg'
import Searchbar from './Searchbar/Searchbar.js'
import Hospitals from './Hospitals/Hospitals.js'
// import IpPop from './IpPop/IpPop.js'
import IpPopModal from './IpPopModal/IpPopModalContainer.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: {},
      inverted: false,
      clickcount: 0,
    };
    this.invert = this.invert.bind(this);
    this.counterIncreaseCallback = this.counterIncreaseCallback.bind(this);
    this.myCallback = this.myCallback.bind(this);
  }

  componentDidMount () {
    this.props.getHospitals()
  }

  componentDidUpdate (prevProps) {
    if(prevProps.hospitals !==this.props.hospitals) {
      this.setState({filtered: this.props.hospitals})
    }
  }

  counterIncreaseCallback () {
    this.setState((previousState) => ({
      clickcount: previousState.clickcount + 1
    }));
  }

  myCallback (dataFromSearchbar) {
    if (!dataFromSearchbar) {
      this.setState({filtered: this.props.hospitals})
    } else {
      const filtered = this.props.hospitals
      .filter(hosp => hosp.facility_name
        .toLowerCase().includes(dataFromSearchbar
          .toLowerCase()));
          this.setState({
            filtered
          });
        }
      }

      // componentDidUpdate () {
      //   console.log(this.state.ip);
      // }


      invert () {
        this.setState({
          inverted: !this.state.inverted
        });
        if(this.state.clickcount !== 0) {
          this.setState({
            clickcount: 0,
            inverted: false
          })
          alert('Back to Earth, counter RESET!');
        } else {
          this.setState({
            clickcount: 666,
            inverted: true
          })
          alert('Welcome to Hell!');
        }
      }

      render() {
        const { inverted, filtered, clickcount } = this.state

        return (
          <div className="App">
            <img className={inverted ? 'invertThis' : ''} src={ny} alt='React Sucks' onDoubleClick={this.invert} />
            <Searchbar callFromApp={this.myCallback} />
            <IpPopModal clickcountAttr={clickcount}
                   clickcountSent={this.state.clickcount}
                   callFromApp={this.counterIncreaseCallback} />
                 <div className='containerApp'>
              {
                filtered.length ? filtered.map((hospital, index) => <Hospitals key={index} hospObj={hospital} />) : <h1>Hospital not found</h1>
            }
          </div>
        </div>
      );
    }
  }

export default App

  /* to render in App.js
  <IpPop clickcountAttr={clickcount}
         clickcountSent={this.state.clickcount}
         callFromApp={this.counterIncreaseCallback} />

  */
