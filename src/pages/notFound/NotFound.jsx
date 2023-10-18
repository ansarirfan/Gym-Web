import {Link} from 'react-router-dom'

import './notfound.css'

const NotFound = () => {
  return (
    <section>
      <div className="section notfound_container">
        <h2>Pge Not Found</h2>
        <Link to='/' className='btn'>Go Back To Home</Link>
      </div>
    </section>
  )
}

export default NotFound
