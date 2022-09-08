const addbusiness = () => {
    return (
        <div className="container">
            <h1>Come Connect, Be apart ! </h1>
            <form action="https://mailthis.to/scotyiab@gmail.com" method="POST">
                <div className="row">
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Owner First and Last name"
                            name="contect"
                            className="form-control"
                        ></input>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="contact"
                            className="form-control"
                        ></input>
                    </div>
                    <div className="col aboutText">
                        <h3>Introducing the Creator</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <input
                                type="text"
                                placeholder="Business Name"
                                name="business"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                placeholder="Business Type"
                                name="type"
                                className="form-control"
                            ></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <input
                                type="text"
                                placeholder="Business Address"
                                name="Address"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                placeholder="Business website"
                                name="website"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="text"
                                    placeholder="Short Descripton"
                                    name="Description"
                                    className="form-control"
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <button type="submit" className="btn btn-primary">
                        Send Info 💌
                    </button>
                </div>
            </form>
        </div>
    );
};

export default addbusiness;
