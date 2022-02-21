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
           <MenuItem value="worldwide">OPtion 1</MenuItem>
           <MenuItem value="worldwide">WOOBABYe</MenuItem>
           <MenuItem value="worldwide">SLATTT</MenuItem>
        </Select>
      </FormControl>

    
    </div>
  );
}

export default App;
