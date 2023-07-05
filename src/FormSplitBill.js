import { useState } from 'react';
import { Button } from './Button';

export const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [payedByUser, setPayedByUser] = useState('');
  const [whoIsPaying, setWhoIspaying] = useState('user');

  const payedByFriend = bill ? bill - payedByUser : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !payedByUser) return;

    onSplitBill(whoIsPaying === 'user' ? payedByFriend : -payedByUser);
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      ></input>

      <label>👦🏻 Your expense</label>
      <input
        type='text'
        value={payedByUser}
        onChange={(e) =>
          setPayedByUser(+e.target.value > bill ? payedByUser : +e.target.value)
        }
      ></input>

      <label>👬 {selectedFriend.name}'s expense</label>
      <input type='text' disabled value={payedByFriend}></input>

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIspaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button children='Split bill' />
    </form>
  );
};
