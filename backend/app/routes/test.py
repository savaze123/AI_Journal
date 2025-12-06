from flask import Blueprint 

test_bp = Blueprint('test', __name__, url_prefix = "/api")

@test_bp.get("/hello")
def hello():
  return {"message": "Hello from Flask"}