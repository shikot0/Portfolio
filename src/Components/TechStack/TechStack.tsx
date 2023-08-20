import Image from "next/image";
import './TechStack.css';


export default function TechStack() {
    return (
        <section id="tech-stack-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack-wrapper">
                <div className="tech">
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
            </div>
        </section>
    )
}