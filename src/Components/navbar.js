import React, { Component } from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="Navbar">
  
        <Menu attached = "top" inverted color ="violet" size="huge">

          <Menu.Menu position="left">
          
            <Link to="/home" >
              <Menu.Item 
                name='Home' 
                active={activeItem === 'Home'} 
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/pop" >
              <Menu.Item
                name='Pop'
                active={activeItem === 'Pop'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/rock" >
              <Menu.Item
                name='Rock'
                active={activeItem === 'Rock'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/romance" >
              <Menu.Item
                name='Romance'
                active={activeItem === 'Romance'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/bollywood" >
              <Menu.Item
                name='Bollywood'
                active={activeItem === 'Bollywood'}
                onClick={this.handleItemClick}
              />
            </Link>
            
          </Menu.Menu>
        
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
