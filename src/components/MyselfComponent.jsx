const MyselfComponent = () => {

    const selfUrl= "https://drive.google.com/file/d/1dmjGn9EBN0t1xWp3OKZSsOG9HtMZboe9/view?usp=sharing";

    return(

        <div className="myselfie">
            
            <img src={selfUrl} alt="myself"/>

        </div>

    )
}

export default MyselfComponent;