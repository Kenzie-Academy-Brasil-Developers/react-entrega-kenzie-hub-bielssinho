import { AuthProvider } from './Providers/AuthContext';
import { RoutesMain } from './routes';
import Global from './styles/global';


function App() {
  return (
    <AuthProvider>
      <Global/>
      <RoutesMain/>
    </AuthProvider>
  );
}

export default App;
