import { PrismaClient } from '@prisma/client'
import {checkPrime} from "crypto";
const prisma = new PrismaClient()
async function main() {
    await prisma.identifyType.createMany({
        data: [
            {
                id: 1,
                name: 'DNI',
                description: 'Documento Nacional de Identidad'
            },
            {
                id: 2,
                name: 'CC',
                description: 'Cédula de Ciudadanía'
            },
            {
                id: 3,
                name: 'NIT',
                description: 'Número de Identificación Tributaria'
            },
            {
                id: 4,
                name: 'CONTACTO',
                description: 'Contacto'
            }
        ]
    });

    await prisma.expenseCategory.createMany({
        data: [
            {
                id: 1,
                name: 'Casa',
                description: 'Gastos de la casa'
            },
            {
                id: 2,
                name: 'Comida',
                description: 'Gastos de comida'
            },
            {
                id: 3,
                name: 'Transporte',
                description: 'Gastos de transporte',
            },
            {
                id: 4,
                name: 'Viajes',
                description: 'Gastos de viajes',
            },
            {
                id: 5,
                name: 'Trabajo',
                description: 'Gastos de trabajo',
            }
        ]
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })