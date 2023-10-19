import '../components/Styles.css'

import Works from './Works'
import About from './About'
import Contacts from './Contacts'

function BodyContent({tab=0}) {
    return (
        <div className='content'>
            { tab === 0 && <Works />}
            { tab === 1 && <About />}
            { tab === 2 && <Contacts />}
        </div>
    )
}

export default BodyContent