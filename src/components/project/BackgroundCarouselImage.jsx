import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

const ExampleCarouselImage = ({ projectInfo, myProject_github, myProject_Url }) => {

    const title = projectInfo[0];
    const imageUrls = projectInfo[1];
    const term = projectInfo[2];
    const participants = projectInfo[3];
    const explanation = projectInfo[4];
    const functions = projectInfo[5];
    const skills = projectInfo[6];

    var imgFlag = [];
    imageUrls.forEach(elem => {
        var img = new Image();
        img.src = elem;
        var isHorizontal = img.width > img.height;
        if (isHorizontal) {
            imgFlag.push('h');
        } else {
            imgFlag.push('v');
        }
    });

    return (
        <div>
            <img className="backImage" src="img/tBackground.png" />

            <div className="projectInfoContainer" style={{ padding: '20px' }}>
                <h2 className='font_eastar'>{title}</h2>
                <p>{term} | {participants}</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '40%', textAlign: 'left', paddingLeft: '20px' }}>
                        <p style={{ marginTop: '5px' }}>{explanation}</p>
                        <div style={{ borderTop: '1px solid #777', paddingTop: '20px' }}>
                            <h5>주요 기능</h5>
                            {functions.map((func, index) => (
                                <div className='functions' key={`func-${index}`} style={{ marginLeft: '5px' }}><span className='originFont'>✔</span> {func}</div>
                            ))}

                            {myProject_github !== undefined ? (
                                <>
                                    <h5 style={{ marginTop: '30px' }}>GitHub</h5>
                                    <a className='gitUrl' href={myProject_github}>{myProject_github}</a>
                                </>
                            ) : null}

                            {myProject_Url !== undefined ? (
                                <>
                                    <h5 style={{ marginTop: '30px' }}>Url</h5>
                                    <a className='gitUrl' href={myProject_Url}>{myProject_Url}</a>
                                </>
                            ) : null}

                            <h5 style={{ marginTop: '30px' }}>기술 스택</h5>
                            {skills.map((skill, index) => (
                                <Badge bg="primary" key={`skill-${index}`} style={{ marginLeft: '5px' }}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className='pjImgCotainer'>
                        <Carousel controls={false} interval={3000}>
                            {imageUrls.map((imgUrl, index) => (
                                <Carousel.Item key={`imgUrl-${index}`}>
                                    <img src={imgUrl} alt="" className={`projectImg${imgFlag[index]}`} />
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