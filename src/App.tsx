import Button from './components/Button';
import Input from './components/Input';
import InputContainer from './components/InputContainer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Button>Button</Button>
      <br />
      <InputContainer
        label='Contraseña:'
        errorMsg='Error en la contraseña ingresada.'
      >
        <Input placeholder='Ingresar contraseña' />
      </InputContainer>
      <br />
      <SearchBar />
    </div>
  );
}
export default App;
