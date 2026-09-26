type ProjectType = 'School' | 'Personal';

type Project = {
    id: number;
    title: string;
    mini_desc: string;
    type: ProjectType;
    img_url: string;
}

export default Project;