import './PokeDetails.css'

function PokeDetails({pokemon}){

    const {name, types} = pokemon;

    const img = !pokemon.sprites ? '' : pokemon.sprites.other['official-artwork'].front_default;

    const colorType = !types ? [] : types.map(type => {
        return getComputedStyle(document.body).getPropertyValue('--'+type.type.name);
    });

    return(
        <div id='poke-details'>
            <div className='background-gradient' style={{backgroundImage: 'linear-gradient(to right bottom, ' + (colorType.length > 0 ? colorType.length === 1 ? colorType[0] + ', ' + colorType[0] : colorType.join(', ') : 'white, white') + ')'}}/>
            <div className='general'>
                <h1>{name}</h1>
                <img src={img} alt={pokemon}/>
            </div>
        </div>)
};

export default PokeDetails;