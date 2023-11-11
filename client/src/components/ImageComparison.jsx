import melanoma1 from '../assets/images/melanoma_(1).jpeg'
import melanoma2 from '../assets/images/melanoma_(2).jpeg'
import not_melanoma1 from '../assets/images/not-melanoma_(1).jpg'
import not_melanoma2 from '../assets/images/not-melanoma_(2).jpg'


export default function ImageComparison(){
    const images = [
        {'src':melanoma1, 'name': "Melanoma"}, 
        {'src':not_melanoma1, 'name': "Not Melanoma"}, 
        {'src':melanoma2, 'name': "Melanoma"}, 
        {'src':not_melanoma2, 'name': "Not Melanoma"}
    ];

    return (
        <div className="col-md">
            <h4>Comparison:</h4>
            <div className="imgs-container container d-flex justify-content-evenly flex-sm-row flex-column p-0">
                {images.map( image =>{
                    return(
                        <div className="img-container align-items-center d-flex flex-column m-sm-4">
                            <img src={image.src} alt="Comparison" className="melanoma-img img-fluid flex-basis-80" />
                            <p className="m-sm-0">{image.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}