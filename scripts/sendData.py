from flask import Flask, request, jsonify
from flask_cors import CORS
from translator import translate

app = Flask(__name__)
CORS(app)

# @app.route('/transfer', methods=['GET'])
# def get_data():
#     data = {"num": [1, 2, 3, 4]}  # Example data
#     return jsonify(data)

@app.route('/transfer', methods=['POST'])
def receive_data():
    data = request.json  
    text ,auto_lang = translate(data['name'],data['target_lang'])
    print(data['target_lang'])
    
    return jsonify({'message': text , 'auto_lang':auto_lang})

if __name__ == '__main__':
    app.run(debug=True)
