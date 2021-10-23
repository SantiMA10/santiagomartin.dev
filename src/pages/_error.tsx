import type { NextPage } from 'next';

import Container from '../components/Container';

interface Props {
	statusCode: number;
}

const ErrorPage: NextPage<Props> = (props: Props) => {
	return (
		<Container customMeta={{ title: `${props.statusCode} Error - Santiago Martín Agra` }}>
			<h2>😱 Ups! Has encontrado un error {props.statusCode}.</h2>
			Ni idea de como has llegado aquí, ¿serías tan amable de{' '}
			<a
				href="https://github.com/SantiMA10/santiagomartin.dev/issues/new"
				target="_black"
				rel="noreferrer"
			>
				abrir una issue
			</a>{' '}
			explicando que ha pasado?
		</Container>
	);
};

ErrorPage.getInitialProps = ({ res }) => {
	return { statusCode: res?.statusCode || 404 };
};

export default ErrorPage;
