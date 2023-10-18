import { useEffect, useRef, useState } from 'react'
import '../components/Styles.css'

function AppBar() {
    const [index, setIndex] = useState(0)
    const navs = ["Works", "About", "Contacts"]

    const item1 = useRef("")
    const item2 = useRef("")
    const item3 = useRef("")

    useEffect(() => {
        item1.current.style.display = 'none'
        item2.current.style.display = 'block'
        item3.current.style.display = 'block'
    }, [])

    const itemClick = (i) => {
        if (index !== i) {
            switch (i) {
                case 0:
                    item1.current.style.display = 'none'
                    item2.current.style.display = 'block'
                    item3.current.style.display = 'block'
                    setIndex(i)
                    break;
                case 1:
                    item1.current.style.display = 'block'
                    item2.current.style.display = 'none'
                    item3.current.style.display = 'block'
                    setIndex(i)
                    break;
                case 2:
                    item1.current.style.display = 'block'
                    item2.current.style.display = 'block'
                    item3.current.style.display = 'none'
                    setIndex(i)
                    break;
                default:
                    // reload
                    break;
            }
        }
    }

    return (
        <div className="appbar">
            <div className="logo"></div>
            <span className="focusdiv" onClick={()=>itemClick(3)}>{navs[index]}</span>
            <div className="nav">
                <div className="nav-item" onClick={()=>itemClick(0)} ref={item1}>Works</div>
                <div className="nav-item" onClick={()=>itemClick(1)} ref={item2}>About</div>
                <div className="nav-item" onClick={()=>itemClick(2)} ref={item3}>Contants</div>
            </div>
        </div>
    )
}

export default AppBar