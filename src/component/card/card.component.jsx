import React from 'react';
import './card.styless.css'
export const Card = props =>(
<div className = 'card-container'>  
<img alt = "monsters" src = {'https://robohash.org/{props.monsters.id}?set%20=set2&size=100x100'}/>
<h1>{props.monsters.name}</h1>
<p>{props.monsters.email}</p>
</div>
);