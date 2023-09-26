import './PokeCard.css'

function PokeCard({data, onClick}){

    const {name, id, img} = data;

    return(
        <li className='poke-card' onClick={onClick}>
            <div className='white-cover'>
                <h1>{name}</h1>
                <h2>N°{id}</h2>
            </div>
        </li>
    )
};

export default PokeCard;