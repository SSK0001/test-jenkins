
        import React, { Component }             from 'react';
        import { Redirect }                     from 'react-router';
        import { connect }                      from 'react-redux';
        import { bindActionCreators }           from 'redux';

        class App extends Component {
            constructor(props) {
                super(props);
                this.state = {
                }
            }

            render = () => {
                return(
                    <div>{this.props.children}</div>
                )
            }
     
        }
       
        function mapStateToProps(state) {
            // console.log("app redux", state.authentication.redirect);
            return {}
          }

          
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({  }, dispatch);
        }

      
    
        
        export default connect(mapStateToProps, mapDispatchToProps)(App);
        