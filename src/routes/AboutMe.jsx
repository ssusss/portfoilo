import MyInfo from "../components/resume/MyInfo";
import MyResume from "../components/resume/MyResume";

const AboutMe= ()=>{

    return(
        <div className="aboutMeTopContainer" id="aboutMe" >
            
            <div><h1>About Me</h1></div>
                
                <div className="aboutMeTopContent">
                    <MyResume />
                    <MyInfo />
                </div>
               

        </div>
    )
}

export default AboutMe;