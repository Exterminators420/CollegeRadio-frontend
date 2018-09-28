import React, { Component } from 'react'
import { Menu, Segment,Dropdown , Icon} from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
       
        const { activeItem } = this.state

        return (
            
            <div>
          
                    <Menu inverted color ="violet"  pointing secondary stackable  attached = "top">
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Pop'
                            active={activeItem === 'Pop'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Rock'
                            active={activeItem === 'Rock'}
                            onClick={this.handleItemClick}
                        />

                          <Menu.Item
                            name='Romance'
                            active={activeItem === 'Romance'}
                            onClick={this.handleItemClick}
                        />


                          <Menu.Item
                            name='Bollywood'
                            active={activeItem === 'Bollywood'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                            <Dropdown  icon = "bars">
                                <Dropdown.Menu>
                                    <Dropdown.Item text='Logout' />
                                </Dropdown.Menu>
                            </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
 




            </div>
        );
    }



}
