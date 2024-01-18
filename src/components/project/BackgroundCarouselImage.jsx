import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

const ExampleCarouselImage = ({ projectInfo, myProject1_github }) => {

    const title = projectInfo[0];
    const imageUrls = projectInfo[1];
    const term = projectInfo[2];
    const participants = projectInfo[3];
    const explanation = projectInfo[4];
    const functions = projectInfo[5];
    const skills = projectInfo[6];


    return (
        <div>
            <img className="backImage" src="img/tBackground.png" />

            <div className="projectInfoContainer" style={{padding: '20px'}}>
                <h2 className='font_eastar'>{title}</h2>
                <p>{term} | {participants}</p>
                <div style={{display: 'flex'}}>
                    <div style={{width: '40%', textAlign: 'left', paddingLeft: '20px'}}>
                        <p style={{marginTop: '5px'}}>{explanation}</p>
                        <div style={{borderTop: '1px solid black', paddingTop: '20px'}}>
                            <h5>주요 기능</h5>
                            {functions.map((func, index) => (
                                <div className='functions' key={`func-${index}`} style={{marginLeft: '5px'}}><span className='originFont'>✔</span> {func}</div>
                            ))}

                            {myProject1_github !== null ? (
                                <>
                                    <h5 style={{marginTop: '30px'}}>GitHub</h5>
                                    <p className='gitUrl'>{myProject1_github}</p>
                                </>
                            ) : null}

                            <h5 style={{marginTop: '30px'}}>기술 스택</h5>
                            {skills.map((skill, index) => (
                                <Badge bg="primary" key={`skill-${index}`} style={{marginLeft: '5px'}}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div style={{width: '55%', marginLeft: '5%'}}>
                        <Carousel controls={false} interval={5000}>
                            {imageUrls.map((imgUrl, index) => (
                                <Carousel.Item>
                                    <img key={`imgUrl-${index}`} src={imgUrl} alt="" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExampleCarouselImage;