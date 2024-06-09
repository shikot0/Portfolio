import data from '@/utils/data.json';
import {MLGrid, MLProject, MobileGrid, MobileProject, WebGrid, WebProject} from '../Grid/Grid';
import './Projects.css'

export default function Projects() {
    const webprojects: WebProject[] = data.filter(item => {if(item.type === "web") return item}) as WebProject[];
    const mlprojects: MLProject[] = data.filter(item => {if(item.type === "ml") return item}) as MLProject[];
    const mobileprojects: MobileProject[] = data.filter(item => {if(item.type === "mobile") return item}) as MobileProject[];

    return (
        <section id="projects-section">
            {/* <h2>Projects</h2> */}
            <MLGrid data={mlprojects} />
            <MobileGrid data={mobileprojects}/>
            <WebGrid data={webprojects}/>
        </section>
    )
}  