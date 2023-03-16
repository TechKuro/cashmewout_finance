import { useState } from 'react';
import IncomeInputs from './components/IncomeInputs';
import SelectDropdown from './components/SelectDropdown';
import AmountSpent from './components/AmountSpent';
import SubmitButton from './components/SubmitButton';
function App() {
  const options = [
    {value: 'Rent', label: 'Rent'},
    {value: 'Petrol', label: 'Petrol'},
    {value: 'Groceries', label: 'Groceries'},
    {value: 'Shopping', label: 'Shopping'},
    {value: 'Credit Cards', label: 'Credit Card'},
    {value: 'Mortgage', label: 'Mortgage'},
  ];

  const [selectedOptions, setSelectionOptions] = useState(options[0].value);

  const handleDropdownChange = (event) => {
    setSelectionOptions(event.target.value);
  };

  return (
    <div>
      <h1>Enter Your Incomes Here</h1>
      
      <IncomeInputs />
      <h1>Enter Your Expenses </h1>
      <AmountSpent/>
      <div>
        <h2>Test for Position</h2>
        <SelectDropdown options={options} onChange={handleDropdownChange} />
        <p>Test for selected element {selectedOptions}</p>
      </div>
      <div>
        <SubmitButton />
      </div>
    </div>

  )


}

export default App;


