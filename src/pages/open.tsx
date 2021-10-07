import type { NextPage } from 'next';

import Container from '../components/Container';

const Open: NextPage = () => {
	return (
		<Container customMeta={{ title: 'My open metrics - Santiago Martín Agra' }}>
			¡Hola! Aquí estan mis métricas, idea robada de OpenStartup y el dashboard publico del tio de
			vercel
		</Container>
	);
};

export default Open;
