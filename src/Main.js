import React, { Component } from 'react';
import Moment from 'react-moment';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      firsttime: '',
      endtime: '',
      today_task: '',
      nextday_task: '',
    };
    this.changeTime = this.changeTime.bind(this);
    // this.onTextAreaChangeTodayInput = this.onTextAreaChangeTodayInput.bind(this);
    this.onTextAreaChangeStartTime = this.onTextAreaChangeStartTime.bind(this);
    this.onTextAreaChangeEndTime = this.onTextAreaChangeEndTime.bind(this);
    this.onTextAreaChangeTask = this.onTextAreaChangeTask.bind(this);
    this.onTextAreaChangeNextTask = this.onTextAreaChangeNextTask.bind(this);
  }

  getTodayDate(){
    var today = new Date();
    var month = today.getMonth();
    var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][today.getDay()] ;
    month = month+1;
    return today.getFullYear() + "/" +  month + "/"+ today.getDate()  + "/（" + dayOfWeekStr+ "）";
  }

  getNowTime(){
    var day = new Moment();
    // console.log(Moment("20111031", "YYYYMMDD").fromNow());
    // TODO 日付計算をする
    var today = new Date();
    var Hours = today.getHours();
    var Minutes = today.getMinutes();
    return Hours+':'+Minutes;
  }

  onTextAreaChangeStartTime(e){
    this.setState({
      firsttime: e.target.value,
    });
  }

  onTextAreaChangeEndTime(e){
    this.getTodayDate();
    // console.log(e.target.value);
    this.setState({
      endtime: e.target.value,
    });
  }

  // onTextAreaChangeTodayInput(e){
  //   console.log(e.target.value);
  //   this.setState({
  //     today: e.target.value,
  //   });
  // }

  onTextAreaChangeTask(e){
    console.log(e.target.value);
    this.setState({
      today_task: e.target.value,
    });
  }

  onTextAreaChangeNextTask(e){
    console.log(e.target.value);
    this.setState({
      nextday_task: e.target.value,
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
      <div className="ui centered grid">

        <div className="column"></div>
        <div className="four column centered row">
          <div className="column">
          </div>
          <div className="column"></div>
        </div>

      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>TODAY</label>
            <input placeholder='7/26' value={this.getTodayDate()}/>
          </div>
        </form>

        <div className="ui horizontal segments">
          <div className="ui segment">
            <form className='ui form'>
              <div className='field'>
                <label>START</label>
                <input placeholder='10:00' value={this.state.firsttime} onChange={this.onTextAreaChangeStartTime}/>
              </div>
            </form>
          </div>
          <div className="ui segment">
            <form className='ui form'>
              <div className='field'>
                <label>END</label>
                <input placeholder={this.getNowTime()} value={this.state.endtime} onChange={this.onTextAreaChangeEndTime}/>
              </div>
            </form>
          </div>
        </div>

        <form className='ui form'>
          <div className='field'>
            <label>今日の作業</label>
            <textarea placeholder='今日のタスク' value={this.state.today_task} onChange={this.onTextAreaChangeTask}></textarea>
          </div>
        </form>

        <form className='ui form'>
          <div className='field'>
            <label>明日の作業</label>
            <textarea placeholder='明日のタスク' value={this.state.nextday_task} onChange={this.onTextAreaChangeNextTask}></textarea>
          </div>
        </form>

        <div className='ui message'>
          <div className='content'>
            <div className='header'>本日の日報</div>
            <ul className='list'>
              {/* <li className='content' id="createTemplate"> */}
                <span>■{this.getTodayDate()}の日報</span><br></br>
              {/* </li> */}
              <li className='content' id="createTemplate">
                <span>開始：{this.state.firsttime}</span><br></br>
              </li>
              <li>
                <span>終了：{this.state.endtime}</span>
              </li>
              <li>
                <span>作業時間：</span>
              </li>
              <label>□本日の作業</label><div></div>
              <span>{this.state.today_task}</span><div></div>
              <label>□明日の作業</label><div></div>
              <span>{this.state.nextday_task}</span>
            </ul>
          </div>
        </div>

        <form className='ui form'>
          <div className='field'>
            <label>webhookURL</label>
            <input placeholder='https://hoge.slack'/>
          </div>
        </form>
        <div>　</div>
        <button className="ui blue fluid button">提出して帰る</button>

      </div>
      </div>
    );
  }
}

export default Main;
