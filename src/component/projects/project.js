import React from "react";
import GradientDivider from '../others/reuseable';
import { OpenInNew } from "@mui/icons-material";

function ProjectIntroLeft() {
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="balance-theme p-3">
                <h1>Project Mission</h1>
                <p className="text-justify">
                    My projects aimed to create a harmonious blend of form and function. I paid close attention to the user experience and
                    interface design, and I developed applications that smoothly integrated key features with an attractive layout. I used
                    negative space and strategic placement of elements to achieve a balance between simplicity and functionality. This
                    project reflects my commitment to designing products that are not only aesthetically pleasing but also highly
                    functional.
                </p>
                <p className="text-justify">
                    Perfect balance also means that those projects with less appealing layouts have scalable functionalities to compensate.
                </p>
            </div>
        </div>
    );
}

function ProjectIntroRight() {
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="balance-theme">
                <h1>Can't</h1>
                <h1>leave out</h1>
                <h1>my projects, can i?</h1>
            </div>
            <div className="pendulum-base">
                <div className="pendulum-stand"></div>
                <div className="pendulum"></div>
            </div>
        </div>
    );
}

function ProjectIntro() {
    return (
        <section>
            <GradientDivider />

            <div className="p-5 bg-white">
                <div className="row">
                    <ProjectIntroLeft />
                    <ProjectIntroRight />
                </div>
            </div>
        </section>
    );
}

function ProjectContainers(data) {
    return (
        <div className="col-md-6 col-xs-12 mb-3">
            <div className="project-chip">
                <div className="product-image-container"
                    style={data.styles}>
                </div>
                <div className="product-info">
                    <div className="product-info-detailed">
                        <h4 className="mt-2">
                            {data.name}
                        </h4>
                        <span>{data.description}</span>
                    </div>
                    <div className="product-info-detailed">
                        <span>{data.languages}</span>
                        <a className="btn product-preview-btn mt-2" href={data.url}
                            target="_blank" rel="noreferrer">
                            Preview &nbsp;
                            <OpenInNew />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const EazeeWebImage = {
        backgroundImage: 'url("assets/img/eazee-web-image.png")',
    };

    const EazeeMobileImage = {
        backgroundImage: 'url("assets/img/eazee-mobile-image.png")',
    };
    return (
        <section>
            <div className="bg-black p-5">
                <div>
                    <div className="balance-theme">
                        <h1>My</h1>
                        <h1>Projects</h1>
                        <p className="text-italics text-underline">
                            Drumroll please ...
                        </p>
                    </div>
                </div>
                <div className="row">
                    <ProjectContainers styles={EazeeWebImage} name="Project Eazee" description="Web Application" languages="HTML, CSS, JQUERY, PHP" url="https://eazee-cargo.com" />
                    <ProjectContainers styles={EazeeMobileImage} name="Eazee Cargo Mobile" description="Mobile Application" languages="FLUTTER, DART, REST-API" url="https://play.google.com/store/apps/details?id=com.eazeecargo.app" />
                </div>
            </div>
        </section>
    );
}


export { ProjectIntro, Projects };