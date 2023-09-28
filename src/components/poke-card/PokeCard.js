import './PokeCard.css'

function PokeCard({data, onClick}){

    const {name, id, types} = data;

    //const img = !data.sprites ? '' : data.sprites.other['official-artwork'].front_default;
    const img = !data.sprites ? '' : data.sprites.front_default;

    const colorType = !types ? [] : types.map(type => {
        return getComputedStyle(document.body).getPropertyValue('--'+type.type.name);
    });

    return(
        <li className='poke-card' onClick={onClick} style={{backgroundImage: 'linear-gradient(to right bottom, ' + (colorType.length > 0 ? colorType.length === 1 ? colorType[0] + ', ' + colorType[0] : colorType.join(', ') : 'white, white') + ')'}}>
            <div className='white-cover'>
                <h1>{name}</h1>
                <h2>N°{id}</h2>
                <img src={img} alt={name}/>
            </div>
        </li>
    )
};

export default PokeCard;