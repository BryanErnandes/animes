import React from "react";

import { Container, Nome } from "./style";


export default function MangaDetails({data}) {
    
    return (
        <Container>
            <Nome>{data.name}</Nome>
        </Container>
    )
}
