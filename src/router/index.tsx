import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OnboardingPage from '../pages/OnboardingPage';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/layout/Layout';
import ArchivePage from '../pages/archive/ArchivePage';
import EditStoryPage from '../pages/archive/EditStoryPage';
import PlayAudioBook from '../pages/PlayAudioBook';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/archive',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ArchivePage />,
      },
    ],
  },
  {
    path: '/archive/edit/:id',
    element: <EditStoryPage />,
  },
  {
    path: 'onboarding',
    element: <OnboardingPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'play/:storyId',
    element: <PlayAudioBook />,
  },
]);
