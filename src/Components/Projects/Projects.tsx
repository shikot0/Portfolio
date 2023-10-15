import data from '@/utils/data.json';
import {MLGrid, MLProject, WebGrid, WebProject} from '../Grid/Grid';
import './Projects.css'

export default function Projects() {
    const webprojects: WebProject[] = data.filter(item => {if(item.type === "web") return item}) as WebProject[];
    const mlprojects: MLProject[] = data.filter(item => {if(item.type === "ml") return item}) as MLProject[];

    return (
        <section id="projects-section">
            {/* <h2>Projects</h2> */}
            <MLGrid data={mlprojects} />
            <WebGrid data={webprojects}/>
        </section>
    )
}  