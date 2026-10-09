import UserList from './UserList';
import './App.css';

const users = [
  { id: 1, nombre: "Carlos Mendoza", edad: 28, profesion: "Desarrollador Frontend", activo: true },
  { id: 2, nombre: "Ana Torres", edad: 34, profesion: "Diseñadora UX/UI", activo: false },
  { id: 3, nombre: "Luis Ramírez", edad: 22, profesion: "Estudiante de Ingeniería", activo: true },
  { id: 4, nombre: "María González", edad: 30, profesion: "Project Manager", activo: true },
  { id: 5, nombre: "Jorge Castillo", edad: 40, profesion: "DevOps Engineer", activo: false }
];

function App() {
  return (
    <div className="app">
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
