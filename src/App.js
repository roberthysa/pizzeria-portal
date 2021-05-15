import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/Tables/TablesBooking';
import TablesEvent from './components/views/Tables/TablesEvent';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/Ordering/NewOrderContainer';
import OrderID from './components/views/Ordering/OrderID';
import Kitchen from './components/views/Kitchen/Kitchen';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {Container} from '@material-ui/core';
import {Provider} from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderID} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
