import { useEffect, useState } from "react"
import { fetchPersons } from "../../api/dataService"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import React from 'react';

export default function Persons() {
    // Se declara un estado llamado 'groupsWithPersonCount' utilizando useState.
    const [personsWithGroupsCount, setPersonsWithGroupsCount] = useState();

    // Utiliza useEffect para realizar la solicitud a la API cuando el componente se monta.
    useEffect(() => {
        fetchPersons()
            .then((response) => {
                // Extrae los datos de respuesta de la solicitud.
                const personsData = response.data;

                // Registra los datos de grupos en la consola.
                console.log(personsData);

                // Modifica el estado 'groupsWithPersonCount' transformando los datos de grupos.
                setPersonsWithGroupsCount(personsData.map(person => ({
                    id: person.id,
                    name: person.name,
                    groups: person.groups ? person.groups.length : 0
                })))
            })
            .catch((error) => {
                console.log(error);
            })

    }, []); // El [] como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.

    return (
        <React.Fragment>
            <DataGrid
                // Establece la fuente de datos para el DataGrid como 'groupsWithPersonCount'.
                dataSource={personsWithGroupsCount} // Establece el foco en la primera fila del DataGrid.

                // Muestra bordes alrededor de las celdas de la tabla.
                showBorders={true} // Establece el foco en la primera fila del DataGrid.
            >
                {/* Define la primera columna con el campo 'id' y un ancho de 50 píxeles. */}
                <Column dataField="id" width={50}
                    // Define el título de la columna como 'ID'.
                        caption="ID"
                />

                {/* Define la segunda columna con el campo 'name'. */}
                <Column dataField="name"
                    // Define el título de la columna como 'Name'.
                        caption="Name"
                />

            </DataGrid>
        </React.Fragment>
    )
}