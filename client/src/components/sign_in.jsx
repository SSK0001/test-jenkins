/*
sign in view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the sign in view has a status bar located at the very-top across the full width of the view
sign in view has Navigation Bar located at the very-top across the full width of the view with text sign in
sign in view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
sign in view has a Input located at the mid-top center of the view with text email
sign in view has a Input located at the main area center of the view with text password
sign in view has a Button located at the mid-bottom center of the view with text sign in
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  Row,
  Col,
  Navbar,
  NavItem,
  NavbarBrand,
  Input,
  InputGroup,
  InputGroupText,
  Button
} from "reactstrap"

import {
  sign_in_action,
  login_action,
  postLogin
} from "../actions/sign_inActions.js"

class signinView extends React.Component {
  state = {
    show_loading_indicator: false,
    email: "",
    password: ""
  }

  // sign_in event
  sign_in = value => {
    const { sign_in_action } = this.props
    e.preventDefault()

    let sign_in_data = {}
    sign_in_data.email = this.state.email
    sign_in_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_in_action(sign_in_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  // login event
  login = value => {
    const { login_action } = this.props
    e.preventDefault()

    let login_data = {}
    login_data.email = this.state.email
    login_data.password = this.state.password

    //Dispatch action mapped to redux
    login_action(login_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => { }

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Navbar color="light" light expand="md">
              <NavbarBrand>sign in</NavbarBrand>
            </Navbar>
            <Col md={12}>
              {" "}
              {/* <!-- TODO: Change placeholder image with higher res --> */}
              <image
                className="img-fluid"
                alt="Responsive image"
                src="http://path.to/replace/image"
              />
            </Col>{" "}
            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email"
                />{" "}
              </InputGroup>{" "}
            </Col>
            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  placeholder="password"
                />{" "}
              </InputGroup>{" "}
            </Col>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for sign_in action --> */}
              <Button className="btn" onClick={() => this.sign_in()}>
                sign in
              </Button>
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}




function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.sign_in
  }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
  { sign_in_action, login_action, postLogin },
    dispatch
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signinView)
