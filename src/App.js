import React from "react"

import Interface from "./Interface"

import "./css/App.css"

const App = () => {
    return (
        <div>
        	<div className="container">
        		<div className="item">
					<Interface
						index={0}
					/>
				</div>
        		<div className="item">
					<Interface
						index={1}
					/>
				</div>
        		<div className="item">
					<Interface
						index={2}
					/>
				</div>
        		<div className="item">
					<Interface
						index={3}
					/>
				</div>
        		<div className="item">
					<Interface
						index={4}
					/>
				</div>
        		<div className="item">
					<Interface
						index={5}
					/>
				</div>
        		<div className="item">
					<Interface
						index={6}
					/>
				</div>
        		<div className="item">
					<Interface
						index={7}
					/>
				</div>
        		<div className="item">
					<Interface
						index={8}
					/>
				</div>
			</div>
        </div>
    );
}

export default App;