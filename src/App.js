import { useState } from 'react';
import PetForm from './components/PetForm';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import LogList from './components/LogList';

const App = () => {
  let [ formData, setFormData ] = useState([]);
  let [ values, setValues ] = useState({
    petType: "",
    petName: "",
    ownerName: "",
    illness: "",
  });
  let [ error, setError ] = useState({});
  
  const addPetHandler = (e) => {
    e.preventDefault();
    let newFormData = formData;
    newFormData.push(values);
    setFormData(newFormData);
    setError(validation());
  }
  
  const changeHandler = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name] : e.target.value };
    })
  }

  const validation = () => {
    let formError = {}
    if(!values.petType){
      formError.petType = "Please, Select the Pet Type."
    }
    if(!values.petName){
      formError.petName = "Please, Write the Pet Name."
    } else if( values.petName.length < 3 ) {
      formError.petName = "Pet Name characters more then 3."
    }
    if(!values.ownerName){
      formError.ownerName = "Please, Write the Owner Name."
    } else if( values.ownerName.length < 5 ) {
      formError.ownerName = "Owner Name characters more then 5."
    }
    if(!values.illness){
      formError.illness = "Please, Write about the Pet Illness."
    } else if( values.illness.length < 20 ) {
      formError.illness = "Describe the Illness in 20 characters."
    }
    return formError;
  }

  return (
      <Container maxW='6xl' mt='30px'>
        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
          <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>Pet Log</Heading>          
          <Flex>
            <Box mr='2%' w='30%'>
              <Heading as='h2' mb='20px'>Add Pet Record</Heading> 
              <PetForm values={values} error={error} changeHandler={changeHandler} addPetHandler={addPetHandler} />
            </Box>

            <Box w='68%'>
              <Heading as='h2' mb='20px'>The Log List</Heading>
              <LogList formData={formData} />
            </Box>
          </Flex>
        </Box>
      </Container>
  );
}

export default App;
