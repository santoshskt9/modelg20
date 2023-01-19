import React from 'react';
import BreadCrumb from '../../layout/BreadCrumb';
import bgImg from './flag-bg.jpg';

const styles = {
    title: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        
    },

}

const Login = () => {
    return (
        <React.Fragment>
            {/* <BreadCrumb heading={"Login"} /> */}
            <div className="container py-5 mt-lg-5 h-100">
                {/* <!-- ========== Start Login ========== --> */}

                <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                    <div className="col" style={styles.title}>
                        <h1 className='text-center text-black'>Welcome <br /> to <br /> Yuvamanthan</h1>
                    </div>
                    <div className="col">
                        <div className="login-card p-lg-5">
                            <div class="mb-3">
                              <label for="email" class="form-label">Email</label>
                              <input type="email" required
                                class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Enter your Email ID"/>
                              {/* <small id="emailHelpId" class="form-text text-muted">Please enter your registered email id</small> */}
                            </div>
                            <div class="mb-3">
                              <label for="password" class="form-label">Password</label>
                              <input type="password" required
                                class="form-control" name="password" id="password" aria-describedby="passwordHelpId" placeholder="Enter Password"/>
                              {/* <small id="passwordHelpId" class="form-text text-muted">Please enter your password recieved through email communication</small> */}
                            </div>
                            <a className='text-end w-100'>Forget Password?</a>
                            <div class="mt-3">
                              <button type="button" name="login-btn" id="login-btn" class="btn btn-primary px-5">Login</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ========== End Login ========== --> */}
            </div>
        </React.Fragment>
    )
};

export default Login;