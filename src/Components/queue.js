import React from 'react'
import { Header, Image, Table, Segment } from 'semantic-ui-react'

export default class Queue extends React.Component {
  render(){
    console.log(this.props.queue)
    const queue = this.props.queue
    console.log("q: " + queue)

    const myList = queue.map(item => (
          <Table.Row>
            <Table.Cell>
              <Header as='h3' image>
                <Image src={item.image} rounded size='medium' />
                <Header.Content>
                  <div className="song">{item.title}</div>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
    ))

    

    return (
      <div id="queue">

        <Header as='h3' attached='top'>
            Yet to come . . . 
        </Header>
        
        <Segment attached>

          <Table basic="very" celled collapsing >

            <Table.Body>
            {myList}
            </Table.Body>
            
          </Table>

        </Segment>

      </div>
    ) 
  }
}


