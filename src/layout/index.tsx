import master from './master';

function Index() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container">
                    <div className="row">
                        <span>WElcome</span>
                        <master></master>
                    </div>
                </div>
            </header>
        </div>
    )
}