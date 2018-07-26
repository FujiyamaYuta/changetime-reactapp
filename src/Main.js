import React, { Component } from 'react';
// import './App.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      today:'',
      firsttime: '',
      endtime: '',
    };
    this.changeTime = this.changeTime.bind(this);
    this.onTextAreaChangeTodayInput = this.onTextAreaChangeTodayInput.bind(this);
    this.onTextAreaChangeStartTime = this.onTextAreaChangeStartTime.bind(this);
    this.onTextAreaChangeEndTime = this.onTextAreaChangeEndTime.bind(this);
  }

  onTextAreaChangeStartTime(e){
    console.log(e.target.value);
    this.setState({ 
      firsttime: e.target.value,
    });
  }

  onTextAreaChangeEndTime(e){
    console.log(e.target.value);
    this.setState({ 
      endtime: e.target.value,
    });
  }

  onTextAreaChangeTodayInput(e){
    console.log(e.target.value);
    this.setState({ 
      today: e.target.value,
    });
  }

  changeTime(){
    // ここに処理を書く
    console.log(this.state.today);
    console.log(this.state.firsttime);
    console.log(this.state.endtime);
  }

  render() {
    return (
      <div className='ui compact segment'>
        <form className='ui form'>
          <div className='field'>
            <label>TODAY</label>
            <input placeholder='7/26' onChange={this.onTextAreaChangeTodayInput}/>
          </div>
        </form>
        <form className='ui form'>
          <div className='field'>
            <label>START</label>
            <input placeholder='10:00' value={this.state.firsttime} onChange={this.onTextAreaChangeStartTime}/>
            {/* <input placeholder='10:00' value={this.state.firsttime} /> */}
          </div>
        </form>
        <form className='ui form'>
          <div className='field'>
            <label>END</label>
            <input placeholder='18:00' value={this.state.endtime} onChange={this.onTextAreaChangeEndTime}/>
            {/* <input placeholder='18:00' value={this.state.endtime}/> */}
          </div>
        </form>
        {/* <button className='ui button' onClick={this.changeTime}>
          CREATE NIPPO
        </button> */}
        <div className='ui message'>
          <div className='content'>
            <div className='header'>YourTemplate</div>
            <ul className='list'>
              <li className='content' id="createTemplate">
                <span>{this.state.today}</span><br></br>
              </li>
              <li className='content' id="createTemplate">
                <span>{this.state.firsttime}</span>：hour<br></br>
              </li>
              <li>
                <span>{this.state.endtime}</span>：hour
              </li>
            </ul>
          </div>
        </div>
      </div>      
    );
  }
}

export default Main;
