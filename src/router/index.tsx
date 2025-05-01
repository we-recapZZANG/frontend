import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/main/HomePage';
import OnboardingPage from '../pages/main/OnboardingPage';
import LoginPage from '../pages/main/AuthPage';
import Layout from '../components/layout/Layout';
import ArchivePage from '../pages/archive/ArchivePage';
import EditStoryPage from '../pages/archive/EditStoryPage';
import PlayAudioBook from '../pages/track/PlayAudioBookPage';
import NotfoundPage from '../pages/error/NotfoundPage';
import AuthPage from '../pages/main/AuthPage';

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
    path: 'user/:mode',
    element: <AuthPage />,
  },
  {
    path: 'user/:mode',
    element: <AuthPage />,
  },
  {
    path: 'play/:storyId',
    element: <PlayAudioBook />,
  },
  {
    path: '/*',
    element: <NotfoundPage />,
  },
]);
