function UserCard({ user }) {
  const { nombre, edad, profesion, activo } = user;

  return (
    <div className={`user-card ${activo ? 'activo' : 'inactivo'}`}>
      <h2>{nombre}</h2>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Estado:</strong> {activo ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
}

export default UserCard;