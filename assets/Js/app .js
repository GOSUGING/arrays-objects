
const arrayRadiologias = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
];

const arrayTraumatologias = [
    {
        hora: '08:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
];

const arrayDentales = [
    {
        hora: '08:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];


const radiologia = document.querySelector('#radiologia')
const traumatologia = document.querySelector('#traumatologia')
const dental = document.querySelector('#dental')


radiologia.textContent = `Radiología: Primera atención: ${arrayRadiologias[0].paciente} - ${arrayRadiologias[0].prevision} |  Última atención: ${arrayRadiologias[arrayRadiologias.length - 1].paciente} - ${arrayRadiologias[arrayRadiologias.length - 1].prevision}`


const tablaRadiologia = document.querySelector('#tablaRadiologia')


for (const item of arrayRadiologias) {
    tablaRadiologia.innerHTML += `
    <tr>
        <td>${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
}



traumatologia.textContent = `Traumatología: Primera atención: ${arrayTraumatologias[0].paciente} - ${arrayTraumatologias[0].prevision} |  Última atención: ${arrayTraumatologias[arrayTraumatologias.length - 1].paciente} - ${arrayTraumatologias[arrayTraumatologias.length - 1].prevision}`


const nuevaArrayTraumatologias = arrayTraumatologias.slice();

nuevaArrayTraumatologias.push(
    {
        hora: '09:00',
        especialista: 'RENÉ POBLETE ',
        paciente: 'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE'
    },
    {
        hora: '09:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'FONASA'
    },
    {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:00 ',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONASA'
    }
);


nuevaArrayTraumatologias.sort((a, b) => {
    if (a.hora < b.hora) return -1;
    if (a.hora > b.hora) return 1;
    return 0;
});

console.log(nuevaArrayTraumatologias);

const newTablaTraumatologia = document.querySelector('#newTablaTraumatologia');


newTablaTraumatologia.innerHTML = '';


for (const item of nuevaArrayTraumatologias) {
    newTablaTraumatologia.innerHTML += `
    <tr>
        <td>${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `;
}


dental.textContent = `Dental: Primera atención: ${arrayDentales[0].paciente} - ${arrayDentales[0].prevision} |  Última atención: ${arrayDentales[arrayDentales.length - 1].paciente} - ${arrayDentales[arrayDentales.length - 1].prevision}`

const tablaDental = document.querySelector('#tablaDental')


for (const item of arrayDentales) {
    tablaDental.innerHTML += `
    <tr>
        <td>${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
}


const contenedorDental = document.querySelector('#contenedorDental');


function imprimirConsultaDental(consulta) {
    const consultaString = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
    const consultaElement = document.createElement('p');
    consultaElement.textContent = consultaString;
    contenedorDental.appendChild(consultaElement);
}


arrayDentales.forEach(consulta => {
    imprimirConsultaDental(consulta);
});


function obtenerNombresPacientesEspecialidad(array) {
    return array.map(item => item.paciente);
}


const nombresTraumatologias = obtenerNombresPacientesEspecialidad(nuevaArrayTraumatologias);
const nombresDentales = obtenerNombresPacientesEspecialidad(arrayDentales);
const nombresRadiologia = obtenerNombresPacientesEspecialidad(arrayRadiologias);


const todosLosNombres = [...nombresTraumatologias, ...nombresDentales, ...nombresRadiologia];


const listadoPacientes = document.querySelector('#listadoPacientes');


todosLosNombres.forEach(nombre => {
    const paragraph = document.createElement('p');
    paragraph.textContent = nombre;
    listadoPacientes.appendChild(paragraph);
});

const consultasIsapre = arrayDentales.filter(consulta => consulta.prevision === 'ISAPRE');

console.log(consultasIsapre);

const consultasFonasa = nuevaArrayTraumatologias.filter(consulta => consulta.prevision === 'FONASA');

console.log(consultasFonasa);

arrayRadiologias.shift()
console.log(arrayRadiologias)
arrayRadiologias.pop()
console.log(arrayRadiologias)