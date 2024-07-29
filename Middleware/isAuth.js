/**
 * eslint-disable react/display-name
 *
 * @format
 */

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const isAuth = (WrappedComponent) => {
	return (props) => {
		const Router = useRouter();
		const [checkAuth, setAuth] = useState(false);
		useEffect(() => {
			// const user = auth().access_token;
			const user = false;

			if (!user && Router.pathname !== '/login') {
				Router.replace('/login');
			} else if (user && Router.pathname === '/login') {
				Router.replace('/');
			} else {
				setAuth(true);
			}
		}, [Router]);

		if (checkAuth) {
			return <WrappedComponent {...props} />;
		} else {
			return null;
		}
	};
};

export default isAuth;
