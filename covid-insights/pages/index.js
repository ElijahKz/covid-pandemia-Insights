import React from 'react'
import HeadAppComponent from '../Componentes/HeadAppComponent/HeadAppComponent'
import AppContainer from '../Componentes/AppContainer/AppContainer'
import CovidContent from '../Componentes/LoadingContent/CovidContent'

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
                    <h1> Welcome Covid App</h1>
                    <h1>Covid Information</h1>
                    <CovidContent/>
                </AppContainer>
            </>

        );
    }
}

export default Index;