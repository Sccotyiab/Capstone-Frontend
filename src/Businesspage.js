import { useEffect, useState } from "react";

const Businesspage = () => {
    const [businesses, setBusinesses] = useState([]);
    useEffect(() => {
        const getBusinesses = async () => {
            const response = await fetch(`http://localhost:3001/businesses`);
            const data = await response.json();
            console.log(data);
            setBusinesses(data.businesses);
        };
        getBusinesses();
    }, []);
    return (
        <div className="container">
            <div className="row">
                {businesses.map((business) => {
                    return (
                        <div className="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {business.Business}
                                    </h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        {business.Owner}
                                    </li>
                                    <li class="list-group-item">
                                        {business.Type}
                                    </li>
                                    <li class="list-group-item">
                                        {business.Address}
                                    </li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">
                                        {business.Website}
                                    </a>
                                </div>
                            </div>

                            {/* <li
                                    key={business.id}
                                    style={{ color: "white" }}
                                >
                                    // {business.Owner} ({business.Address}) -
                                    // {business.Type}
                                    //{" "}
                                </li> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Businesspage;
