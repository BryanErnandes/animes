import React from "react";

import {Container, Nome} from "./styles"

export default function Generos({data}) {
    return(
        <Container>
            <Nome>{data.name}</Nome>
        </Container>
    )
} 