import { useState } from "react";
import ImageComparison from "../ImageComparison";


export default function Cnn(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedNN, setSelectedNN] = useState('');


    const neuralNetworks = [
        { name: 'NN1', description: 'Neural Network 1 - Description and training details.' },
        { name: 'NN2', description: 'Neural Network 2 - Description and training details.' },
        // Add more neural networks here
    ];

    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleNNSelection = (event) => {
        setSelectedNN(event.target.value);
    };

    const handlePrediction = async () => {
        if (!selectedFile || !selectedNN) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        // try {
        //     const response = await axios.post(`/api/predict?nn=${selectedNN}`, formData);
        //     // Process the response and display prediction result
        // } catch (error) {
        //     // Handle error
        // }
    };

    return (
        <div className="container">
            <h1>It's not easy to differenciate</h1>

            <ImageComparison/>

            <div className="row ">
                <h1>AI Diagnosis</h1>
                <div className="col-md-6 d-flex flex-column w-100">
                        <h4>Upload Your Image</h4>
                        <input type="file" onChange={handleFileUpload} />
                        <div className="d-flex flex-row flex-column-sm">
                            <div className="d-flex flex-column">
                                <h4 className="mx-auto">Select Neural Network</h4>
                                <select className="m-1 mx-auto"style={{width:'70px'}} onChange={handleNNSelection} value={selectedNN}>
                                    <option value=""></option>
                                    {neuralNetworks.map((nn) => (
                                        <option key={nn.name} value={nn.name}>
                                            {nn.name}
                                        </option>
                                    ))}
                                </select>
                                <button className="btn btn-primary w-25 mx-auto mt-2" onClick={handlePrediction}>
                                    Predict Melanoma
                                </button>
                            </div>
                            {selectedNN && (
                                <div>
                                    <h3>{selectedNN}</h3>
                                    <p>{neuralNetworks.find((nn) => nn.name === selectedNN).description}</p>
                                </div>
                            )}
                        </div>
                        
                </div>
            </div>
        </div>
    );
}