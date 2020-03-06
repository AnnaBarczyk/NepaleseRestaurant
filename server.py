from flask import Flask, render_template
import os

template_dir = os.path.abspath('/home/anna/Codecool/Indyjskie/Nepal/html-files/BS-4.3.1/Coffee')
STATIC_DIR = os.path.abspath('/home/anna/Codecool/Indyjskie/Nepal/html-files/BS-4.3.1/Coffee')
app = Flask(__name__, template_folder=template_dir, static_folder=STATIC_DIR)


@app.route('/')
def route_list():
    return render_template("index.html")




if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )