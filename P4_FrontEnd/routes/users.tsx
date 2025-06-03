import type { Handlers } from "$fresh";
import type { FreshContext, PageProps } from "$fresh/server.ts";

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

        <table>

            <tr>

                <th>Nombre</th>
                <th>Email</th>

            </tr>

            {props.data.map((user:Datos) => {

                return (

                    <tr>

                        <td>{user.name}</td>
                        <td>{user.email}</td>

                    </tr>

                )

            })}

        </table>

    );

}

export default Users;