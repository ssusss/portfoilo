import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Clock from "./Clock";

const Features = () => {

    function onClockClick() {
        const clockContainer = document.querySelector('.clockContainer');
        clockContainer.classList.add('show');
    };

    return (
        <div className="features" id="home">
            <h1 className="feature_title">웹 개발자 포트폴리오</h1>
            <div className="line"></div>
            <div className="feature_content">
                <h3>안녕하세요.</h3>
                <h3>수학적인 개발자, 김동찬의 포트폴리오입니다.</h3>
            </div>
            <FontAwesomeIcon icon={faClock} size="2xl" className="clockIcon" onClick={onClockClick}/>
            <div className="clockContainer">
                <Clock></Clock>
            </div>
            <div className="feature_content2">What time is it?</div>
        </div>
    );
}

export default Features;