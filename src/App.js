"use client"
import './App.css';
import { FacebookProvider, CustomChat } from 'react-facebook';

function App() {
  return (
    <div className="App">
      <FacebookProvider appId="1061634494972137" chatSupport>
        <CustomChat pageId="134824106382428" minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default App;
