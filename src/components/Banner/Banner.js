import avatar from "../../assets/img/avatar.png";

const Banner = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 text-center" style={{height: '80vh'}}>
            <h1 className="text-bold">Web Developer</h1>
            <img src={avatar} className="img-fluid" alt="avatar" style={{width: '40%'}} />
            <p className="lead">I design and code beautifully simple things, and I love what I do.</p>
        </div>
    );
}

export default Banner;
