import { readConfigFile } from "typescript";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import MyResume from "../components/resume/MyResume";
import Technology from "../components/resume/Technology";
import ProExperience from "../components/resume/ProExperience";

const Resume = () =>{


    return(
        <div className="resumeContainer">

            <div> myImg</div>

            
            <MyResume />

            <Education
                 university="University Name"
                degree="Degree in Computer Science"
                graduationYear="2022"
            />

            <Experience
                 company="KH 정보 교육원"
                 position="Web Developer"
                 date="2023.02 - 2023.09"
                responsibilities="Responsibilities and achievements..."
            />

            <Technology />

            <ProExperience />
                
            
        </div>
    )
}

export default Resume;