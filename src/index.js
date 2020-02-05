import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';
import './index.css';

const friends =['Teklehaimanot', 'Belete', 'Aknie', 'Bekele'];
const friend = (<ol>
		{friends.map(name=>(
		<li>{name}</li>
		))}
	</ol>)
const myfirstelement = (
	
<table>
<tr>
<th >Teklehaimanot</th>
<td>Belete</td>
</tr>
<tr> 
<th>belete</th> </tr>
</table>
	)
	
const teki = <input type="text" />
// ReactDOM.render(friend, document.getElementById('demo3'));
// ReactDOM.render(myfirstelement, document.getElementById('root'));
// ReactDOM.render(teki, document.getElementById('demo'));
ReactDOM.render(<Car/>, document.getElementById('demo2'));
