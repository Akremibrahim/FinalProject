import React from 'react';
import { 
MenuItem,
FormControl,
Select 
} from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Covid 19 Tracker</h1>
      <FormControl class="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
          >
           <MenuItem value="worldwide">Worldwide</MenuItem>
           <MenuItem value="worldwide">Worldwide</MenuItem>
           <MenuItem value="worldwide">worldwide</MenuItem>
           <MenuItem value="worldwide">Worldwide</MenuItem>

        </Select>
      </FormControl>

    
    </div>
  );
}

export default App;
