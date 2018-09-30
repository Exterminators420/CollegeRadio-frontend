import React from 'react'
import { Header, Table, Segment, Input, TextArea } from 'semantic-ui-react'

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
  handleSubmit = (e)=>{
    this.setState({message:e.target.value}),
    e.preventDefault()
  }

  handleSubmit = (e)=>{
    this.setState({message:e.target.value},
      () => this.send_data())
    e.preventDefault();
  }

  handleChat = (e)=>{
    let ChatLog = this.state.chatLog
    const message = this.state.message
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
            <Table.Header>

           </Table.Header>

            <Table.Body>
              <div id = "chat-log" class = "Chat_log" >
              test
              </div>
             
            <Input id="chat-message-input" type="text" size="small"/><br/>
            <Input id="chat-message-submit" type="button" value="Send"/>    
            </Table.Body>
            </Table>
          </Segment>

      </div>
)
    
  }
}


