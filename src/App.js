import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {      
  const [file, setFile] = useState('');// file is a state which is constant and donnot do any direct changes  setfile se update hoga 
  const [result, setResult] = useState(''); // result ko show k liye

  const fileInputRef = useRef();

  const url = 'https://th.bing.com/th/id/R.9f78711c43e6dae96750f75109964d1a?rik=RuOPgm2usNkvog&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fShare-PNG-HD-Image.png&ehk=3bxkvbb0R%2bbJrNdEArLNum%2fFQrQEzcAEkPZgu2MoDUY%3d&risl=&pid=ImgRaw&r=0';

  useEffect(() => { // component get update  p call   hoga sirf
    const getImage = async () => {
      if (file) {  
        const data = new FormData();
        data.append("name", file.name); 
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click(); // fileInputRef -- object hai jismai ek key hoti hai  .current  k nam se .click()   event ko call kre gye 

  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>FILE SHARING APP</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file" 
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])} // file is arrayhook  and  is mai single file ko uthe gye isliye 0 rkha hai 
        />

        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App;
