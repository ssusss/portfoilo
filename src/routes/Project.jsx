import { readConfigFile } from "typescript";
import Carousel from 'react-bootstrap/Carousel';
import BackgroundCarouselImage from '../components/project/BackgroundCarouselImage';

const Project = () => {


    // 배열 형식 => ["프로젝트명", "이미지url","기간", "참여인원", "간단설명", ["기능1", "기능2", "기능3"], ["기술스택1", "기술스택2", "기술스택3"]];
    const myProject1 = [
        "프로젝트명", 
        ["https://via.placeholder.com/400x500", "https://via.placeholder.com/401x500", "https://via.placeholder.com/402x500", "https://via.placeholder.com/403x500"], 
        "기간", 
        "참여인원", 
        "취미생활을 공유하고 경험을 나누는 다가치!", 
        ["모임을 달력에 기록, 길 안내까지!", "친목을 도모하는 단체 채팅!", "내 마음대로 취향껏 고르는 레이아웃"], 
        ["기술스택1", "기술스택2", "기술스택3"]
    ];
    const myProject1_github = 'https://github.com/newTypeo/dagachi';


    return (
        <div className="projectContainer" id="project">
            <h1 className="font_pilseung">Projects</h1>
            <Carousel className="mainCarousel" interval={null} as={'div'} indicatorLabels={[1, 2, 3]}>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} myProject1_github = {myProject1_github} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Project;