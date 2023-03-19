import React from 'react';

const Searchbox = ({searchfeild,searchChange}) => {
	return (
        <div className= 'pa2'>
        <input onChange={searchChange} className ='pa3 ba b--green bg-lightest-blue' placeholder = 'search robots' type = 'search'/>
        </div>
		);
}

export default Searchbox;