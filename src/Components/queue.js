import React from 'react'
import { Header, Image, Table, TableBody, Segment } from 'semantic-ui-react'

class Queue extends React.Component {
  render(){
    console.log(this.props.queue)
    const queue = this.props.queue
    console.log("q: " + queue)

    const myList = queue.map(item => (
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={item.image} rounded size='mini' />
                <Header.Content>
                  {item.title}
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
    ))

    

    return (
      <div id="queue">
          <Header as='h2' attached='top'>
              Currently Playing . . . 
          </Header>
          <Segment attached>
            <Table basic="very" celled collapsing>
            <Table.Header>

      </Table.Header>

            <Table.Body>
            {myList}
            </Table.Body>
            </Table>
          </Segment>

        </div>
)
    
  }
}

export default Queue
