import React from "react"

import Interface from "./Interface"

const App = () => {
    return (
        <div>
            <table><tbody>
            <tr>
	            <td style={{
	            		position: 'fixed', 
	            		top: '20px',
	            		left: '20px',
	            	}}>
					<Interface
						index={0}
					/>
	            </td>
	            <td style={{
	            		position: 'fixed', 
	            		top: '230px',
	            		left: '20px',
	            	}}>
					<Interface
						index={1}
					/>
	            </td>
            </tr>
            <tr>
            	<td style={{
	            		position: 'fixed', 
	            		top: '440px',
	            		left: '20px',	
	            	}}>
					<Interface
						index={2}
					/>
            	</td>
            	<td style={{
	            		position: 'fixed', 
	            		top: '20px',
	            		left: '160px',
	            	}}>
					<Interface
						index={3}
					/>
            	</td>
            </tr>
            <tr>
            	<td style={{
	            		position: 'fixed', 
	            		top: '230px',
	            		left: '160px',
	            	}}>
					<Interface
						index={4}
					/>
            	</td>
            	<td style={{
	            		position: 'fixed', 
	            		top: '440px',
	            		left: '160px',
	            	}}>
					<Interface
						index={5}
					/>
            	</td>
            </tr>
            </tbody></table>
        </div>
    );
}

export default App;