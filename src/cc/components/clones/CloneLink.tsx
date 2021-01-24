import React from "react";
import {Link, Typography} from "@material-ui/core";
const CloneLink = ({link, heading}) => {
    const preventDefault = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"ide": "./code", "idePath":"/home/jan/Development/VSCode-linux-x64/bin",  "filePath": "/home/jan/Development/tms2020" + link})
        };
        fetch('http://localhost:8080/open', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };

    return (
        <div>
            <Link href="#" onClick={preventDefault}>
                {link} -
                <Typography variant={heading} gutterBottom>
                    {link.split('/')[1]} - {link.split('/')[link.split('/').length -1]}
                </Typography>
            </Link>

        </div>
    );
}
export default CloneLink;