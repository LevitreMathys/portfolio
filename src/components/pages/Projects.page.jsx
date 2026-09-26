import Card from "../Card.component";


function Projects() {


    const projects = [
        {
            id: 1,
            title: "Projet 1",
            mini_desc: "Description du projet 1 salut mec ca va ca va et toiec ca va ca va et ec ca va ca va et ec ca va ca va et ec ca va ca va et ",
            type: "Personal",
            img_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=1200&h=-1&s=1"
        },
        {
            id: 2,
            title: "Projet 2",
            mini_desc: "Description du projet 2",
            type: "School",
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpovtusjDHXlo5YlxgoAwI1Ob1FGW1YsZT0r1ZnGOrPA&s"
        },
    ];

    return (
        <>
            <div className="container m-5 ">
                My projects
            </div>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {projects.map((proj) => (
                        <div className="col" key={proj.id}>
                            <Card project={proj} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects