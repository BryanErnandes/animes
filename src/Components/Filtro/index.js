import react from "react";

import { Container, Banner, Nome } from "./styles";

export default function Filtro({ data, navigatePagina }) {

    return (
        <Container>
            <Banner activeOpacity={0.9} onPress={() => navigatePagina()}>
                <Nome>{data.name}</Nome>
            </Banner>
        </Container>
    )
}
