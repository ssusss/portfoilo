import MyselfComponent from "../components/MyselfComponent";

const Home = () => {

    return(
        <div className="homeContainer">


            <div className="homeProfile">
            <h1>이름</h1>

                <h3>희망직무</h3>

                <h3>전화번호</h3>
                <h4>이메일</h4>

                <h4>이메일</h4>
                <h4>주소</h4>

                <span>노션</span><span>git</span>


            </div>

            <MyselfComponent />

            

        </div>
    )
}

export default Home;