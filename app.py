from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import stonks
from flask import send_from_directory
import os


# initialize flask
app = Flask(__name__)

# initalize mongo connection with pymongo
mongo = PyMongo(app, uri='mongodb://localhost:27017/stonks')

@app.route("/")
def home():
	# grab data from mongo database
	api_data = mongo.db.collection.find_one()

	# return template and data
	return render_template("index.html", api_data = api_data)


@app.route("/api")
def api_information():
	# run scrape function
	stonks_data = stonks.api_call()

	# update Mongo database 
	mongo.db.collection.update({}, stonks_data, upsert=True)

	# return redirect to home page
	return redirect("/")

@app.route('/js/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static',), filename)

if __name__ == "__main__":
	app.run(debug=True)	