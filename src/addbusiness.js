const addbusiness = () => {
    return (
        <div className="container">
            <div className="connect">
                <h1>Come Connect, Be apart ! </h1>
                <p>
                    Syracuse is a small town with a lot of talented black owned
                    businesses. Lets team up and make this space a place where
                    all our businesses can be highlighted and more than anything
                    supported ! There is enough room at the tabble for all of us
                    to eat. So fill the form out below- Pull up a chair and lets
                    eat - connect, network, grow and make all of our businesses
                    successful, since thats the real goal- Nore Syracue
                </p>
            </div>
            <form
                action="https://mailthis.to/noresyracuse@gmail.com"
                method="POST"
            >
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="Owner First and Last name"
                            name="Owner info"
                            className="form-control"
                        ></input>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="contact"
                            className="form-control"
                        ></input>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Business Name"
                                name="Name of business"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Business Type"
                                name="type"
                                className="form-control"
                            ></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Business Address"
                                name="Address"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Business website"
                                name="website"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="col-12">
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
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Send Info 💌
                    </button>
                </div>
            </form>
        </div>
    );
};

export default addbusiness;
