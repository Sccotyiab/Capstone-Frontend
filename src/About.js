import "./App.css";

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="scotty">
                            <img src="/IMG_1198.jpg" style={{ width: 300 }} />
                        </div>
                    </div>
                    <div className="col aboutText">
                        <h3>Introducing the Creator</h3>
                        <p>
                            Hey, my name is Scotyia Bain I am a young naitive of
                            Syracuse,NY. I moved away for about 15 years and
                            upon return I started planning my daughters birthday
                            party and was having a hard time finding out who did
                            what, when it came to services So thats where the
                            original thought of Nore Syracuse was birthed.
                        </p>
                        <p>
                            {" "}
                            Fast forward, to two years later. And I start
                            learning full stack development And I thought,
                            wouldnt it be cool to have a website that shared all
                            the small black businesses in Syracuse ? So, here we
                            are. I believe this will be a way to help get a lot
                            of unkown businesses out there My hopes is that this
                            directory will flourish and become bigger.
                            <p />
                        </p>

                        <p>
                            So please use this directory and connect to the
                            local black businesses in the area. If you are a
                            local black business and would like to add your
                            business please use the "Add your business" page and
                            fill out the form. And your business will be add.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
