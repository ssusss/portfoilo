import IndexMyInfo from "../components/IndexMyInfo";
import MyselfComponent from "../components/MyselfComponent";
import Features from "../components/home/Features";
import Education from "../components/resume/Education";
import MyResume from "../components/resume/MyResume";
import Technology from "../components/resume/Technology";
import WorkExperience from "../components/resume/WorkExperience";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Resume from "./Resume";

const OnepageVer=()=>{


    
    return(
        <div >
            {/* 
            <div className="homeContainer">
                <IndexMyInfo />
                <MyselfComponent />
            </div>
            */}

            <AboutMe />

            <Features />


            <div className="resumeContainer font_eastar">
                
                {/* <h1 className="font_pilseung">About Me</h1>
                <div className="line"></div>

                <div className="resumeTopContent " >

                    <div className="topContentImg"> myImg</div>
                    <MyResume />

                </div> */}


                {/* <Education/> */}

                {/* <Experience
                    projectName="프로젝트 이름 / 다같이"
                    proInfo="프로젝트 소개"
                    date="2023.02 - 2023.09 /프로젝트 기간"
                    add="추가적인 설명"
                /> */}


                {/* <div className="reumeBottomContent">
                    <WorkExperience />
                </div> */}
                
            </div>

            <Technology/>
            <Project/>
            
        

        </div>
    )
}

export default OnepageVer;