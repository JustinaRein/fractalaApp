# This is where the routes are defined. It may be split into a package of its own (yourapp/views/) with related views grouped together into modules.
from flask import render_template
from appfractala import app

@app.route('/')
def index():
    return render_template("index.html")