from flask import Flask, render_template, request, jsonify, redirect, url_for
# from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
#sqlalchemy dependencies
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import pandas as pd
import json

from flask_mail import Mail, Message
#Enviromental Variables
from decouple import config

app = Flask(__name__)

#FLASK MAIL CONFIG
app.config['TESTING'] = False
app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT']= 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
#app.config['MAIL_DEGUB'] = True 
app.config['MAIL_USERNAME'] = 'jamesanderegg@jamesanderegg.com'
app.config['MAIL_PASSWORD'] = config('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = ('Form Submission','jamesanderegg@jamesanderegg.com')
app.config['MAIL_MAX_EMAILS'] = None
#app.config['MAIL_SUPPRESS_SEND'] = False
app.config['MAIL_ASCII_ATTACHMENTS'] = False



app.config['MAIL_PORT']= 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
#app.config['MAIL_DEGUB'] = True 
app.config['MAIL_USERNAME'] = 'iceandjames@gmail.com'
app.config['MAIL_PASSWORD'] = 'eiztfgebomeslyji'


# username="juicyjames"
password="hju87ijpolispoeal23"
hostname="juicyjames.mysql.pythonanywhere-services.com"
databasename="juicyjames$website_db"
SQLALCHEMY_DATABASE_URI = f"mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}"

#uri database location
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "something only you know"

# LOCAL DB
# app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'


#Initiat Database
db = SQLAlchemy(app)
mail = Mail(app)

class Gps_locations(db.Model):
    __tablename__ = "gps_locations"
    latitude = db.Column(db.Float, primary_key=True)
    longitude = db.Column(db.Float, nullable=False)


class Denver_311(db.Model):
    __tablename__ = "denver"
    pkey = db.Column(db.Integer, primary_key=True)
    summary = db.Column(db.String(4096))
    source = db.Column(db.String(256))
    agency = db.Column(db.String(256))
    date = db.Column(db.String(24))
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)

    def __repr__(self):
        return f"gps_locations('{self.latitude}','{self.longitude}')"


def df_to_geojson(merged_df, lat='latitude', lon='longitude'):

    geojson = {'type': 'FeatureCollection', 'features': []}

    # loop through each row in the dataframe and convert each row to geojson format
    for _, row in merged_df.iterrows():

        # create a feature template to fill in
        feature = {'type': 'Feature',
                   'properties': {
                       'Agency': '',
                       'Case Summary': '',
                       'Case Source': '',
                       'Case Date': ''
                   },
                   'geometry': {'type': 'Point',
                                'coordinates': []}}

        # fill in the coordinates
        feature['geometry']['coordinates'] = [row[lon], row[lat]]
        feature['properties']['Agency'] = row['agency']
        feature['properties']['Case Summary'] = row['summary']
        feature['properties']['Case Source'] = row['source']
        feature['properties']['Case Date'] = row['date']
        # for each column, get the value and add it as a new feature property
        # for prop in properties:
        #     feature['properties'][prop] = row[prop]

        # add this feature (aka, converted dataframe row) to the list of features inside our dict
        geojson['features'].append(feature)

    return geojson


# The first Route is our default and sets up to catch any other routes.
# #We do not have a route function in python for all our React pages, so this will catch the React routes.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def my_index(path):

    
    
    # #To get User IDs we have to check if a user object exists first or it will break.
    # if len(current_user.__dict__)>1:
    #     user_id = current_user.id
    # else:
    #     user_id = None

    #Pass the userId as a prop so react has access to it.
    return render_template("index.html")


@app.route('/contact_form', methods=['POST'])
def mail_send():
    form = request.get_json()
    msg = Message(form['email'], recipients=['jamesanderegg@jamesanderegg.com'])
    msg.body = 'Portolio Contact Page: from: '+ form['email'] + "\nMessage: " + form['message']
    try:
        mail.send(msg)
        result="success"

    except Exception as e:
        try:
            result=str(e)
        except:
            result="email fail"
    print("EMAIL;  ", result)
    return render_template("index.html")

@app.route('/google_data', methods=["GET"])
def google_data():
    print("HELLO WORLD")
    empDict = {'latitude': [],
               'longitude': []}

    result = Gps_locations.query.all()
    for row in result:
        empDict['latitude'].append(row.latitude)
        empDict['longitude'].append(row.longitude)

    return jsonify(empDict)

@app.route('/denver311')
def denver311():

    data = {
        "summary": [],
        "source": [],
        "agency": [],
        "date": [],
        "longitude": [],
        "latitude": []
    }
    result = Denver_311.query.all()

    for row in result:
        data['summary'].append(row.summary)
        data['source'].append(row.source)
        data['agency'].append(row.agency)
        data['date'].append(row.date)
        data['longitude'].append(row.longitude)
        data['latitude'].append(row.latitude)
    df = pd.DataFrame.from_dict(data)
    geojson_dict = df_to_geojson(df)
    geojson_str = json.dumps(geojson_dict, indent=2)

    return geojson_str


if __name__ == "__main__":
    app.secret_key = 'super secret key'
    app.config['_session_TYPE'] = 'filesystem'
    app.run(debug=True)
