import React from 'react'
import { Header, Image, Table, TableBody } from 'semantic-ui-react'

class Queue extends React.Component {
  constructor(props){
    super(props);
    this.log=this.log.bind(this)
  }
  log(event){
    console.log(this.state.queue)
  }
  render(){
    console.log(this.props.queue)
    const queue = this.props.queue
    console.log("q: " + queue)

    const myList = queue.map(item => (
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={item.url} rounded size='mini' />
                <Header.Content>
                  {item.title}
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
    ))

    

    return (
      <div>
          <h2>Hi from queue</h2>
          <Table basic="very" celled collapsing>
          <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

          <Table.Body>
          {myList}
          </Table.Body>
          </Table>
          
          
          
          <button onClick={this.log}>test</button>
        </div>
)
    
  }
}

export default Queue
