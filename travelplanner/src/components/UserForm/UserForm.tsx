import React from 'react';
import { useCookies } from 'react-cookie';

interface UserFormProps{
  onUserSubmit: (user:{name: string, email: string}) => void;
}

export default function UserForm({onUserSubmit}: UserFormProps) {
  const [cookies, setCookie] = useCookies(['user'])

  const handleUserFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const name = (event.target as any)['name'].value;
    const email = (event.target as any)['email'].value;
    setCookie('user', { name, email }, { path: '/' });
    onUserSubmit({name, email});
  }

  return (
    <form onSubmit={handleUserFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" required/>
      </label>
      <label>
        Email:
        <input type="email" name="email" required/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
