import React from 'react'
import { Header, Table, Segment, Input, TextArea } from 'semantic-ui-react'

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chatLog:'',
      message:'',
      chatSocket: new WebSocket(`ws://127.0.0.1:8000/ws/chatbox/${this.props.channel}/`),

    }
    console.log("dfsdfsdfsssssssssssssss")
  }
  componentDidMount(){
      const chatSocket = this.state.chatSocket;
      chatSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        chatLog: data['chatLog'],
      })
     }
    }

    send_data = (e) =>{

      let data = {
            chatLog: this.state.chatLog,
      };
      this.state.chatSocket.send(JSON.stringify(data));

  }
  
  handleChange=(e)=>{
    this.setState({message:e.target.value})
    console.log(this.state.chatLog)

  }
  handleSubmit = (e)=>{
    const newChatLog = this.state.chatLog + '\n' + this.state.message
    this.setState({message:''})
    this.setState({chatLog:newChatLog})
    console.log(newChatLog)
    this.send_data();
    e.preventDefault();
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

export default Chat
