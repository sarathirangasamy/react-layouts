import React from "react";
import logo from "./logo.svg";

function Master() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris...
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris...
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris...
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 4</h3>
                            <span>
                                There’s a lot of flexibility when it comes to writing
                                paragraphs, but if there’s one steadfast rule, it’s this:
                                Paragraphs should relate to one main topic or point. The
                                paragraph itself often contains multiple points spanning several
                                sentences, but they should all revolve around one core theme.
                                Just as sentences build upon each other to communicate the
                                paragraph’s core theme, paragraphs work together to communicate
                                the core theme of the writing as a whole.{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}