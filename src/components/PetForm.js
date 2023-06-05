import { Select, FormControl, FormHelperText, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const PetForm = ({ values, error, changeHandler, addPetHandler }) => {
    return (
        <form className="form" onSubmit={ addPetHandler }>
            <FormControl mb='15px'>
                <FormLabel>Select the Pet type</FormLabel>
                <Select name="petType"
                    onChange={ changeHandler }>
                    <option value="">Animal / Species</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Rodent">Rodent</option>
                    <option value="Fish">Fish</option>
                </Select>
                {
                    error.petType && 
                    <FormHelperText>{ error.petType}</FormHelperText>
                }
            </FormControl>

            <FormControl mb='15px'>
                <FormLabel>Pet Name</FormLabel>
                <Input type="text" 
                    name="petName" 
                    value={values.petName}
                    onChange={ changeHandler } 
                    placeholder="Pet Name" />
                {
                    error.petName && 
                    <FormHelperText>{ error.petName}</FormHelperText>
                }
            </FormControl>

            <FormControl mb='15px'>
                <FormLabel>Owner Name</FormLabel>
                <Input type="text" 
                    name="ownerName" 
                    value={values.ownerName}
                    onChange={ changeHandler }
                    placeholder="Owner Name" />
                {
                    error.ownerName && 
                    <FormHelperText>{ error.ownerName}</FormHelperText>
                }
            </FormControl>

            <FormControl mb='15px'>
                <FormLabel>Illness</FormLabel>
                <Textarea type="text" 
                name="illness" 
                value={values.illness}
                onChange={ changeHandler }
                placeholder="Illness" />
                {
                    error.illness && 
                    <FormHelperText>{ error.illness}</FormHelperText>
                }
            </FormControl>            
            <Button type="submit" colorScheme='blue'>Add Pet Details</Button>
        </form>
    )
}

export default PetForm;
