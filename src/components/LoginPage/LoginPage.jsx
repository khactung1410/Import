import React from 'react';
import { connect } from 'react-redux';
import {userActions} from '../../actions'
import './style.scss';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            submitted: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const {email, password, submitted} = this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="form-label-group">
                                        <input type="text" id="inputEmail" className="form-control" name="email" placeholder="Email address" required autoFocus onChange={this.handleChange}/>
                                        <label htmlFor="inputEmail">Email address</label>
                                        {submitted && !email &&
                                            <div className="help-block">Email is required</div>
                                        }
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required onChange={this.handleChange}/>
                                        <label htmlFor="inputPassword">Password</label>
                                        {submitted && !password &&
                                            <div className="help-block">Email is required</div>
                                        }
                                    </div>
                                    {/* <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div> */}
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps =  {
    login: userActions.login
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
export {connectedLoginPage as LoginPage};