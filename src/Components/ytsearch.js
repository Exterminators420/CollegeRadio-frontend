import React, {Component} from 'react'
import {Search, Grid,} from 'semantic-ui-react'

const API_key='AIzaSyALsePfmVRgtvFqd7eSjBOSM7UL_Ti2YW4';

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
    playbackRate: 1.0,
    loop: false,
    seeking: 0,
    queue: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
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


//function responsible for queueing
  handleQueue = (e, { result }) => {

    var new_song = {
      title: result.title,
      image:result.image,
      url: result.url,
    }

    const isOnTheList = 0; //tbd

    if (!isOnTheList) {
      new_song !== '' && this.setState({queue: [...this.state.queue,new_song]}, () => {console.log(this.state.queue)})
    }
  };


  render() {
    const {query, results } = this.state

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
      </div>     
    )
  }
}