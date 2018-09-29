import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class Queue extends React.Component {
  render(){
    console.log(this.props.queue)
    const queue = this.props.queue
    console.log("q: " + queue)
    
    // const myList = queue.map(item => (
    //       <Table.Row>
    //         <Table.Cell>
    //           <Header as='h4' image>
    //             <Image src={item.url} rounded size='mini' />
    //             <Header.Content>
    //               Lena
    //               <Header.Subheader>Human Resources</Header.Subheader>
    //             </Header.Content>
    //           </Header>
    //         </Table.Cell>
    //       </Table.Row>
    // )) 

    return (
      <div>
          <h2>Hi from queue</h2>

          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Queue . . .</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>


              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                    <Header.Content>
                      Lena
                      <Header.Subheader>Human Resources</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>

              </Table.Row>


              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                    <Header.Content>
                      Matthew
                      <Header.Subheader>Fabric Design</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                    <Header.Content>
                      Lindsay
                      <Header.Subheader>Entertainment</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>12</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                    <Header.Content>
                      Mark
                      <Header.Subheader>Executive</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>11</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
)
    
  }
}

export default Queue
