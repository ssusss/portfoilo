import { readConfigFile } from "typescript";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import MyResume from "../components/resume/MyResume";
import Technology from "../components/resume/Technology";
import WorkExperience from "../components/resume/WorkExperience";

const Resume = () =>{


    return(
        <div className="resumeContainer font_eastar">

            <div className="resumeTopContent " >

                <div className="topContentImg"> myImg</div>
                <MyResume />

            </div>


            <Education/>

            {/* <Experience
                 projectName="프로젝트 이름 / 다같이"
                 proInfo="프로젝트 소개"
                 date="2023.02 - 2023.09 /프로젝트 기간"
                add="추가적인 설명"
            /> */}


            <div className="reumeBottomContent">
                <WorkExperience />
            </div>
                <Technology />
            

                
            
        </div>
    )
}

export default Resume;