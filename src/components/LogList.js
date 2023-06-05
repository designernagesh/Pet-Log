import { Box, TableContainer, Table, Thead, Tbody, Tr, Th, Td  } from "@chakra-ui/react"

const LogList = ({formData}) => {
    return (
        <Box boxShadow='base'>
            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sl. No.</Th>
                            <Th>Pet Type</Th>
                            <Th>Pet Name</Th>
                            <Th>Owner's Name</Th>
                            <Th>Illness</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            formData.map( (item, i) => {
                                return (
                                    <Tr>
                                        <Td>{i+1}</Td>
                                        <Td>{item.petType}</Td>
                                        <Td>{item.petName}</Td>
                                        <Td>{item.ownerName}</Td>
                                        <Td>{item.illness}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default LogList;