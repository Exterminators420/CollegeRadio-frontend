import React, {Component} from 'react'
import {Search, Grid,} from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import Player from './player'
import { streamSocket } from './websocket.js';
const API_key='AIzaSyALsePfmVRgtvFqd7eSjBOSM7UL_Ti2YW4';

function setUrl(url){
  this.setState({url})
}

export default class YTSearch extends Component {

  constructor(props) {

    super(props);

    this.state = {
    url: null ,
    playing: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    seeking: 0,
    queue: ({title: '',
            image: '',
            url:''}),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.send_data = this.send_data.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.log = this.log.bind(this);
    setUrl = setUrl.bind(this)
  }

//function responsible for syncing data 
  componentDidMount() {
    streamSocket.onmessage = (e) => {
        let data = JSON.parse(e.data);
        this.setState({
          url: data['url'],
          duration: data['duration'],
          played: data['played'],
          queue: data['queue']
        })
    }
  }

//function responsible for sending data
  send_data = e =>{
    let data = {
          url: this.state.url,
          played: this.state.played,
          duration: this.state.duration,
          queue: this.state.queue,
    }
    streamSocket.send(JSON.stringify(data));
  }

//function responsible for retrieving and mapping search results
  handleChange = (event) => {    

    this.setState({query: event.target.value},()=>{

      var message=this.state.query
      var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${message}&type=video&videoDefinition=high&key=${API_key}&maxResults=5`;

      fetch(finalURL)
      .then((response) => response.json())

      .then((responseJson) => {

        const searchResults= responseJson.items.map(obj =>
          ({
            title: obj.snippet.title,
            description: 'Youtube search',
            image:`https://img.youtube.com/vi/${obj.id.videoId}/default.jpg`,
            url: `"https://www.youtube.com/watch?v=${obj.id.videoId}"`,
          })
        );

        this.setState({results: searchResults}) 
      })
    })
  };

setABC(url){
  setUrl(url)
}

//function responsible for queueing
  handleQueue = (e, { result }) => {

    var new_song = {
      title: result.title,
      image:result.image,
      url: result.url,
    }

    const isOnTheList = 0; //tbd

    if (!isOnTheList) {
      new_song !== '' && this.setState({queue: [...this.state.queue,new_song]}, () => this.setState({url: this.state.queue[0].url}, () => this.send_data()))
      
  };
}

//function responsible for handling song end
  handleEnd(event){
    var array = [...this.state.queue]
    var index = array[0]
    array.splice(index, 1)
    this.setState({queue: array}, () => this.setABC(this.state.queue[0].url))
    this.send_data();
  }

//function defining progress of a video
  onProgress = state => {
      this.setState(state);
      this.send_data();
  }

log(event){
  console.log(this.state.queue)
}
  render() {
    const {query, results, queue } = this.state

    return (

      <div className="YTsearchWrapper">
        <Grid>
          <Grid.Column width={6}>
            <Search
              size="large"
              aligned="right"
              onSearchChange={this.handleChange}
              results={results}
              value={query}
              onResultSelect={this.handleQueue}
            />
          </Grid.Column>
        </Grid>
        <ReactPlayer 
        url={this.state.url} 
        playing
        onEnded={this.handleEnd}
        onProgress={this.onProgress}
        played={this.state.played} />
        <button onClick={this.log}>test</button>
      </div>     
    )
  }
}