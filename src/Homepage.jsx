import React from 'react';
import { useParams } from 'react-router-dom';
//import translateText from './TranslateCom';

function HomePage() {
  const { lang } = useParams(); 
  console.log("home : ",lang)
  
//  function handleTranslate(inputText,targetLanguage) {
//     if (inputText) {
//       const translatedText =translateText(inputText, targetLanguage);
//         console.log(translatedText)
//     }
//   };
    
  
  const content = {
    en: {
      title: 'Welcome to My web Page',
      description: 'This is the English version.',
    },
    hi: {
      title: 'मेरे नये वेब पृष्ठ पर आपका स्वागत है.',
      description: 'यह हिंदी संस्करण है.',
    },
    ml: {
      title: 'വീട്ടിൽ സ്വാഗതം',
      description: 'ഇത് മലയാളം പതിപ്പ് ആണ്.',
    },
  };
//  handleTranslate(content[lang],lang)
  return (
    <div>
      <h2 className='h2'>Helo from heading</h2>
      <h1>{content[lang].title}</h1>
      <p>{content[lang].description}</p>
      {console.log(document.querySelectorAll('h2'))}
    </div>
  );
 
}

export default HomePage;
