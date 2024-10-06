import { Route, Routes } from 'react-router-dom';

import Weeding from '#routes/Weeding';

import Home from './routes/Home';
import Navigation from './routes/navigation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="weeding" element={<Weeding />} />
    </Routes>
  );
};

export default App;
