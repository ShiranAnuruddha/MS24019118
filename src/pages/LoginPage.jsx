// const LoginPage = () => {
//     return (
//       <div>
//         <h1>Login</h1>
//         {/* AWS Cognito Login UI will be embedded here */}
//       </div>
//     );
//   };
//   export default LoginPage;

// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
//     </div>
//   );
// }

// export default LoginPage;
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:8081/auth/login', { username, password });
    alert('Login result: ' + response.data);
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
  