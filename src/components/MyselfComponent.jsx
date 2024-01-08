const MyselfComponent = () => {

    const selfUrl= "https://www.dropbox.com/scl/fi/g5zdif0yxg4u8qd7v54t5/1-1.jpg?rlkey=pk56ogs12ti51150em1lzdyzj&dl=0?raw=1";

    return(

        <div className="myselfie">
            
            <img src={selfUrl} alt="myself"/>

        </div>

    )
}

export default MyselfComponent;