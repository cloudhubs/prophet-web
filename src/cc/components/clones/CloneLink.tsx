import React from "react";
import {Link} from "@material-ui/core";
const CloneLink = ({link}) => {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return (
        <div>
            <Link href="#" onClick={preventDefault}>
                {link}
            </Link>

        </div>
    );
}
export default CloneLink;