import React from 'react';
import './App.scss';
import Order from './pages/Order';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Header from './components/Header/Header';
import Registration from './pages/Registration';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'order',
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div>
        <Header setPage={this.setPage} />
        {
          {
            order: <Order />,
            profile: <Profile />,
            login: <Login setPage={this.setPage} />,
            registration: <Registration setPage={this.setPage} />,
          }[this.state.page]
        }
      </div>
    );
  }
}
