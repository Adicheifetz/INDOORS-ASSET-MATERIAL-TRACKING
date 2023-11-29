from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    dynamic_content = "Hello, this is dynamic content!"
    return render_template('index.html', content=dynamic_content)

if __name__ == '__main__':
    app.run(debug=True)