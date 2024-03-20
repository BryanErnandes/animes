import react from "react";

import { Container, Banner, Nome } from "./style";

export default function CategoriaAnimes({ data, navigatePagina }) {

    return (
        <Container>
            <Banner>
                <Banner/>
                <Nome>{data.name}....</Nome>
            </Banner>
        </Container>
    )
}
