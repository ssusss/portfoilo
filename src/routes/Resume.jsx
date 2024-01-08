import { readConfigFile } from "typescript";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import MyResume from "../components/resume/MyResume";

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
                 company="Company Name"
                 position="Web Developer"
                 date="January 2022 - Present"
                responsibilities="Responsibilities and achievements..."
            />
                
            
        </div>
    )
}

export default Resume;