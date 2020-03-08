from flask import Flask, render_template, request, redirect, url_for
from collections import OrderedDict
import os
import connection


# TODO: change path to absolute for all users

template_dir = os.path.abspath('/home/ubuntu/Desktop/Nepal/html-files/BS-4.3.1/Coffee')
STATIC_DIR = os.path.abspath('/home/ubuntu/Desktop/Nepal/html-files/BS-4.3.1/Coffee')
app = Flask(__name__, template_folder=template_dir, static_folder=STATIC_DIR)


@app.route('/')
def route_list():

    titles = ['chapter','id','eng_name','pol_name','price']
    menu = connection.reader_csv()
    for item in menu:
        print (item.values())

    
    return render_template("menu.html", titles=titles, menu=menu)




if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )