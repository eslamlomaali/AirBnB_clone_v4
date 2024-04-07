#!/usr/bin/python3
"""Write a script that starts a Flask web application:"""
from flask import Flask, render_template
from models import storage
import uuid
app = Flask('web_dynamic')
app.url_map.strict_slashes = False


@app.route('/0-hbnb')
def display_hbnb():
    """Generate page with states/cities"""
    city = storage.all('State')
    amens = storage.all('Amenity')
    wheres = storage.all('Place')
    cache = uuid.uuid4()
    return render_template('4-hbnb.html',
                           city=states,
                           amens=amenities,
                           wheres=places,
                           cache=cache_id)


@app.teardown_appcontext
def teardown_db(*args, **kwargs):
    """Close database"""
    storage.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
