import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyles from '@styles/globalReset';
import { createRoot } from 'react-dom/client';
import ko from 'axe-core/locales/ko.json';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000, { locale: ko, disableDeduplicate: true });
}

const isDevelopment = process.env.NODE_ENV !== 'production';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<>
		<Global styles={globalStyles} />
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={isDevelopment} />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</>,
);
