import { useState } from 'react'

import Login from "./Login"
import Dashboard from './Dashboard'

import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProviver';
import SocketProvider from '../contexts/SocketProvider';

function App() {
  	const [id, setId] = useLocalStorage('id')

	const dashboard = (
		<SocketProvider id={id}>
			<ContactsProvider>
				<ConversationsProvider id={id}>
					<Dashboard id={id} />
				</ConversationsProvider>
			</ContactsProvider>
		</SocketProvider>
	)
	return (
		id ? (
			dashboard
		) : (
			<Login onIdSubmit={setId} />
		)
  	);
}

export default App;
