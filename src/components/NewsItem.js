import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, source } = this.props;

        var a = publishedAt;
        var releaseInfo = new Date(a);
        // releaseInfo.getDate() + "/" + releaseInfo.getMonth() +  "/" + releaseInfo.getFullYear() + " at " + releaseInfo.getHours() + ":" + releaseInfo.getMinutes() + ":" + releaseInfo.getSeconds() + 
        releaseInfo = "Published On : " + releaseInfo.toLocaleString();



        return (
            <div>
                <div className={`card ${this.props.mode==="dark"?"text-light":""} ${this.props.mode==="dark"? "bg-dark" : ""}`}>
                    <span style={{ zIndex: "1", top: "-1.5%", left: "90%"}} class="position-absolute translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-muted">
                            {releaseInfo}
                        </p>
                        <h5 className="card-title my-4">{title}</h5>
                        <p className="card-text">{description}</p>

                        <a href={newsUrl} className="btn btn-sm btn-info d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                            Read More..
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
