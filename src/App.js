import { UserProvider } from './Providers/UserContext';
import { RoutesMain } from './routes';
import Global from './styles/global';


function App() {
  return (
    <UserProvider>
      <Global/>
      <RoutesMain/>
    </UserProvider>
  );
}

export default App;
