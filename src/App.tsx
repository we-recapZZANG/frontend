import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TrackProvider } from './store/TrackContext';
import { CurrentPlayProvider } from './store/CurrentPlayContext';
import { ArchiveProvider } from './store/ArchiveContext';
import { TrackModalProvider } from './store/TrackModalContext';

function App() {
  return (
    <>
      <TrackModalProvider>
        <TrackProvider>
          <ArchiveProvider>
            <CurrentPlayProvider>
              <RouterProvider router={router} />
              <ToastContainer />
            </CurrentPlayProvider>
          </ArchiveProvider>
        </TrackProvider>
      </TrackModalProvider>
    </>
  );
}
export default App;
