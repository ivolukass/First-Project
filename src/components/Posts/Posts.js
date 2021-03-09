import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import Users from './Users';
import './user.css';

const getUser = () => {
  let user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(localStorage.getItem('user'));
  } else {
    return [];
  }
};

const Posts = () => {
  const [user, setUser] = useState(getUser());
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const [signUpPage, setSignUpPage] = useState(false);
  const [signInPage, setSignInPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUp) {
      if (signUpPage) {
        showAlert(true, 'success', 'please fill out all boxes to sign up');
        setSignUpPage(false);
      } else {
        if (!email || !name || !password || !cPassword) {
          showAlert(true, 'danger', 'All boxes must be filled to register');
        } else {
          if (password !== cPassword) {
            showAlert(true, 'danger', 'passwords have to match');
          } else {
            if (user.length === 0) {
              const newUser = {
                id: new Date().getTime().toString(),
                email: email,
                name: name,
                password: password,
              };
              setUser([...user, newUser]);
              setEmail('');
              setName('');
              setPassword('');
              setCPassword('');
              console.log(email);
              setSignUp(false);
              showAlert(true, 'success', 'User added');
            } else {
              user.map((item) => {
                if (item.email === email) {
                  showAlert(true, 'danger', 'email already in use');
                  return item;
                } else {
                  const newUser = {
                    id: new Date().getTime().toString(),
                    email: email,
                    name: name,
                    password: password,
                  };
                  setUser([...user, newUser]);
                  setEmail('');
                  setName('');
                  setPassword('');
                  setCPassword('');
                  console.log(email);
                  setSignUp(false);
                  showAlert(true, 'success', 'User added');
                  return item;
                }
              });
            }
          }
        }
      }
    } else {
      if (user.length === 0) {
        showAlert(true, 'danger', 'Sign up first then try sign in');
      } else {
        if (!email || !password) {
          if (signInPage) {
            showAlert(true, 'success', 'Enter credentials to sign In');
            setSignInPage(false);
          } else {
            showAlert(true, 'danger', 'please enter credentials');
          }
        } else {
          user.map((item) => {
            if (item.email === email && item.password === password) {
              setSignIn(true);
              localStorage.setItem('user-email', JSON.stringify(email));
              // console.log(signIn);
              return item;
            } else {
              showAlert(true, 'danger', 'incorrect username or password');
              console.log(signIn);
              return item;
            }
          });
        }
      }
    }
  };

  const signUpData = () => {
    setEmail('');
    setPassword('');
    setSignUp(true);
    setSignUpPage(true);
  };

  const backUp = () => {
    showAlert(false, '', '');
    setSignUp(false);
    setSignIn(false);
    setSignInPage(true);
    localStorage.setItem('user-email', JSON.stringify([]));
    setEmail('');
    setName('');
    setPassword('');
    setCPassword('');
  };

  const clearUser = () => {
    showAlert(false, '', '');
    setUser([]);
    setSignIn(false);
    localStorage.setItem('user-email', JSON.stringify([]));
    setEmail('');
    setPassword('');
  };
  const removeUser = (id) => {
    showAlert(false, '', '');
    setUser(user.filter((item) => item.id !== id));
    setSignIn(false);
    setEmail('');
    setPassword('');
    localStorage.setItem('user-email', JSON.stringify([]));
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  if (!signIn) {
    return (
      <section className='section-center-p'>
        <h3>{signUp ? 'Sign Up' : 'Sign In'}</h3>
        <div className='underline'></div>
        <form className='grocery-form-p' onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} user={user} />
          )}
          <div className='form-control-p'>
            <input
              type='email'
              className='grocery-p'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {signUp ? (
            <div className='form-control-p'>
              <input
                type='text'
                className='grocery-p'
                placeholder='Enter your username'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          ) : (
            ''
          )}
          <div className='form-control-p'>
            <input
              type='password'
              className='grocery-p'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {signUp ? (
            <div className='form-control-p'>
              <input
                type='password'
                className='grocery-p'
                placeholder='Confirm your password'
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
          ) : (
            ''
          )}
          <div className='btn-container-p'>
            {signUp ? (
              <button onSubmit className='edit-btn-p'>
                Register
              </button>
            ) : (
              <button onSubmit className='edit-btn-p'>
                Sign In
              </button>
            )}

            {signUp ? (
              <button className='delete-btn-p' onClick={backUp}>
                Back
              </button>
            ) : (
              <button className='delete-btn-p' onClick={signUpData}>
                Sign Up
              </button>
            )}
          </div>
        </form>
      </section>
    );
  }
  return (
    <Users
      user={user}
      clearUser={clearUser}
      backUp={backUp}
      removeUser={removeUser}
    />
  );
};
export default Posts;
