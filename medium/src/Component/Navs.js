import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import icons from "react-morph-material-icons/build/shapes";
import MorphIcon from "react-morph-material-icons";

class Navs extends Component {
      constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
         this.toggle = this.toggle.bind(this);
         let myCollectionOfCategory = icons.editor.publish;
         console.log(myCollectionOfCategory)
      }

        toggle() {
            this.setState({
            isOpen: !this.state.isOpen
            });
        }
       

    render() {
        return (
           <div>
                <Navbar color='faded' light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">React Redux Medium</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/Post"><MorphIcon shapes={icons.editor['mode_edit']} style={{fill : 'white'}}/></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    } 
}

export default Navs;