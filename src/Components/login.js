import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './css/login.css';
import { NavLink } from 'react-router-dom';
const FormItem = Form.Item;





export default class NormalLoginForm extends React.Component {
 

  render() {
    
    return (
  
        <div className  = "logins">
            <h1>Welcome to ..................</h1>
            <Form className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
            
                <FormItem>
                            <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                Login
                            </Button>
                            Or 
                            <NavLink 
                                style={{marginRight: '10px'}} 
                                to='/signup/'> signup
                            </NavLink>
                            </FormItem>
                
            </Form>
        </div>
 
    );
  }
}

 