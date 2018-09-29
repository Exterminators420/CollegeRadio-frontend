import React from 'react'
import { Header, Table, Segment, Input, TextArea } from 'semantic-ui-react'

class Chat extends React.Component {
  constructor(props){
    super(props);
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
            <TextArea id="chat-log" cols="39" autoHeight/><br/>
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
