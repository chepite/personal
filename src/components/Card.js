//import PropTypes from 'prop-types';

const Card= ({text, image, onClick})=>{
    //using onclick for example location.href="link" --> redirecting
    //react router?
    return(
        //link voor bg image nog bekijken hoe structureren
        <article className="flex justify-center bg-clip-border bg-no-repeat w-40 h-48 m-4 shadow-md" style={{backgroundImage: `../resources/images/${image}` }}>
            <div className="self-end bg-gray-500 w-40">
            <h2 className="text-center m-2">{text}</h2>
            </div>
        </article>
    )
};


Card.defaultProps={
    //color: idk welk kleur mattie
};

export default Card;