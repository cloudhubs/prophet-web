import React from 'react';
import {Box, Paper, Typography} from "@material-ui/core";
import prophetStyles from "../prophetStyles";

const Abstract = () => {

    const classes = prophetStyles();

    return (
        <Box>
            <Paper>
                <Typography variant="h6" align="justify" color="textSecondary" component="p" paragraph={true} className={classes.box}>
                    Microservice architecture provides a number of benefits for enterprise applications, including improved scalability, shorter deployment and update cycle,
                    and increased flexibility in choosing different languages and frameworks for specific parts of an application. These benefits come from microservices'
                    independence from each other, both in development and deployment. However, this separation leads to a lack of a centralized view of the overall application's functionality.
                    A program's data model in separated among and possibly replicated between each microservice, requiring extra effort to create a single view of the data model.
                    Additionally, while a microservice's API can be statically documented, how they call each other continues to change as the program is developed,
                    making it hard to maintain a communication diagram documenting microservice interactions. We propose Prophet,
                    a tool to analyze a microservice mesh and automatically generate a communication diagram, a context map, and microservice-specific bounded contexts across languages.
                    This gives developers and DevOps a centralized dashboard view of how the program as a whole works once the microservices are composed.
                </Typography>
            </Paper>
        </Box>
    )
}

export default Abstract;
