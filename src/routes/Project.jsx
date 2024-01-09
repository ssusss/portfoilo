import { readConfigFile } from "typescript";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/project/ExampleCarouselImage';

const Project = () => {

    // 배열 형식 => ["프로젝트명", "이미지url","기간", "참여인원", "간단설명", ["기능1", "기능2", "기능3"], ["기술스택1", "기술스택2", "기술스택3"]]; ㅋㅋㅋㅎㅎ
    const myProject1 = ["프로젝트명", "https://via.placeholder.com/300x500", "기간", "참여인원", "간단설명간단설명간단설명간단설명간단설명간단설명간단설명간단설명간단설명간단설명간단설명간단설명", ["기능1", "기능2", "기능3"], ["기술스택1", "기술스택2", "기술스택3"]];


    return (
        <div className="projectContainer">
            <Carousel interval={null}>
                <Carousel.Item>
                    <ExampleCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Project;