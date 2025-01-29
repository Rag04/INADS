import pandas as pd
from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS
from playsound import playsound
import threading


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load the pre-trained models
label_encoders = {
    'protocol_type': joblib.load('./mlModels/v2/label_encoder_protocol_typev2.pkl'),
    'service': joblib.load('./mlModels/v2/label_encoder_servicev2.pkl'),
    'flag': joblib.load('./mlModels/v2/label_encoder_flagv2.pkl')
}

def play_beep():
    playsound('beep.mp3') 

k_best_label = joblib.load('./mlModels/v2/selected_features_v2.pkl')

pipeline = joblib.load('./mlModels/v2/pipeline_label_encoded_final_v2.pkl')  # Model trained on known attacks

# preprocessor = joblib.load("./mlModels/preprocessor.pkl")
anomaly_model = joblib.load('./mlModels/v1/ocsvm_80_pipeline.joblib')      # Model trained on normal data


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame([data["features"]])
    df_layer2 = pd.DataFrame([data["features"]])

    for column in ['protocol_type', 'service', 'flag']:
        le = label_encoders[column]
        df[column] = le.transform([df[column]])
    
    
    feats = k_best_label
    df2=df[feats]

    print(df2.shape)
    prediction = pipeline.predict(df2)
    print(prediction)
    if prediction[0] !="normal":
        threading.Thread(target=play_beep).start()
        return jsonify({'result': prediction[0]})
    else:
        prediction2 = anomaly_model.predict(df_layer2)
        if prediction2[0] == -1:
            threading.Thread(target=play_beep).start()
            return jsonify({'result': 'Anomaly'})
            
    return jsonify({'result': 'normal'})


if __name__ == '__main__':
    app.run(debug=True, port=8080)

