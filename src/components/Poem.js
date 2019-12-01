import React, { useContext } from 'react'
import {CTX} from '../Store'

export default function Poem(){
	// let's make this component a consumer using a hook called useContext
	// this consumer will have access the Store
	// and the consumer can update the state via the context
	const [appState, dispatch] = useContext(CTX)
	return(
		<div>
			Roses are {appState.color}, Violets are {appState.color}

			<button onClick={() => dispatch({type: 'UPDATE_COLOR', payload: 'blue'})}>Blue</button>
			<button onClick={() => dispatch({type: 'UPDATE_COLOR', payload: 'violet'})}>Violet</button>
			<button onClick={() => dispatch({type: 'UPDATE_COLOR', payload: 'green'})}>Green</button>
			<button onClick={() => dispatch({type: 'UPDATE_COLOR', payload: 'yellow'})}>Yellow</button>
		</div>
	)

}
