import { useEffect, useState } from 'react';
import axios from 'axios';

const CounsellorListPage = () => {
  const [counsellors, setCounsellors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/counsellors')
      .then(res => setCounsellors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Counsellors</h2>
      <ul>
        {counsellors.map((c) => (
          <li key={c.id}>{c.name} — {c.specialization}</li>
        ))}
      </ul>
    </div>
  );
};
export default CounsellorListPage;
