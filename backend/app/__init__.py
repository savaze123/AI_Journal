from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    @app.route("/api/hello")
    def hello():
        return {"message": "Hello from Flask backend!"}
    
    from .routes.test import test_bp
    app.register_blueprint(test_bp)
    return app
