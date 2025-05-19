import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/main/HomePage';
import OnboardingPage from '../pages/main/OnboardingPage';
import Layout from '../components/layout/Layout';
import ArchivePage from '../pages/archive/ArchivePage';
import EditStoryPage from '../pages/archive/EditStoryPage';
import PlayAudioBook from '../pages/track/PlayAudioBookPage';
import NotfoundPage from '../pages/error/NotfoundPage';
import AuthPage from '../pages/main/AuthPage';
import Consent from '../components/main/user/Consent';
import CamPage from '../pages/cam/CamPage';
import UserPage from '../pages/main/UserPage';
import StoryContentPage from '../pages/archive/StoryContentPage';
import VoiceRecorder from '../pages/voice/VoicePage';

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
    path: '/sleep',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CamPage />,
      },
    ],
  },
  {
    path: '/my',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UserPage />,
      },
    ],
  },
  {
    path: 'archive/:storyId',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StoryContentPage />,
      },
    ],
  },

  {
    path: '/archive/edit/:storyId',
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
    path: 'consent',
    element: <Consent />,
  },
  {
    path: 'play/:storyId',
    element: <PlayAudioBook />,
  },
  // voice
  {
    path: 'voice',
    element: <VoiceRecorder />,
  },

  {
    path: '/*',
    element: <NotfoundPage />,
  },
]);
