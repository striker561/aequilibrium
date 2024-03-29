import React from 'react';

function LeftSection({ title }) {
    return (
        <div className="col-md-6 col-xs-12" id="intro-bg-right">
            <div className="bg-white h-5 rounded bg-white-hover">
                <div className="intro-text-div">
                    <div className="text-center">
                        <h2 className="intro-text typewriter">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MiddleSection() {
    return (
        <div className="intro-logo" id="intro-logo-center">
            <div className="circle">
                <div align="center">
                    <div className="yin"></div>
                </div>
                <div align="right">
                    <div className="feher"></div>
                </div>
                <div align="center">
                    <div className="yang"></div>
                </div>
                <div align="center">
                    <div className="p-black"></div>
                    <div className="p-white"></div>
                </div>
            </div>
        </div>
    );
}

function RightSection({ title }) {
    return (
        <div className="col-md-6 col-xs-12" id="intro-bg-left">
            <div className="bg-black h-5 rounded bg-black-hover">
                <div className="intro-text-div">
                    <div className="text-center">
                        <h2 className="intro-text typewriter">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

function YingYang() {
    return (
        <section className="intro-split-screen-base bg-black">
            <div className="row mt-4">
                <LeftSection title="Finding" />
                <MiddleSection />
                <RightSection title="Balance" />
            </div>
        </section>
    );
}

export default YingYang;