import { useState } from 'react';
export function useForm(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(formState => ({...formState, [name]: value}))
  }

  return { 
    formState,
    setFormState,
    handleChange
  }
}