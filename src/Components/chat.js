import React from 'react'
import { Header, Table, Segment } from 'semantic-ui-react'

class Chat extends React.Component {
  render(){
    return (
      <div id="chat">
          <Header as='h3' attached='top'>
              Chat here 
          </Header>
          <Segment attached>
            <Table basic="very" celled collapsing>
            <Table.Header>

      </Table.Header>

            <Table.Body>
            Chat karte raho :)
            </Table.Body>
            </Table>
          </Segment>

        </div>
)
    
  }
}

export default Chat
