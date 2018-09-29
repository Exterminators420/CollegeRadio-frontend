import React, { Component } from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  this.state = { 
    activeItem: `${this.props.name}`
  }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.location = `/channel/${name}`}

  render() {
    const { activeItem } = this.state

    return (
      <div className="Navbar">
  
        <Menu attached = "top" inverted color ="violet" size="huge">

          <Menu.Menu position="left">
          
            <Link to="/channel/home" >
              <Menu.Item 
                name='home' 
                active={activeItem === 'home'} 
                onClick={this.handleItemClick}
              />
            </Link>
             <Link to="/channel/pop" >
              <Menu.Item
                name='pop'
                active={activeItem === 'pop'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/channel/rock" >
              <Menu.Item
                name='rock'
                active={activeItem === 'rock'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/channel/romance" >
              <Menu.Item
                name='romance'
                active={activeItem === 'romance'}
                onClick={this.handleItemClick}
              />
            </Link>
            
            <Link to="/channel/bollywood" >
              <Menu.Item
                name='bollywood'
                active={activeItem === 'bollywood'}
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
