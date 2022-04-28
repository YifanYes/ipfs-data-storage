import './App.css';
import { useState } from "react";
import { create } from "ipfs-http-client";
import { Buffer } from 'buffer';

// The Buffer constructor returns instances of Uint8Array
window.Buffer = Buffer;

// Create a client instance for gateway to IPFS with Infura
const client = create('https://ipfs.infura.io:5001/api/v0');

const App = () => {
  const [file, setFile] = useState(null);
  const [urlArray, setUrlArray] = useState([]);

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // Asynchronously read the content of the data uploaded
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      // Convert the result into an array of Uint8Array data
      console.log("Buffer data: ", Buffer(reader.result));
      setFile(Buffer(reader.result));
    }

    e.preventDefault();
  };

  // Handle the data uploaded and processed in the local machine to IPFS
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload data to IPFS, response returns an object containing the CID
      const created = await client.add(file);
      // Using this url we can retrieve the uploaded data from IPFS and store it in the urlArr state
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      setUrlArray(prev => [...prev, url]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <input type='file' name='data' onChange={retrieveFile} />
        <button type='submit' className='btn'>Upload file</button>
      </form>

      <div className='display'>
        {urlArray.length !== 0
          ? urlArray.map((element) => <img src={element} alt="file" />)
          : <h3>Upload data</h3>}
      </div>
    </div>
  );
}

export default App;
