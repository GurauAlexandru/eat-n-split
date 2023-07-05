export const Button = ({ children, onClick }) => (
  <button className='button' onClick={onClick}>
    {children}
  </button>
);
