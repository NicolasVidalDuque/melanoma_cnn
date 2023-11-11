from flask import Flask
import pickle

app = Flask(__name__)

@app.route("/")
def main():
    return {'a':[2,2,2,2]}

if __name__ == "__main__":
    app.run(debug=True)


