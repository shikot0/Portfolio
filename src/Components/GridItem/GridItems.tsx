import Image from 'next/image';
import Link from 'next/link';
import {v4} from 'uuid';
import { MLProject, MobileProject, WebProject } from '../Grid/Grid';
import './GridItems.css';

type WebItemProps = {
    // details: {
    //     name: string;
    //     desktopImage: string;
    //     mobileImage: string;
    //     description: string;
    //     link: string;
    //     github: string;
    //     tools: string[];
    // }
    details: WebProject
}

type MLItemProps = {
    details: MLProject
}

type MobileItemProps = {
    details: MobileProject
}

export function MobileGridItem({details: {name, link, image, description, tools, github}}: MobileItemProps) {
    return (
        <div className="grid-item-wrapper">
            <Link href={link} target='_blank' className="grid-item mobile-grid-item">
                <div className="grid-item-image-wrapper">
                    <Image src={image} sizes='(max-width: 600px) 25rem, 50rem' quality={100} fill alt={name}/>
                </div>
                <div className="tools-wrapper">
                    {tools.map(tool => {
                        return (
                            // <div key={v4()} className="tool-image-wrapper">
                            //     {/* <Image src={`/tool_images/logo-${tool.toLowerCase()}.svg`} sizes='(max-width: 600px) 2.5rem, 5rem' fill alt={tool}/> */}
                            //     {/* <img className={`${tool.toLowerCase() === 'express' ? 'fillWhite': ''}`} src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/> */}
                            //     <img src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/>
                            // </div>

                            <small key={v4()} className="tool-text">{tool}</small>

                            // <div key={v4()} className="tool-image-wrapper">
                            //     <Image src={`/tool_images/logo-${tool.toLowerCase()}.svg`} fill alt={tool}/>
                            // </div>
                        ) 
                    })}
                </div>
                <div className="name">{name}</div>
            </Link>
            <Link href={github} target='_blank' className="github-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>
            </Link>
        </div>
    )
}

export function WebDevGridItem({details: {name, desktopImage, mobileImage, description, tools, link, github}}: WebItemProps) {
    return (
        <div className="grid-item-wrapper">
            <Link href={link} target='_blank' className="grid-item">
                <div className="grid-item-image-wrapper">
                    <Image src={desktopImage} sizes='(max-width: 600px) 25rem, 50rem' quality={100} fill alt={name}/>
                </div>
                <div className="tools-wrapper">
                    {tools.map(tool => {
                        return (
                            // <div key={v4()} className="tool-image-wrapper">
                            //     {/* <Image src={`/tool_images/logo-${tool.toLowerCase()}.svg`} sizes='(max-width: 600px) 2.5rem, 5rem' fill alt={tool}/> */}
                            //     {/* <img className={`${tool.toLowerCase() === 'express' ? 'fillWhite': ''}`} src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/> */}
                            //     <img src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/>
                            // </div>

                            <small key={v4()} className="tool-text">{tool}</small>

                            // <div key={v4()} className="tool-image-wrapper">
                            //     <Image src={`/tool_images/logo-${tool.toLowerCase()}.svg`} fill alt={tool}/>
                            // </div>
                        ) 
                    })}
                </div>
                <div className="name">{name}</div>
            </Link>
            <Link href={github} target='_blank' className="github-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>
            </Link>
        </div>
    )
}

export function MLGridItem({details: {name, image, description, tools, github}}: MLItemProps) {
    return (
        <div className="grid-item-wrapper ml-grid-item-wrapper">
            <Link href={github} target='_blank' className="grid-item ml-grid-item">
                <div className="grid-item-image-wrapper">
                    <Image src={image} sizes='(max-width: 600px) 25rem, 50rem' quality={100} fill alt={name}/>
                </div>
                <div className="tools-wrapper">
                    {tools.map(tool => {
                        return (
                            // <div key={v4()} className="tool-image-wrapper">
                            //     {/* <Image src={`/tool_images/logo-${tool.toLowerCase()}.svg`} sizes='(max-width: 600px) 2.5rem, 5rem' fill alt={tool}/> */}
                            //     {/* <img className={`${tool.toLowerCase() === 'express' ? 'fillWhite': ''}`} src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/> */}
                            //     <img src={`/tool_images/logo-${tool.toLowerCase()}.svg`} alt={tool}/>
                            // </div>
                            <small key={v4()} className="tool-text">{tool}</small>
                        ) 
                    })}
                </div>
                <div className="description-wrapper">
                    <p className="ml-project-name">{name}</p>
                    <p className="ml-project-description">{description}</p>
                </div>
                {/* <div className="name">{name}</div> */}
            </Link>
        </div> 
    )
}