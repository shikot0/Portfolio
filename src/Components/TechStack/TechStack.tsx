import Image from "next/image";
import './TechStack.css';


export default function TechStack() {
    return (
        <section id="tech-stack-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack-wrapper">
                {/* <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-html.svg'} fill alt="html"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-css.svg'} fill alt="css"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-javascript.svg'} fill alt="javascript"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-typescript.svg'} fill alt="typescript"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-react.svg'} fill alt="react"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-nextjs.svg'} fill alt="nextjs"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-nodejs.svg'} fill alt="nodejs"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-express.svg'} fill alt="express"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-mongodb.svg'} fill alt="mongodb"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-postgresql.svg'} fill alt="postgresql"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-python.svg'} fill alt="python"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-jupyter.svg'} fill alt="jupyter"/>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-github.svg'} fill alt="github"/>
                    </div>
                </div> */}
                
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-html.svg'} fill alt="html"/>
                    </div>
                    <p className="tech-name">HTML</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-css.svg'} fill alt="css"/>
                    </div>
                    <p className="tech-name">CSS</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-javascript.svg'} fill alt="javascript"/>
                    </div>
                    <p className="tech-name">JavaScript</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-typescript.svg'} fill alt="typescript"/>
                    </div>
                    <p className="tech-name">TypeScript</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-react.svg'} fill alt="react"/>
                    </div>
                    <p className="tech-name">React</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-nextjs.svg'} fill alt="nextjs"/>
                    </div>
                    <p className="tech-name">Nextjs</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-nodejs.svg'} fill alt="nodejs"/>
                    </div>
                    <p className="tech-name">Nodejs</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-express.svg'} fill alt="express"/>
                    </div>
                    <p className="tech-name">Express</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-mongodb.svg'} fill alt="mongodb"/>
                    </div>
                    <p className="tech-name">MongoDB</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-postgresql.svg'} fill alt="postgresql"/>
                    </div>
                    <p className="tech-name">PostgreSQL</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-python.svg'} fill alt="python"/>
                    </div>
                    <p className="tech-name">Python</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-jupyter.svg'} fill alt="jupyter"/>
                    </div>
                    <p className="tech-name">Jupyter Notebooks</p>
                </div>
                <div className="tech">
                    <div className="tech-image-wrapper">
                        <Image src={'/tool_images/logo-github.svg'} fill alt="github"/>
                    </div>
                    <p className="tech-name">GitHub</p>
                </div>
            </div>
        </section>
    )
}