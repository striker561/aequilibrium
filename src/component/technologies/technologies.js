import React from "react";

function ProgrammingLanguageColumn(data){
    return (
        <div className="col-items col-lg-2 col-md-6 col-sm-6 mb-3">
            <div className="tech-chip">
                <div className="tech-icon text-center">
                    <i className={data.iconClass}></i>
                    <h4 className="tech-chip-name">{data.name}</h4>
                </div>
            </div>
        </div>
    );
}

function Technologies(){
    return (
        <section>
            <div className="p-5 bg-black">
                <div className="balance-theme">
                    <h1>TECHNOLOGIES</h1>
                    <h1>USED</h1>
                    <p>
                        I have experimented on a lot of technologies
                        and currently learning a lot new ones
                    </p>
                </div>
                <div className="row">
                    <ProgrammingLanguageColumn iconClass="devicon-html5-plain tech-icons" name="HTML 5"/>
                    <ProgrammingLanguageColumn iconClass="devicon-css3-plain tech-icons" name="CSS 3"/>
                    <ProgrammingLanguageColumn iconClass="devicon-jquery-plain tech-icons" name="JQUERY"/>
                    <ProgrammingLanguageColumn iconClass="devicon-bootstrap-plain tech-icons" name="BOOTSTRAP"/>
                    <ProgrammingLanguageColumn iconClass="devicon-react-original tech-icons" name="REACT"/>
                    <ProgrammingLanguageColumn iconClass="devicon-php-plain tech-icons" name="PHP"/>
                    <ProgrammingLanguageColumn iconClass="devicon-python-plain tech-icons" name="PYTHON"/>
                    <ProgrammingLanguageColumn iconClass="devicon-flutter-plain tech-icons" name="FLUTTER"/>
                    <ProgrammingLanguageColumn iconClass="devicon-mysql-plain tech-icons" name="MYSQL"/>
                    <ProgrammingLanguageColumn iconClass="devicon-postgresql-plain tech-icons" name="POSTGRESQL"/>
                    <ProgrammingLanguageColumn iconClass="devicon-vscode-plain tech-icons" name="VSCODE"/>
                    <ProgrammingLanguageColumn iconClass="devicon-visualstudio-plain tech-icons" name="VISUAL STUDIO"/>
                    <ProgrammingLanguageColumn iconClass="devicon-git-plain tech-icons" name="GIT"/>
                    <ProgrammingLanguageColumn iconClass="devicon-github-plain tech-icons" name="GITHUB"/>
                    <ProgrammingLanguageColumn iconClass="devicon-fastapi-plain tech-icons" name="FASTAPI"/>
                    <ProgrammingLanguageColumn iconClass="devicon-postman-plain tech-icons" name="POSTMAN"/>
                    <ProgrammingLanguageColumn iconClass="devicon-dot-net-plain tech-icons" name=".NET"/>
                    <ProgrammingLanguageColumn iconClass="devicon-railway-original tech-icons" name="RAILWAY"/>
                </div>
                <div>
                    <p className="mt-5 text-italics text-underline">
                        Not Satisfied?,<br/> I gat you
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Technologies;