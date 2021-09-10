import React from 'react'
import { Link } from 'react-router-dom'

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = ({ }) => {
  return (
    <div>
      <p>You took a wrong turn, mate.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
export default NotFound;