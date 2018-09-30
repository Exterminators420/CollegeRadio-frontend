import React, {Component} from 'react'
import {Search, Grid,} from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import Navbar from './navbar'
import Queue from './queue.js'
import Chat from './chat.js'

const API_key = 'AIzaSyALsePfmVRgtvFqd7eSjBOSM7UL_Ti2YW4';


export default class CommonView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamSocket: new WebSocket(`ws://127.0.0.1:8000/ws/stream/${this.props.match.params.name}/`),
      chatSocket: new WebSocket(`ws://127.0.0.1:8000/ws/chatbox/${this.props.match.params.name}/`),
      url:null,
      playing: true,
      volume: 1,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      seeking: 0,
      queue: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
    this.setUrl = this.setUrl.bind(this)

    this.send_data = this.send_data.bind(this);

    this.onEnd = this.onEnd.bind(this);
  }


//function responsible for syncing data 

  componentDidMount() {
    const streamSocket = this.state.streamSocket;
    let i=0;
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data['played'])
      this.setState({
        url: data['url'],
        duration: data['duration'],
        played: data['played'],
        queue: data['queue']},
        () => {for (; i<1; i++){this.player.seekTo(this.state.played)}}
      )
    }
  }


//function responsible for retrieving and mapping search results

  handleChange = (event) => {    

    this.setState({query: event.target.value},()=>{

      var message=this.state.query
      var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${message}&type=video&videoDefinition=high&key=${API_key}&maxResults=5`;

      fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const searchResults= responseJson.items.map(obj =>({
          title: obj.snippet.title,
          description: 'Youtube search',
          image:`https://img.youtube.com/vi/${obj.id.videoId}/default.jpg`,
          url: `https://www.youtube.com/watch?v=${obj.id.videoId}&autoplay=0`,
        }));

        this.setState({results: searchResults}) 
      })
    })
  };


//function responsible for queueing

  handleQueue = (e, { result }) => {
    let queue = this.state.queue;

    const new_song = {
      title: result.title,
      image:result.image,
      url: result.url,
    }

    let isOnTheList = 0;

    for(var i = 0; i < queue.length; i++) {
      if (queue[i].title === new_song.title) {
        isOnTheList=1;
        break;
      }
    }

    if (!isOnTheList) {
      new_song !== '' && this.setState({queue: [...queue,new_song]}, 
        () => {this.setUrl();}
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
    this.setState({url: this.state.queue[0].url},
      () => {this.send_data();}
    )
  }


//function referencing player

  ref = player => {
    this.player = player
  }

    
  render() {
    const {query, results,} = this.state

    return (

      <div>

        <div>
          <Navbar 
            name={this.props.match.params.name}
          />
        </div>
        
        <div >
          <Grid>
            <Grid.Column width={3}>
              <div id="search">
                <Search
                  size="large"
                  onSearchChange={this.handleChange}
                  results={results}
                  value={query}
                  onResultSelect={this.handleQueue}
                />
              </div>
            </Grid.Column>
          </Grid>
        </div>

        <div id="flex-container">

          <div className="VidWrapper">
            <ReactPlayer
              ref={this.ref} 
              url={this.state.url} 
              playing
              onEnded={this.onEnd}
              onProgress={this.onProgress}
              volume={this.state.volume}
              muted={this.state.muted}
              height="100%"
              width="100%"
            />
          </div>

          <div>
            <Chat 
              channel={this.props.match.params.name}
            />
          </div>
          
          <div>
            <Queue 
              queue={this.state.queue}
            />
          </div>
          
        </div>

      </div>
    )
  }
}