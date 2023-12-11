"use client"
import { useState } from 'react';
import {v4} from 'uuid';
import {MLGridItem, WebDevGridItem} from '../GridItem/GridItems';
import './Grid.css';


type Project = {
    name: string,
    description: string,
    tools: string[],
    github: string
// } & (WebProject | MLProject)
}
export type WebProject = Project & {
    type: "web",
    desktopImage: string,
    mobileImage: string,
    link: string
}

export type MLProject = Project & {
    type: "ml"
    image: string
}

type WebGridProps = {
    data: WebProject[];
}
type MLGridProps = {
    data: MLProject[];
}

export function WebGrid({data}: WebGridProps) {
    // const [showMore, setShowMore] = useState<boolean>(false);

    // function handleShowMore() {
    //     setShowMore(prev => !prev);
    // }
    return (
        // <div className={`grid ${showMore ? 'full': ''}`}>
        <div className="grid-wrapper">
            <h2>Web Projects</h2>
            <div className="grid">
                {/* {data.map(details => { */}
                {data.slice(0,14).map(details => {
                    return <WebDevGridItem key={v4()} details={details} />
                })}


                {/* <button className="show-more-button" onClick={handleShowMore}>
                    {!showMore ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/></g></g></svg>}
                    Show {showMore ? 'less' : 'more'}
                </button> */}
            </div>
        </div>
    )
}

export function MLGrid({data}: MLGridProps) {
    return (
        <div className="grid-wrapper">
            <h2>Machine Learning Projects</h2>
            <div className="grid ml-grid">
                {data.map(details => {
                    return <MLGridItem key={v4()} details={details} />
                })}
            </div>
        </div>
    )
}

