import GradientDivider from '../others/reuseable';
import { Draw, SettingsSuggest } from '@mui/icons-material';

function LeftSection() {
    return (
        <div className="col-md-6 col-xs-12">
            <div className="balance-theme">
                <h1>Find</h1>
                <h1>Your</h1>
                <h1>Perfect</h1>
                <h1>balance</h1>
            </div>
            <div className="bar mt-5">
                <div className="ball"></div>
            </div>
        </div>
    );
}

function RightSection() {
    return (
        <div className="col-md-6 col-xs-12">
            <div className="balance-theme mt-5">
                <h5>
                    Hey, 
                    <span className="text-black"> Michael Chidera</span> here!<br /><br />
                    I design
                    <Draw />
                    &amp;
                    develop
                    <SettingsSuggest />
                </h5>
                <p className="text-justify">
                    All it took was for me to find my balance in the world.<br />
                    Inspiration, motivation and passion for the creation and provision
                    of interactive pages with the inclusion of specified features came from
                    that balance.<br />
                    I am on a journey to learn as much programming language as I can, you can make
                    that journey longer and more fun. Also, I love thinking up logic, I mean where
                    is the fun in coding !!.
                </p>
                <p className="mt-5 text-italics text-underline">
                    Enough Talk,<br /> Let me show you
                </p>
            </div>
        </div>
    );
}

function About() {
    return (
        <section id="about">
            <GradientDivider />
            <div className="p-5 bg-white">
                <div className="row">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </section>
    );
}

export default About;