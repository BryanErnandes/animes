import react from "react";

import { Container, Banner, Nome } from "./styles";

export default function Filtro({ data, navigatePagina }) {

    return (
        <Container>
            <Banner onPress={() => alert('test')}>
                <Nome>{data.name}</Nome>
            </Banner>
        </Container>
    )
}
