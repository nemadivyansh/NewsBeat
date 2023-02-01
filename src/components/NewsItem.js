import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, source, author } = this.props;

        var a = publishedAt;
        var releaseInfo = new Date(a);
        // releaseInfo.getDate() + "/" + releaseInfo.getMonth() +  "/" + releaseInfo.getFullYear() + " at " + releaseInfo.getHours() + ":" + releaseInfo.getMinutes() + ":" + releaseInfo.getSeconds() + 
        releaseInfo = "Published On : " + releaseInfo.toLocaleString();



        return (
            <div>
                <div className={`card ${this.props.mode==="dark"?"text-light":""} ${this.props.mode==="dark"? "bg-dark" : ""}`} style = {{border : "6px double black"}}>
                    <span style={{ zIndex: "1", top: "-1.5%", left: "90%"}} className="position-absolute translate-middle badge rounded-pill bg-danger" >
                        {source}
                    </span>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    </a>
                    <div className="card-body">
                        <p className="card-text text-muted">
                            {releaseInfo}
                        </p>
                        <p className="card-text text-muted">
                        {author}
                        </p>
                        <h5 className="card-title my-4">{title}</h5>
                        <p className="card-text">{description}</p>

                        <a href={newsUrl} className="btn btn-sm btn-success" target="_blank" rel="noopener noreferrer">
                            Read More..
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
