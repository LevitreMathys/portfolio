import Project from '../types/Project'

function Card({ project }: { project: Project }) { 
    return (
        <div className="card">
            <img src={project.img_url} alt={project.title} />
            <div className="presentation">
                <div className="header">
                    <span className="title">{project.title}</span>
                    <div className="type">
                        <span >{project.type}</span>

                    </div>
                </div>
                <span className="desc">{project.mini_desc}</span>
            </div>
        </div>
    )
}

export default Card;