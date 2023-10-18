import {useState} from 'react'

function Works() {
    const cats = ["Category 1", "Category 2", "Category 3"]
    const work = [
        {
            id:1,
            project: "Project One",
            category: "Category",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            links: ["icon/i", "icon/i"],
            thumbnail: "thumb/path",
            images: ["image/i"]
        }
    ]

    const [index, setIndex] = useState(0)

    const clickHandler = (i) =>{
        if(i !== index){
            setIndex(i)
        }
    }

    return (
        <div className='works'>
            <div className="categories">
                {
                    cats.map((c, i)=><div 
                        className={index === i? "category active":"category"} 
                        key={i}
                        onClick={()=>clickHandler(i)}
                        >{c}</div>
                    )
                }
            </div>
            <div className="work-card">
                <span className='ctrl'></span>
                <div className="card-content">
                    <div className="infor">
                        <div className="titles">
                            <div className="icon"></div>
                            <div className="words">
                                <span className='hd'>{work[0].project}</span>
                                <span>{work[0].category}</span>
                            </div>
                        </div>
                        <p>
                            {work[0].description}
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                            Corrupti nobis cumque voluptatibus ipsa libero necessitatibus at <br /> 
                            reiciendis unde laborum nihil, quia animi magni excepturi <br /> 
                            omnis nemo labore, consectetur sed inventore. */}
                        </p>
                        <div className="links">
                            {
                                work[0].links.map((l)=><div key={l} className="link"></div>)
                            }
                        </div>
                    </div>
                    <div className="thumb">
                        
                    </div>
                </div>
                <span className='ctrl'></span>
            </div>
        </div>
    )
}

export default Works