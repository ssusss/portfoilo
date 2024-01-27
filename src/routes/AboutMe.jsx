import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const AboutMe= ()=>{

    return(
        <div className="aboutMeContainer" id="aboutMe">
            <h1 className="font_pilseung">About Me</h1>
            <div className="myInfoContainer font_eastar">
                <div className="myInfoUC">
                    <div>
                        <FontAwesomeIcon icon={faUser} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>이름</h5>
                            <div>김동찬</div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>생년월일</h5>
                            <div>1997.05.26</div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>주소</h5>
                            <div>서울특별시 서초구</div>
                        </div>
                    </div>
                </div>
                <div className="myInfoLC">
                    <div>
                        <FontAwesomeIcon icon={faMobileScreenButton} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>전화번호</h5>
                            <div>010-9379-8179</div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>이메일</h5>
                            <div>ssusss526@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} size="xl" className="faIcons"/>
                        <div className="aboutMeContent">
                            <h5>학력</h5>
                            <div>경희대학교 수학과</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;