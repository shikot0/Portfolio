import data from '@/utils/data.json';
import Grid from '../Grid/Grid';
import './Projects.css'

export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <Grid data={data}/>
        </section>
    )
}