import React from "react";
import {Link, Typography} from "@material-ui/core";
const CloneLink = ({link}) => {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return (
        <div>
            <Link href="#" onClick={preventDefault}>

                <Typography variant="h5" gutterBottom>
                    {link.split('/')[1]} - {link.split('/')[link.split('/').length -1]}
                </Typography>
            </Link>

        </div>
    );
}
export default CloneLink;