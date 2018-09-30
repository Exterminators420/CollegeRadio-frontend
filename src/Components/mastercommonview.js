import React, {Component} from 'react'
import ReactPlayer from 'react-player'

export default class MasterCommonView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamSocket: new WebSocket(`ws://127.0.0.1:8000/ws/stream/${this.props.match.params.name}/`),
      url: null ,
      playing: true,
      volume: 0.1,
      muted: true,
      played: 0,
      loaded: 0,
      duration: 0,
      seeking: 0,
      queue: [],
    };

    this.setUrl = this.setUrl.bind(this)

    this.send_data = this.send_data.bind(this);

    this.onProgress = this.onProgress.bind(this);
    this.onEnd = this.onEnd.bind(this);

  }


//function responsible for syncing data 

  componentDidMount() {
    const streamSocket = this.state.streamSocket;
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState(
        {
        url: data['url'],
        duration: data['duration'],
        played: data['played'],
        queue: data['queue']
        }
      )
    }
  }


//function responsible for sending data

  send_data = e =>{

    let data = {
          url: this.state.url,
          played: this.state.played,
          duration: this.state.duration,
          queue: this.state.queue,
    };
    this.state.streamSocket.send(JSON.stringify(data));
  }


//function responsible for handling song end

  onEnd= (event) => {
    let array = [...this.state.queue]
    let index = array[0]
    array.splice(index, 1);

    this.setState({queue: array}, 
      () => {this.setUrl();}
    )
  }


//function responsible for setting url

  setUrl(){

    if(this.state.queue[0]){
      this.setState({url: this.state.queue[0].url},
        () => {this.send_data();}
      )
    }
  }


//function defining progress of a video

  onProgress = state => {
      this.setState(state);
      this.send_data();
  }

//function referencing player

  ref = player => {
    this.player = player
  }

    
  render() {
    const {query, results,} = this.state

    return (

      <div>

        <div className="VidWrapper">
          <ReactPlayer
            ref={this.ref} 
            url={this.state.url} 
            playing
            onEnded={this.onEnd}
            onProgress={this.onProgress}
            volume={this.state.volume}
            muted={this.state.muted}
            width="100%"
            height="100%"
          />
        </div>

      </div>
           
    )
  }
}