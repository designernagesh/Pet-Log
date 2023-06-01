const PetForm = ({ details, changeHandler, addPetHandler }) => {
    return (
        <form className="form" onSubmit={ addPetHandler }>   
            <h2>Add Pet Record</h2> 
            <p>
                <select name="petType"
                    onChange={ changeHandler }>
                    <option value="">Animal / Species</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Rodent">Rodent</option>
                    <option value="Fish">Fish</option>
                </select>
            </p>
            <p>
                <input type="text" 
                    name="petName" 
                    value={details.petName}
                    onChange={ changeHandler } 
                    placeholder="Pet Name" />
            </p>
            <p>
                <input type="text" 
                    name="ownerName" 
                    value={details.ownerName}
                    onChange={ changeHandler }
                    placeholder="Owner Name" />
            </p>
            <p>
                <input type="text" 
                    name="illness" 
                    value={details.illness}
                    onChange={ changeHandler }
                    placeholder="Illness" />
            </p>
            <input type="submit" value="Add Pet" />
        </form>
    )
}

export default PetForm;