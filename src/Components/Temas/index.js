import React from "react";

import {Container, Nome} from "./styles"

export default function Temas({data}) {
    return(
        <Container>
            <Nome>{data.name}</Nome>
        </Container>
    )
} 