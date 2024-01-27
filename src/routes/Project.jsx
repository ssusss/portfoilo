import Carousel from 'react-bootstrap/Carousel';
import BackgroundCarouselImage from '../components/project/BackgroundCarouselImage';

const Project = () => {


    // 배열 형식 => ["프로젝트명", "이미지url","기간", "참여인원", "간단설명", ["기능1", "기능2", "기능3"], ["기술스택1", "기술스택2", "기술스택3"]];
    const myProject1 = [
        "다가치 (다같이 가치있게!)", 
        ["/img/my_project1_1.png", "/img/my_project1_2.png", "/img/my_project1_3.png", "/img/my_project1_4.png"], 
        "기간 : 2023.08.14 ~ 2023.09.05", 
        "참여인원 : 7", 
        "교육원에서 파이널 프로젝트로 수행한 취미생활을 공유하는 친목 도모 목적의 사이트입니다.", 
        ["모임을 달력에 기록, 길 안내까지", "친목을 도모하는 단체 채팅", "내 마음대로 취향껏 고르는 레이아웃", "자신의 위치를 기준으로 가까운 모임 검색"], 
        ["Javascript", "JQuery", "Bootstrap", "Java", "Oracle", "Spring", "GitHub"]
    ];
    const myProject1_github = 'https://github.com/newTypeo/dagachi';
    
    const myProject2 = [
        "로스트아크 스케쥴러 프로젝트", 
        ["/img/my_project2_1.png", "/img/my_project2_2.png", "/img/my_project2_3.png"], 
        "기간 : 2023.09.28 ~ 2023.11.05", 
        "참여인원 : 1", 
        "같이 게임을 플레이하는 사람들과 평소 시간을 조율할 때 불편했던 부분들을 보완한 스케쥴러 사이트를 제작해봤습니다. Oracle Cloud Infrastructure로 배포하여 현재 운영중인 사이트입니다.", 
        ["smilegate API를 활용해 캐릭터 조회 가능", "하루에 한 번씩 레벨 자동 갱신", "레이드, 시간, 설명을 포함한 일정 생성 및 수정", "일정 참가 투표"], 
        ["Javascript", "JQuery", "Bootstrap", "Java", "Oracle", "Spring", "OCI", "Ubuntu"]
    ];
    const myProject2_Url = 'https://elloas.com';

    const myProject3 = [
        "KDC's Portfolio", 
        ["/img/my_project3_1.png"], 
        "기간 : 2024.01.08 ~ 2023.01.27", 
        "참여인원 : 2", 
        "포트폴리오 목적으로 제작한 사이트입니다. React를 학습하기 위해 React로 제작 후 Vercel를 이용해 배포했습니다.", 
        ["간단한 자기 소개", "기술 스택 소개", "프로젝트 경험 소개"], 
        ["React", "Javascript", "Bootstrap", "GitHub", "Vercel"]
    ];
    const myProject3_github = 'https://github.com/ssusss/portfoilo';
    const myProject3_Url = 'https://kdc-portfoilo.vercel.app';




    return (
        <div className="projectContainer" id="project">
            <h1 className="font_pilseung">Projects</h1>
            <Carousel className="mainCarousel" interval={null} as={'div'} indicatorLabels={[1, 2, 3]}>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} myProject_github = {myProject1_github}/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject2} myProject_Url = {myProject2_Url}/>
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject3} myProject_github={myProject3_github} myProject_Url={myProject3_Url}/>
                    
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}


export default Project;