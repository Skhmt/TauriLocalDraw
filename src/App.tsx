import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

import { MainMenuFileComponent, actionOverrides } from './mainMenu.tsx'

const persistenceKeyName = 'TauriLocalDraw';

export default function App() {
	return (
		<div style={{ position: 'fixed', inset: 0, fontFamily: 'Verdana, sans-serif' }}>
			<Tldraw
				components={MainMenuFileComponent}
				overrides={[actionOverrides]}
				persistenceKey={persistenceKeyName}
			/>
		</div>
	)
}