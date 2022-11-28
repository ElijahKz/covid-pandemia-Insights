import React from 'react'
import HeadAppComponent from '../Componentes/HeadAppComponent/HeadAppComponent'
import AppContainer from '../Componentes/AppContainer/AppContainer'


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }



    render() {
        return (
            <>
                <HeadAppComponent />
                <AppContainer>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    <h1> Hello</h1>
                </AppContainer>
            </>

        );
    }
}

export default Index;