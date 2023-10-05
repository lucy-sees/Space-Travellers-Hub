import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const mockStore = configureStore([thunk]);

describe('Navigation Component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Profile Component', () => {
  test('renders correctly', () => {
    const store = mockStore({
      missions: {
        missions: [
          { id: 1, name: 'Mission 1' },
          { id: 2, name: 'Mission 2' },
        ],
        joinedMissions: [1],
      },
      rockets: {
        data: [
          { id: 1, name: 'Rocket 1' },
          { id: 2, name: 'Rocket 2' },
        ],
        joinedRockets: [2],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MyProfile />
        </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Rockets Component', () => {
  test('matches snapshot', () => {
    const store = mockStore({
      rockets: {
        isLoading: false,
        data: [
          {
            id: 1,
            name: 'Rocket 1',
            description: 'Description 1',
            image: 'rocket1.jpg',
          },
          {
            id: 2,
            name: 'Rocket 2',
            description: 'Description 2',
            image: 'rocket2.jpg',
          },
        ],
        joinedRockets: [1],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Missions Component', () => {
  test('renders correctly', () => {
    const store = mockStore({
      missions: {
        isLoading: false,
        missions: [
          { id: 1, name: 'Mission 1', description: 'Description 1' },
          { id: 2, name: 'Mission 2', description: 'Description 2' },
        ],
        joinedMissions: [1],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
