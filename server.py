from flask import Flask, render_template, request, redirect, url_for
from collections import OrderedDict
import os
import connection


# TODO: change path to absolute for all users

template_dir = os.path.abspath('/home/anna/Codecool/Indyjskie/Nepal/html-files/BS-4.3.1/Coffee')
STATIC_DIR = os.path.abspath('/home/anna/Codecool/Indyjskie/Nepal/html-files/BS-4.3.1/Coffee')
app = Flask(__name__, template_folder=template_dir, static_folder=STATIC_DIR)


@app.route('/')
@app.route('/index.html')
def route_list():
    return render_template("index.html" )

@app.route('/contact.html')
def contact():
    return render_template("contact.html")

@app.route('/menu.html')
def menu():

    # titles = ['chapter','id','eng_name','pol_name','price']
    chapters = []

    menu_full = connection.reader_csv()

    menu = []
    for position in menu_full:
        item = dict(position)
        menu.append(item)

    menu_full = connection.reader_csv()

    for item in menu_full:
        for key, value in item.items():
            if key == 'chapter':
                if value not in chapters:
                    chapters.append(value)

    chapters_col_1 = chapters[0:5]
    chapters_col_2 = chapters[6:13]
    chapters_col_3 = chapters[13:]

    return render_template("menu.html", menu=menu, chapters_col_1=chapters_col_1, chapters_col_2=chapters_col_2, chapters_col_3=chapters_col_3)

@app.route('/about.html')
def about():
    return render_template("about.html")

@app.route('/inner.html')
def inner():

    menu_full = connection.reader_csv()

    menu = []
    for position in menu_full:
        item = dict(position)
        menu.append(item)

    chapters = []
    for item in menu_full:
        for key, value in item.items():
            if key == 'chapter':
                if value not in chapters:
                    chapters.append(value)

    return render_template("inner.html", menu=menu, chapters=chapters)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )