# app.py
from flask import Flask, request, jsonify
import re
from flask_cors import CORS

app = Flask(__name__)
# Enabling cors for all ports
CORS(app)

@app.route('/verify/<string:num>', methods=['POST'])
def verify(num):
    # Logic for number verification
    if "+" in num:
        removed_data = num.replace("+","")
    else:
        removed_data = num
    regex1 = '^(07[\d]{8,12})$'
    regex2 = '^(447[\d]{7,11})$'
    regexmatch1 = re.match(regex1, num)
    regexmatch2 = re.match(regex2, removed_data)

    if regexmatch1 and len(num) == 11:
        pass
    elif regexmatch2 and len(removed_data) == 12:
        pass
    else:
        return jsonify({"error": "Incorrect phone number"}), 403

    return jsonify({"number": "Success"}), 200

# Server starting at port 8000 localhost
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)