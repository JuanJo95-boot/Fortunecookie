import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ( {setphraseRandom, setImageSelected} ) => {
    const handleClick = () => {
       const phrase =  getRandomFromArray(phrases);
       setphraseRandom(phrase);

       const background = getRandomFromArray(arrImages);
       setImageSelected(background);
    }
  return (
    <button className="card__btn" onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase