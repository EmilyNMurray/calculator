from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#API Route
@app.route('/api/math', methods=['POST'])
def process_math():
        data = request.get_json()
        # print("Data received:", data) # Debugging line
        return_value = f"data received is: {data}"
        return jsonify(return_value)

if __name__=="__main__":
        app.run(debug=True)

