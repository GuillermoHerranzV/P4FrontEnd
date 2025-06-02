import type { Handlers } from "$fresh";
import type { FreshContext, PageProps } from "$fresh/server.ts";
import Page from "../components/Page.tsx";

type Datos = {

    name: string;
    email: string;

}

export const handler: Handlers <Datos[]> = {

    async GET (_req: Request, ctx: FreshContext <Datos>){

        const response = await fetch ("https://jsonplaceholder.typicode.com/users");

        if (!response.ok){
            return ctx.renderNotFound({message: "No se ha podido hacer el fetch."});
        }

        const data = await response.json();
        const datosfiltrados = data.map ((dato:Datos) => ({

            name: dato.name,
            email: dato.email,

        }))

        return ctx.render (datosfiltrados);

    }

}

const Users = (props: PageProps<Datos []>) => {

    return (

        <Page {...props}/>

    );

}

export default Users;