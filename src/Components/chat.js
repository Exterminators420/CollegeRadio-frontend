import React from 'react'
import { Header, Table, Segment, Input, Button } from 'semantic-ui-react'

export default class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chatLog:[],
      message:'',
      chatSocket: new WebSocket(`ws://127.0.0.1:8000/ws/chatbox/${this.props.channel}/`),

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.send_data = this.send_data.bind(this)
    this.handleChat = this.handleChat.bind(this)
    
  }
  componentDidMount(){
      const chatSocket = this.state.chatSocket;
      chatSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        message: data['chatLog']},
        () => this.handleChat())
     }
    }

    send_data = (e) =>{

      let data = {
            chatLog: this.state.message,
      };
      this.state.chatSocket.send(JSON.stringify(data));

  }
  handleChange = (e)=>{
    this.setState({message:e.target.value})
    e.preventDefault()
  }

  handleSubmit = (e)=>{
    this.send_data()
    e.preventDefault();
  }

  handleChat = (e)=>{
    let ChatLog = this.state.chatLog
    const message = <p>{this.state.message}</p>
    this.setState({chatLog: [...ChatLog, message]})
  }

  render(){
    return (
      <div id="chat">

          <Header as='h3' attached='top'>
              Chat here . . .
          </Header>

          <Segment attached>
          
            <Table basic="very" celled collapsing>

              <Table.Body>
                <div id = "chat-log" class = "Chat_log" >
                {this.state.chatLog}
                </div>
             
                <Input 
                  id="chat-message-input" 
                  type="text" size="small" 
                  onChange={this.handleChange}
                />
                
                

                <Button 
                  id="chat-message-submit" 
                  type="button" 
                  label="Send" 
                  onClick={this.handleSubmit} 
                  color="teal"/> 

              </Table.Body>

            </Table>

          </Segment>

      </div>
)
    
  }
}


