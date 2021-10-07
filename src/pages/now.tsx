import type { NextPage } from 'next';

import Container from '../components/Container';

const Now: NextPage = () => {
	return (
		<Container customMeta={{ title: '/now - Santiago Martín Agra' }}>
			¡Hola! Aquí te cuento en que ando ahora mismo
			<ul>
				<li>👨‍💻 Trabajo como Software Engineer en PrivacyCloud.</li>
				<li>📅 Cuando vuelva la &quot;antigua&quot; normalidad, volverá asturias.js.</li>
				<li>😂 Me entretengo con algún pet project.</li>
				<li>🏀 Intento jugar al baloncesto una vez por semana.</li>
			</ul>
		</Container>
	);
};

export default Now;
