import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import AppTheme from './theme';
import { appReducer } from './store';

class App extends React.Component {
    store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));
    render() {
        return (
            <ReduxProvider store={this.store}>
                <ThemeProvider theme={AppTheme}>
                    <div>Insert App Here</div>
                </ThemeProvider>
            </ReduxProvider>
        );
    }
}

export default App;
