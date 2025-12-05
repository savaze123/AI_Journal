from flask import Blueprint, jsonify 

test_bp = Blueprint("test",__name__)

@test_bp.route("/hello")
def hello():
    return jsonify({"message": "Hi from Flask Man"})