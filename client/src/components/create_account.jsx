/*
create account view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the create account view has a status bar located at the very-top across the full width of the view
create account view has Navigation Bar located at the very-top across the full width of the view with text create account
create account view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
create account view has a Input located at the mid-top center of the view with text email
create account view has a Input located at the main area center of the view with text password
create account view has a Label located at the mid-bottom center of the view with text sign up

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
  sign_up_action,
  postSignup
} from "../actions/create_accountActions.js"

class createaccountView extends React.Component {
  state = {
    show_loading_indicator: false,
    email: "",
    password: ""
  }

  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    let sign_up_data = {}
    sign_up_data.email = this.state.email
    sign_up_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_up_action(sign_up_data)

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

  componentDidMount = () => {}

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
              <NavbarBrand>create account</NavbarBrand>
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
              {/* <!-- TODO: Create unit test for sign action --> */}
              <Button className="btn" onClick={() => this.sign()}>
                sign
              </Button>
            </Col>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for up action --> */}
              <Button className="btn" onClick={() => this.up()}>
                up
              </Button>
            </Col>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for sign_up action --> */}
              <Button className="btn" onClick={() => this.sign_up()}>
                sign up
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
      data: state.create_account
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ sign_up_action, postSignup }, dispatch)
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createaccountView)
