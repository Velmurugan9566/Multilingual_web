
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ChangeLan() {
  const { lang } = useParams();
  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = useState(lang);
   
 
  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    const path = (`/${newLang}/home`);
    navigate(path);
  };

  return (
    <select value={selectedLang} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="ml">Malayalam</option>
    </select>
  );
}

export default ChangeLan;
