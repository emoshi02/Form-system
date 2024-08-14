import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { LoginPage } from './components/LoginPage/Login';
import { CreateFormPage } from './components/CreateForm/CreateFormPage';
import { UpdateFormWrapper } from './components/UpdateFormWrapper/UpdateFormWrapper';
import { AnswerFormWrapper } from './components/AnswerForm/AnswerFormWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/createForm',
    element: <CreateFormPage />,
  },
  {
    path: '/updateForm/:id',
    element: <UpdateFormWrapper />,
  },
  {
    path: '/answerForm/:id',
    element: <AnswerFormWrapper />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
