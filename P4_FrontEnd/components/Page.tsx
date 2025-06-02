import type { PageProps } from "$fresh/server.ts";

type Datos = {

    name: string;
    email: string;

}

const Page = (props: PageProps <Datos[]>) => {

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

export default Page;