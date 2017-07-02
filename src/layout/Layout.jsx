import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Content from './../components/Content';
import './layout.css';
import Footer from './../components/footer/Footer.jsx';
import Header from './../components/header/Header.jsx';
import Main from './../pages/Main';
import MyPost from './../pages/MyPost';
import Author from './../pages/Author';
import Login from './../pages/Login';



class Layout extends React.Component {
	render() {
		return (
			  <div>
				  <Router>
					  <div className="app">
						  <Header />
						  <Content>
							  <Route exact path="/" component={Main}/>
							  <Route path="/post" component={MyPost}/>
							  <Route path="/author" component={Author}/>
							  <Route path="/login" component={Login}/>
						  </Content>
					  </div>
				  </Router>
				  <Footer />
			  </div>
		)
	}
}
export default Layout;