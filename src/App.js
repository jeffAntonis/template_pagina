import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection } from 'react-mdl';
import Main from './components/main';
import { Link } from "react-router-dom";

const App = (props) => {
    return (
        <div className="demo-big-content">
        <Layout >
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">DoubleMJ</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">DoubleMJ</Link>}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
            <Footer size="mega">
                <FooterSection type="bottom" logo="© 2018 Copyright: DoubleMJ">
                </FooterSection>
            </Footer>
        </Layout>
    </div>
    );
}

export default App;
